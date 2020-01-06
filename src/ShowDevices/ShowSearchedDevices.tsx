import React, { useState, useEffect } from "react";
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
  const searchForValues = ({
    MODEL = "",
    NUMER_EWIDENCYJNY = "",
    TYP = ""
  }: {
    MODEL: string;
    NUMER_EWIDENCYJNY: string;
    TYP: string;
  }) => {
    const arrayOfValues = values.filter(value => {
      console.log(`${MODEL}, ${NUMER_EWIDENCYJNY}, ${TYP}`);
      if (value[0].toLowerCase().includes(TYP.toLowerCase()) && 
          value[1].toLowerCase().includes(MODEL.toLowerCase()) &&
          value[5].toLowerCase().includes(NUMER_EWIDENCYJNY.toLowerCase())
          ) {
        return value;
      }
    });
    console.log(arrayOfValues);
    setSearchedValues(arrayOfValues.flat(Infinity));
  };
  useEffect(() => {
    fetch(`http://localhost:3001/query?${query}`)
      .then(res => res.json())
      .then(data => {
        setValues(
          groupValues(
            [
              "Typ1",
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
              "Model4",
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
              "Ty6p",
              "Model",
              "Producent",
              "Opis techniczny",
              "Stan techniczny",
              "Numer Ewidencyjny-/",
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
  }, [values]);

  return (
    <>
      <ChoosenDataProvider values={[]}>
        <GroupOfInputs
          values={["TYP", "MODEL", "NUMER_EWIDENCYJNY"]}
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
