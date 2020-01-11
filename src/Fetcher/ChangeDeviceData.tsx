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
  //   const [fetched, setFetched] = useState(false);
  //   const [tableValue, setTableValue] = useState([]);
  const [choosenData, setChoosenData] = useContext(ChoosenDataContext);
  //   DB_connector(setFetched, setTableValue);
  return (
    <>
      {fetched ? (
        <>
          <Title title="Tutaj możesz zmienić dane urządzenia" button={true} />
          <GroupOfInputs
            values={choosenData}
            buttonName="Zmień"
            buttonFunction={() => {}}
          />
          <Table
            values={tableValue}
            titles={[
              "Typ",
              "Model",
              "Producent",
              "Opis techniczny",
              "Stan techniczny",
              "Numer Ewidencyjny",
              "Status"
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
          console.log(data);
          const table = data.data.map((value: any) => {
            return [
              value.typ,
              value.model,
              value.nazwa_producenta,
              "value.opis_techniczny",
              value.stan_techniczny,
              value.nr_ewidencyjny,
              value.status
            ];
          });
          console.log(table);
          setFetched(true);
          setTableValue(table.flat(Infinity));
        });
  });
  return <FetcherDeviceComponent fetched={fetched} tableValue={tableValue} />;
};
export default FetcherDevice;
