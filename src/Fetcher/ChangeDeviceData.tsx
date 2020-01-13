import React, { useState, useContext, useEffect } from "react";
import Title from "../Title/Title";
import GroupOfInputs from "../GroupOfInputs/GroupChange";
import Table from "../Table/Table";
import { ChoosenDataContext } from "../context/choosenDataFromTable";

interface IProps {
  tableValue: string[];
  fetched: boolean;
}

const FetcherDeviceComponent: React.FC<IProps> = ({ tableValue, fetched }) => {
  const [choosenData] = useContext(ChoosenDataContext);
  const sqlFunction = (newValues: Array<string>) => {
    fetch(`http://localhost:3001/query?query=
    UPDATE sprzet
    SET typ = '${newValues[0]}', model = '${newValues[1]}', nazwa_producenta = '${newValues[2]}', opis_techniczny = NULL, stan_techniczny = '${newValues[4]}', status ='${newValues[5]}', nr_ewidencyjny = '${newValues[6]}'
    WHERE nr_ewidencyjny = '${choosenData[6]}';`);
  };
  return (
    <>
      {fetched ? (
        <>
          <Title title="Tutaj możesz zmienić dane urządzenia" button={true} />
          <GroupOfInputs
            values={choosenData}
            buttonName="Zmień"
            buttonFunction={sqlFunction}
          />
          <Table
            values={tableValue}
            titles={[
              "Typ",
              "Model",
              "Producent",
              "Opis techniczny",
              "Stan techniczny",
              "Status",
              "Numer Ewidencyjny"
            ]}
          />
        </>
      ) : (
        "loader"
      )}
    </>
  );
};

interface IPropsF {
  query: string;
}
const FetcherDevice: React.FC<IPropsF> = ({ query }) => {
  const [fetched, setFetched] = useState(false);
  const [tableValue, setTableValue] = useState(["1"]);
  useEffect(() => {
    if (!fetched)
      fetch(`http://localhost:3001/query?query=${query}`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          const table = data.data.map((value: any) => {
            return [
              value.typ,
              value.model,
              value.nazwa_producenta,
              "value.opis_techniczny",
              value.stan_techniczny,
              value.status,
              value.nr_ewidencyjny
            ];
          });
          setFetched(true);
          setTableValue(table.flat(Infinity));
        });
  });
  return <FetcherDeviceComponent fetched={fetched} tableValue={tableValue} />;
};
export default FetcherDevice;
