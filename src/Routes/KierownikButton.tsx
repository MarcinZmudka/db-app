import React from "react";
import MenuButton from "../RighSideMenu/MenuButton";
import { Switch, Route } from "react-router-dom";
import UserButtons from "./UserButtons";

const KierownikButtons: React.FC = () => {
  return (
    <Switch>
      <Route path="/menu/sprzet">
        <MenuButton path={"dodaj_urzadzenie"} text={"Dodaj urządzenie"} />
        <MenuButton path={"usun_urzadzenie"} text={"Usuń urządzenie"} />
        <MenuButton path={"wyszukaj_urzadzenie"} text={"Wyszukaj urządzenie"} />
        <MenuButton
          path={"urzadzenia_magazyn"}
          text={"Wyświetl urządzenia wybranego magazynu"}
        />
        <MenuButton
          path={"wszystkie_urzadzenia"}
          text={"Wyświetl wszystkie urządzenia"}
        />
        <MenuButton path={"statystyki"} text={"Generuj statystyki"} />
        <MenuButton path={"zmiana_danych"} text={"Zmiana danych urządzenia"} />
      </Route>
      <Route path="/menu/ludzie">
        <MenuButton
          path={"zakladanie_konta"}
          text={"Załóż konto pracownikowi"}
        />
        <MenuButton path={"usun_konto"} text={"Usuń konto pracownikowi"} />
        <MenuButton path={"zmien_konto"} text={"Zmień dane pracownika"} />
      </Route>
      <UserButtons/>
    </Switch>
  );
};
export default KierownikButtons;
