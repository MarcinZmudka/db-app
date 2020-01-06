import React from "react";
import MenuButton from "../RighSideMenu/MenuButton";
import {  Route } from "react-router-dom";
const KierownikButtons: React.FC = () => {
  return (
    <>
      <Route path="/menu/twoje_urzadzenia">
        <MenuButton
          path={"zglos_uszkodzenie"}
          text={"Zgłoś uszkodzenie urządzenia"}
        />
        <MenuButton path={"urzadzenia"} text={"Zobacz posiadane urządzenia"} />
        <MenuButton path={"oddaj"} text={"Oddaj urządzenie"} />
      </Route>
    </>
  );
};
export default KierownikButtons;