import React from "react";
import MenuButton from "../RighSideMenu/MenuButton";
import { Switch, Route } from "react-router-dom";
import UserButtons from "./UserButtons";

const MagazynierButtons: React.FC = () => {
  return (
    <Switch>
      <Route path="/menu/sprzet">
        <MenuButton path={"wydaj_urzadzenie"} text={"Wydaj urządzenie"} />
        <MenuButton path={"odbierz_urzadzenie"} text={"Odbierz urządzenie"} />
        <MenuButton path={"magazyn_zglos_usterke"} text={"Zgłoś usterkę"} />
        <MenuButton
          path={"urzadzenia_magazynu"}
          text={"Wyświetl urządzenia magazynu"}
        />
        <MenuButton path={"wyszukaj_urzadzenia"} text={"Wyszukaj urządzenia magazynu"} />
      </Route>
      <UserButtons/>
    </Switch>
  );
};
export default MagazynierButtons;
