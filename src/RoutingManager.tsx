import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MenuList from "./RighSideMenu/MenuList";
import ButtonList from "./ButtonList/ButtonList";
import MenuButton from "./RighSideMenu/MenuButton";
import Navbar from "./NavbarComponent";
const RoutingManager: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <MenuList>
        <Route path="/menu">
          <MenuButton path={"menu/sprzet"} text={"sprzęt"} />
          <MenuButton path={"menu/ludzie"} text={"ludzie"} />
          <MenuButton path={"menu/raporty"} text={"raporty"} />
        </Route>
      </MenuList>
      <ButtonList>
        <Switch>
          <Route path="/menu/sprzet">
            <MenuButton path={"sprzet1"} text={"sprzęt1"} />
            <MenuButton path={"ludzie1"} text={"ludzie1"} />
            <MenuButton path={"raporty1"} text={"raporty1"} />
          </Route>
          <Route path="/menu/ludzie">
            <MenuButton path={"sprzet2"} text={"sprzęt2"} />
            <MenuButton path={"ludzie2"} text={"ludzie2"} />
            <MenuButton path={"raporty2"} text={"raporty2"} />
          </Route>
          <Route path="/menu/raporty">
            <MenuButton path={"sprzet3"} text={"sprzęt3"} />
            <MenuButton path={"ludzie3"} text={"ludzie3"} />
            <MenuButton path={"raporty3"} text={"raporty3"} />
            {/**<MenuButton path = {"menu"} text = {"POWRÓT"}/> */}
          </Route>
        </Switch>
      </ButtonList>
    </Router>
  );
};
export default RoutingManager;
