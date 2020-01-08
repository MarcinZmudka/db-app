import React from "react";
import Title from "../Title/Title";
import { ChoosenDataProvider } from "../context/choosenDataFromTable";
import ShowDevices from "../ShowDevices/ShowDevices";
import { Route } from "react-router-dom";
import ShowSearchedDevices from "../ShowDevices/ShowSearchedDevices";
import UserRoutes from "./User";
import GiveOutDevice from "../DeviceUser/GiveOutDevice";

const SerwisantRoutes: React.FC = () => {
  return (
    <>
      <Route path="/napraw_urzadzenie">
        <Title
          title="Tutaj możesz naprawić urządzenie"
          button={true}
        />
        <ChoosenDataProvider values={[]}>
          <ShowDevices query="" />
        </ChoosenDataProvider>
      </Route>
      <Route path="/oblicz_koszt">
        <Title title="Tutaj możesz obliczyć koszt naprawy" button={true} />
        <ShowSearchedDevices query="" />
      </Route>
      <Route path="/lista_naprawy">
        <Title title="Lista urządzeń do naprawy " button={true} />
        <GiveOutDevice/>
      </Route>
      <UserRoutes/>
    </>
  );
};
export default SerwisantRoutes;