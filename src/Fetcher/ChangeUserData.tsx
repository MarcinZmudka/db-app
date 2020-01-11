import React, { useState, useContext, useEffect } from "react";
import Title from "../Title/Title";
import GroupOfInputs from "../GroupOfInputs/GroupChange";
import Table from "../Table/Table";
import { ChoosenDataContext } from "../context/choosenDataFromTable";

interface IProps {
  tableValue: string[];
  fetched: boolean;
}
const FetcherComponent: React.FC<IProps> = ({ fetched, tableValue }) => {
  const [choosenData, setChoosenData] = useContext(ChoosenDataContext);
  console.log(fetched);
  return (
    <>
      {fetched ? (
        <>
          <Title title="Tutaj możesz zmienić dane użytkownika" button={true} />
          <GroupOfInputs
            values={choosenData}
            buttonName="Dodaj pracownika"
            buttonFunction={() => {}}
          />
          <Table
            values={tableValue}
            titles={["Imię", "Nazwisko", "Pesel", "Dział firmy", "Stanowisko"]}
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
const Fetcher: React.FC<IPropsF> = ({query}) => {
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
            value.imie,
            value.nazwisko,
            value.pesel,
            value.id_dzialu+"",
            value.id_stanowiska+""
          ];
        });
        console.log(table);
        setFetched(true);
        setTableValue(table.flat(Infinity));
      });
  })
  return <FetcherComponent fetched={fetched} tableValue={tableValue} />;
};
export default Fetcher;
