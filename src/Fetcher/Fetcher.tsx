import React, { useState, useContext } from "react";
import Title from "../Title/Title";
import GroupOfInputs from "../GroupOfInputs/Group";
import Table from "../Table/Table";
import { ChoosenDataContext } from "../context/choosenDataFromTable";

// interface IProps {
//   input: React.FunctionComponent;
//   table: React.FunctionComponent;
//   sql_query: string;
// }

const Fetcher: React.FC = () => {
  const [fetched, setFetched] = useState(false);
  const [choosenData, setChoosenData] = useContext(ChoosenDataContext);
  // setChoosenData(["Imię", "Nazwisko", "Pesel", "Dział firmy", "Stanowisko"]);
  return (
    <>
      <DB_connector setFetched={setFetched} />
      {fetched ? (
        <>
          <Title title="Tutaj możesz zmienić dane użytkownika" button={true} />
          <GroupOfInputs
            values = {choosenData} 
            buttonName="Dodaj pracownika"
            buttonFunction={() => {}}
          />
          <Table
            values={[
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
            ]}
            titles={["Marcin1", "Marcin2", "Marcin3", "Marcin4", "Marcin5"]}
          />
        </>
      ) : (
        "loader"
      )}
    </>
  );
};
interface IProps {
  setFetched: any;
}
//zmienić to gówno
const DB_connector: React.FC<IProps> = ({ setFetched }) => {
  fetch("http://localhost:3001/query")
    .then(res => {
      return res.json();
    })
    .then(data => {
      setFetched(true);
      console.log(data);
    });
  return <div></div>;
};
export default Fetcher;
