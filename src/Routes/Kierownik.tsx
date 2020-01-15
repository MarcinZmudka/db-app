import React from "react";
import GroupOfInputs from "../GroupOfInputs/Group";
import Title from "../Title/Title";
import { ChoosenDataProvider } from "../context/choosenDataFromTable";
import Fetcher from "../Fetcher/ChangeUserData";
import FetcherDevice from "../Fetcher/ChangeDeviceData";
import MyDevicesFetcher from "../Fetcher/MyDevicesFetcher";
import MyEmployeesFetcher from "../Fetcher/MyEmployeesFetcher";
import ShowDevices from "../ShowDevices/ShowDevices";
import Boxer from "../BoxeOfSelectorAndTable/Boxer";
import { Route } from "react-router-dom";
import ShowSearchedDevices from "../ShowDevices/ShowSearchedDevices";
import ButtonContext from "../Buttons/ButtonContextSql";
import UserRoutes from "./User";
import addDevice from "../sqlFunctions/addDevice";
import addEmployer from "../sqlFunctions/addEmployer";
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
            "Opis",
            "Numer_Ewidencyjny",
            "Magazyn"
          ]}
          buttonName="Dodaj urządzenie"
          buttonFunction={addDevice}
        />
      </Route>
      <Route path="/zakladanie_konta">
        <Title title="Tutaj możesz dodać nowego użytkownika" button={true} />
        <GroupOfInputs
          values={[
            "Imię",
            "Nazwisko",
            "Pesel",
            "Dział_firmy",
            "Stanowisko",
            "Magazyn",
            "Filia"
          ]}
          buttonName="Dodaj pracownika"
          buttonFunction={addEmployer}
        />
      </Route>
      <Route path="/zmien_konto">
        <ChoosenDataProvider
          values={["Imię", "Nazwisko", "Pesel", "Dział firmy", "Stanowisko"]}
        >
          <Fetcher query="select * from pracownicy" />
        </ChoosenDataProvider>
      </Route>
      <Route path="/usun_konto">
        <Title title="Tutaj możesz usunąć pracownika" button={true} />
        <ChoosenDataProvider values={[]}>
          <ButtonContext
            buttonText="usun wybranego pracownika"
            query="delete from pracownicy where pesel ="
            index={2}
          />
          <MyEmployeesFetcher query="select * from pracownicy" />
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
            "Status",
            "Numer Ewidencyjny"
          ]}
        >
          <FetcherDevice query="select * from sprzet" />
        </ChoosenDataProvider>
      </Route>
      <Route path="/usun_urzadzenie">
        <Title title="Tutaj możesz usunąć urządzenie" button={true} />
        <ChoosenDataProvider values={[]}>
          <ButtonContext
            buttonText="Usuń wybrane urządzenie"
            query="delete from sprzet where nr_ewidencyjny ="
            index={5}
          />
          <MyDevicesFetcher query="select * from sprzet" />
        </ChoosenDataProvider>
      </Route>
      <Route path="/wszystkie_urzadzenia">
        <Title
          title="Tutaj możesz zobaczyć wszystkie urządzenia"
          button={true}
        />
        <ChoosenDataProvider values={[]}>
          <ShowDevices query="select * from sprzet" />
        </ChoosenDataProvider>
      </Route>
      <Route path="/urzadzenia_magazyn">
        <Title title="Urządzenia wybranego magazynu" button={true} />
        <Boxer />
      </Route>
      <Route path="/wyszukaj_urzadzenie">
        <Title title="Tutaj możesz wyszukać urzadzenie" button={true} />
        <ShowSearchedDevices query="select * from sprzet" />
      </Route>
      <UserRoutes />
    </>
  );
};
export default KierownikRoutes;
