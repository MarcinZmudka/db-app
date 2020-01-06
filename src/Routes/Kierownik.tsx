import React from "react";
import GroupOfInputs from "../GroupOfInputs/Group";
import Title from "../Title/Title";
import { ChoosenDataProvider } from "../context/choosenDataFromTable";
import Fetcher from "../Fetcher/ChangeUserData";
import FetcherDevice from "../Fetcher/ChangeDeviceData";
import MyDevicesFetcher from "../Fetcher/MyDevicesFetcher";
import ShowDevices from "../ShowDevices/ShowDevices";
import Boxer from "../BoxeOfSelectorAndTable/Boxer";
import { Route } from "react-router-dom";
import ShowSearchedDevices from "../ShowDevices/ShowSearchedDevices";
import ButtonContext from "../Buttons/ButtonContextSql";
import UserRoutes from "./User";
const KierownikRoutes: React.FC = () => {
  return (
    <>
      <Route path="/dodaj_urzadzenie">
        <Title title="Tutaj możesz dodać urządzenie" button={true} />
        <GroupOfInputs
          values={[
            "Typ",
            "Model",
            "Producent",
            "Opis techniczny",
            "Stan techniczny",
            "Numer Ewidencyjny"
          ]}
          buttonName="Dodaj urządzenie"
          buttonFunction={() => {}}
        />
      </Route>
      <Route path="/zakladanie_konta">
        <Title title="Tutaj możesz dodać nowego użytkownika" button={true} />
        <GroupOfInputs
          values={["Imię", "Nazwisko", "Pesel", "Dział firmy", "Stanowisko"]}
          buttonName="Dodaj pracownika"
          buttonFunction={() => {}}
        />
      </Route>
      <Route path="/zmien_konto">
        <ChoosenDataProvider
          values={["Imię", "Nazwisko", "Pesel", "Dział firmy", "Stanowisko"]}
        >
          <Fetcher />
        </ChoosenDataProvider>
      </Route>
      <Route path="/usun_konto">
      <Title title="Tutaj możesz usunąć pracownika" button={true} />
        <ChoosenDataProvider values={[]}>
          <ButtonContext buttonText="usun wybranego pracownika" query="" />
          <MyDevicesFetcher />
        </ChoosenDataProvider>
      </Route>
      <Route path="/zmiana_danych">
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
          <FetcherDevice />
        </ChoosenDataProvider>
      </Route>
      <Route path="/usun_urzadzenie">
        <Title title="Tutaj możesz usunąć urządzenie" button={true} />
        <ChoosenDataProvider values={[]}>
          <ButtonContext buttonText="usun wybrane urzadzenie" query="" />
          <MyDevicesFetcher />
        </ChoosenDataProvider>
      </Route>
      <Route path="/wszystkie_urzadzenia">
        <Title
          title="Tutaj możesz zobaczyć wszystkie urządzenia"
          button={true}
        />
        <ChoosenDataProvider values={[]}>
          <ShowDevices query="" />
        </ChoosenDataProvider>
      </Route>
      <Route path="/urzadzenia_magazyn">
        <Title title="Urządzenia wybranego magazynu" button={true} />
        <Boxer />
      </Route>
      <Route path="/wyszukaj_urzadzenie">
        <Title title="Tutaj możesz wyszukać urzadzenie" button={true} />
        <ShowSearchedDevices query="" />
      </Route>
      <UserRoutes/>
    </>
  );
};
export default KierownikRoutes;