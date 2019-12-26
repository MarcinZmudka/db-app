import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MenuList from "./RighSideMenu/MenuList";
import ButtonList from "./ButtonList/ButtonList";
import MenuButton from "./RighSideMenu/MenuButton";
import Navbar from "./navbar/NavbarComponent";
const RoutingManager: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="box">
          <Route exact path={["/menu", "/menu/sprzet", "/menu/ludzie", "/menu/twoje_urzadzenia"]}>
        <MenuList>
            <MenuButton path={"menu/sprzet"} text={"sprzęt"} />
            <MenuButton path={"menu/ludzie"} text={"ludzie"} />
            <MenuButton path={"menu/twoje_urzadzenia"} text={"raporty"} />
        </MenuList>
          </Route>
        <ButtonList>
          <Switch>
            <Route path="/menu/sprzet">
              <MenuButton path={"dodaj_urzadzenie"} text={"Dodaj urządzenie"} />
              <MenuButton path={"usun_urzadzenie"} text={"Usuń urządzenie"} />
              <MenuButton path={"wyszukaj_urzadzenie"} text={"Wyszukaj urządzenie"} />
              <MenuButton path={"urzadzenia_magazyn"} text={"Wyświetl urządzenia wybraego magazynu"} />
              <MenuButton path={"wszystkie_urzadznia"} text={"Wyświel wszystkie urządzenia"} />
              <MenuButton path={"statystyki"} text={"Generuj statystyki"} />
              <MenuButton path={"zmiana_danych"} text={"Zmiana danych urządzenia"} />
            </Route>
            <Route path="/menu/ludzie">
              <MenuButton path={"zakladanie_konta"} text={"Załóż konto pracownikowi"} />
              <MenuButton path={"nadaj_role"} text={"Nadaj role pracownikowi"} />
              <MenuButton path={"odbierz_role"} text={"Odbierz role pracownikowi"} />
              <MenuButton path={"usun_konto"} text={"Usuń konto pracownikowi"} />
              <MenuButton path={"zmień_konto"} text={"Zmień dane pracownika"} />
            </Route>
            <Route path="/menu/twoje_urzadzenia">
              <MenuButton path={"zglos_uszkodzenie"} text={"Zgłoś uszkodzenie urządzenia"} />
              <MenuButton path={"urzadzenia"} text={"Zobacz posiadane urządzenia"} />
              <MenuButton path={"oddaj"} text={"Oddaj urządzenie"} />
              {/**<MenuButton path = {"menu"} text = {"POWRÓT"}/> */}
            </Route>
          </Switch>
        </ButtonList>
      </div>
      <div className="circle_after_login_box">
      <div className="circle"></div>
      </div>
    </Router>
  );
};
export default RoutingManager;
