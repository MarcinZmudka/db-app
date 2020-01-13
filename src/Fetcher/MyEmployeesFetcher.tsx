import React, { useState, useEffect } from "react";
import Table from "../Table/Table";

interface IProps {
  tableValue: string[];
  fetched: boolean;
}

const FetcherDeviceComponent: React.FC<IProps> = ({ tableValue, fetched }) => {
  return (
    <>
      {fetched ? (
        <>
          <Table
            values={tableValue}
            titles={["Imię", "Nazwisko", "Pesel", "Dział", "Stanowisko"]}
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
              value.imie,
              value.nazwisko,
              value.pesel,
              value.id_dzialu,
              value.id_stanowiska
            ];
          });
          setFetched(true);
          setTableValue(table.flat(Infinity));
        });
  });
  return <FetcherDeviceComponent fetched={fetched} tableValue={tableValue} />;
};
export default FetcherDevice;
