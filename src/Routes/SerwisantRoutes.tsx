import React from "react";
import Title from "../Title/Title";
import { ChoosenDataProvider } from "../context/choosenDataFromTable";
import ShowDevices from "../ShowDevices/ShowDevices";
import { Route } from "react-router-dom";
import ShowSearchedDevices from "../ShowDevices/ShowSearchedDevices";
import UserRoutes from "./User";
import RepairDevice from "../DeviceUser/RepairDevice";
import SetPriceOfFix from "../DeviceUser/SetPriceOfFix";

const SerwisantRoutes: React.FC = () => {
  return (
    <>
      <Route path="/napraw_urzadzenie">
        <Title
          title="Tutaj możesz naprawić urządzenie"
          button={true}
        />
        <RepairDevice />
      </Route>
      <Route path="/oblicz_koszt">
        <Title title="Tutaj możesz obliczyć koszt naprawy" button={true} />
        <SetPriceOfFix/>
      </Route>
      <Route path="/lista_naprawy">
        <Title title="Lista urządzeń do naprawy " button={true} />
        <ChoosenDataProvider values={[]}>
          <ShowDevices query="select * from sprzet where stan_techniczny = 'C'" />
        </ChoosenDataProvider>
      </Route>
      <UserRoutes/>
    </>
  );
};
export default SerwisantRoutes;