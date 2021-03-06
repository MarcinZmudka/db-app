import React from "react";
import { Route } from "react-router-dom";
import Title from "../Title/Title";
import Container from "../BoxeOfSelectorAndTable/Container";
import { ChoosenDataProvider } from "../context/choosenDataFromTable";
import MyDevicesFetcher from "../Fetcher/MyDevicesFetcher";

const UserRoutes: React.FC = () => {
  return (
    <>
      <Route path="/zglos_uszkodzenie">
        <Title title="Zgłoś uszkodzenie urządzenia" button={true}></Title>
        <Container text="Potwierdź zepsucie" query={`select * from sprzet where id_sprzetu in (select id_sprzetu from wypozyczenia where id_pracownika = ${sessionStorage.getItem('id')})`} />
      </Route>
      <Route path="/oddaj">
        <Title title="Oddaj swoje urządzenie" button={true}></Title>
        <Container text="Potwierdź oddanie" query={`select * from sprzet where id_sprzetu in (select id_sprzetu from wypozyczenia where id_pracownika = ${sessionStorage.getItem('id')})`} />
      </Route>
      <Route path="/urzadzenia">
        <Title title="Tutaj możesz zobaczyć swoje urządzenia" button={true} />
        <ChoosenDataProvider
          values={[
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny"
          ]}
        >
          <MyDevicesFetcher query={`select * from sprzet where id_sprzetu in (select id_sprzetu from wypozyczenia where id_pracownika = ${sessionStorage.getItem('id')})`}/>
        </ChoosenDataProvider>
      </Route>
    </>
  );
};
export default UserRoutes;
