import React, { useContext } from "react";
import Title from "../Title/Title";
import GroupOfInputs from "../GroupOfInputs/Group";
import { ChoosenDataContext } from "../context/choosenDataFromTable";

const TableAndInput: React.FC = () => {
  const [data, setData] = useContext(ChoosenDataContext);
  return (
    <>
      <Title title="Tutaj możesz zmienić dane użytkownika" button={true} />
      <GroupOfInputs
        values={["Imię", "Nazwisko", "Pesel", "Dział firmy", "Stanowisko"]}
        buttonName="Dodaj pracownika"
        buttonFunction={() => {}}
      />
    </>
  );
};
export default TableAndInput;
