import React, { useContext } from "react";
import Title from "../Title/Title";
import GroupOfInputs from "../GroupOfInputs/Group";
import { ChoosenDataContext } from "../context/choosenDataFromTable";
import Fetcher from "../Fetcher/Fetcher";

const TableAndInput: React.FC = () => {
  const [data, setData] = useContext(ChoosenDataContext);
  return (
    <>
      <Fetcher />
    </>
  );
};
export default TableAndInput;
