import React, { useState, useEffect } from "react";
import Table from "../Table/Table";
import { ChoosenDataProvider } from "../context/choosenDataFromTable";

interface IProps {
  query: string;
}
const ShowDevices: React.FC<IProps> = ({ query }) => {
  const [values, setValues] = useState([""]);
  useEffect(() => {
    if(values.length === 1)
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
              value.nr_ewidencyjny
            ];
          });
          setValues(table.flat(Infinity));
        });
  });

  return (
    <ChoosenDataProvider values={[]}>
      <Table
        titles={[
          "Typ",
          "Model",
          "Producent",
          "Opis techniczny",
          "Stan techniczny",
          "Numer Ewidencyjny"
        ]}
        values={values}
      ></Table>
    </ChoosenDataProvider>
  );
};
export default ShowDevices;
