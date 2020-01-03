import React, { useState } from "react";
import Table from "../Table/Table";
import GroupOfInputs from "../GroupOfInputs/Group";
import groupValues from "../Table/gropValues";
import { ChoosenDataProvider } from "../context/choosenDataFromTable";

interface IProps {
  query: string;
}
const ShowDevices: React.FC<IProps> = ({ query }) => {
  const state: string[][] = [];
  const [values, setValues] = useState(state);
  const [searchedVales, setSearchedValues] = useState(values.flat(Infinity));
  const searchForValues = (model: string, number: string, type: string) => {
    const arrayOfValues = values.filter(value => {
        
      let check = false;
      value.map(val => {
        if (val.includes(model)) check = true;
        if (val.includes(number)) check = true;
        if (val.includes(type)) check = true;
      });
      if(check)
        return value;
    });
    setSearchedValues(arrayOfValues);
  };
  fetch(`http://localhost:3001/query?${query}`)
    .then(res => res.json())
    .then(data => {
      setValues(
        groupValues(
          [
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny",
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny"
          ],
          6
        )
      );
    });
  return (
    <>
    <ChoosenDataProvider values={[]}>
      <GroupOfInputs
        values={["TYP", "MODEL", "NUMER EWIDENCYJNY"]}
        buttonName="Szukaj"
        buttonFunction={searchForValues}
      />
      <Table
        titles={[
          "Typ",
          "Model",
          "Producent",
          "Opis techniczny",
          "Stan techniczny",
          "Numer Ewidencyjny"
        ]}
        values={searchedVales}
      ></Table>
    </ChoosenDataProvider>
    </>
  );
};
export default ShowDevices;
