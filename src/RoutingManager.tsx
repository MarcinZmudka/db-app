import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuList from "./RighSideMenu/MenuList";
import ButtonList from "./ButtonList/ButtonList";
import MenuButton from "./RighSideMenu/MenuButton";
import Navbar from "./navbar/NavbarComponent";
import KierownikRoutes from "./Routes/Kierownik";
import UserRoutes from "./Routes/User";
import KierownikButtons from "./Routes/KierownikButton";
import MagazynierButtons from "./Routes/MagazynierButtons";
import MagazynierRoutes from "./Routes/MagazynierRoutes";
import SerwisantButtons from "./Routes/SerwisantButtons";
import SerwisantRoutes from "./Routes/SerwisantRoutes";

const RoutingManager: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="box">
        <Route
          exact
          path={[
            "/menu",
            "/menu/sprzet",
            "/menu/ludzie",
            "/menu/twoje_urzadzenia"
          ]}
        >
          <MenuList>
            <MenuButton path={"menu/sprzet"} text={"Sprzęt"} />
            {/* <MenuButton path={"menu/ludzie"} text={"Ludzie"} /> */}
            <MenuButton path={"menu/twoje_urzadzenia"} text={"Twoje urządzenia"} />
          </MenuList>
        </Route>
        <ButtonList>
          <SerwisantButtons/>
          {/* <MagazynierButtons/> */}
          {/* <KierownikButtons/> */}
          <Switch>
            {/* <MagazynierRoutes/> */}
            <SerwisantRoutes />
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
