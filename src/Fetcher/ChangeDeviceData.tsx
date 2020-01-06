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
            buttonName="Dodaj pracownika"
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

//zmienić to gówno
const FetcherDevice: React.FC = () => {
    const [fetched, setFetched] = useState(false);
    const [tableValue, setTableValue] = useState(["1"]);
    useEffect(() => {
      if (!fetched)
      fetch("http://localhost:3001/query")
        .then(res => {
          return res.json();
        })
        .then(data => {
          setFetched(true);
          setTableValue([
            "Marcin1",
            "Marcin2",
            "Marcin3",
            "Marcin4",
            "Marcin5",
            "Marcin6",
            "Marcin7",
            "Marcin8",
            "Marcin9",
            "Marcin10",
            "Marcin1",
            "Marcin2",
            "Marcin3",
            "Marcin4",
            "Marcin5",
            "Marcin6",
            "Marcin7",
            "Marcin8",
            "Marcin9",
            "Marcin10",
            "Marcin1",
            "Marcin2",
            "Marcin3",
            "Marcin4",
            "Marcin5",
            "Marcin6",
            "Marcin7",
            "Marcin8",
            "Marcin9",
            "Marcin10",
            "Marcin1",
            "Marcin2",
            "Marcin3",
            "Marcin4",
            "Marcin5",
            "Marcin6",
            "Marcin7",
            "Marcin8",
            "Marcin9",
            "Marcin10"
          ]);
          // console.log(data, fetched);
        });
    });
  return <FetcherDeviceComponent fetched={fetched} tableValue={tableValue} />;
};
export default FetcherDevice;
