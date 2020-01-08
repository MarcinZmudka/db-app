import React from "react";
import MenuButton from "../RighSideMenu/MenuButton";
import { Switch, Route } from "react-router-dom";
import UserButtons from "./UserButtons";

const SeriwsantButtons: React.FC = () => {
  return (
    <Switch>
      <Route path="/menu/sprzet">
        <MenuButton path={"napraw_urzadzenie"} text={"Napraw urządzenie"} />
        <MenuButton path={"oblicz_koszt"} text={"Oblicz koszt"} />
        <MenuButton path={"lista_naprawy"} text={"Lista urządzeń do naprawy"} />
      </Route>
      <UserButtons/>
    </Switch>
  );
};
export default SeriwsantButtons;