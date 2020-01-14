import React from "react";
import Title from "../Title/Title";
import { ChoosenDataProvider } from "../context/choosenDataFromTable";
import ShowDevices from "../ShowDevices/ShowDevices";
import { Route } from "react-router-dom";
import ShowSearchedDevices from "../ShowDevices/ShowSearchedDevices";
import UserRoutes from "./User";
import GiveOutDevice from "../DeviceUser/GiveOutDevice";
import GetDevice from "../DeviceUser/GetDevice";
const MagazynierRoutes: React.FC = () => {
  return (
    <>
      <Route path="/urzadzenia_magazynu">
        <Title
          title="Tutaj możesz zobaczyć wszystkie urządzenia"
          button={true}
        />
        <ChoosenDataProvider values={[]}>
          <ShowDevices query="select * from sprzet" />
        </ChoosenDataProvider>
      </Route>
      <Route path="/wyszukaj_urzadzenia">
        <Title title="Tutaj możesz wyszukać urzadzenie" button={true} />
        <ShowSearchedDevices query="select * from sprzet" />
      </Route>
      <Route path="/wydaj_urzadzenie">
        <Title title="Tutaj możesz wydać urzadzenie" button={true} />
        <GiveOutDevice />
      </Route>
      <Route path="/odbierz_urzadzenie">
        <Title title="Tutaj możesz odebrać urzadzenie" button={true} />
        <GiveOutDevice />
      </Route>
      <Route path="/magazyn_zglos_usterke">
        <Title title="Tutaj możesz zgłosić uszkodzenie urzadzenie" button={true} />
        <GetDevice />
      </Route>
      <UserRoutes />
    </>
  );
};
export default MagazynierRoutes;
