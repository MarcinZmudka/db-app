import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuList from "./RighSideMenu/MenuList";
import ButtonList from "./ButtonList/ButtonList";
import MenuButton from "./RighSideMenu/MenuButton";
import Navbar from "./navbar/NavbarComponent";
import KierownikRoutes from "./Routes/Kierownik";
import UserRoutes from "./Routes/User";
import UserButtons from "./Routes/UserButtons";
import KierownikButtons from "./Routes/KierownikButton";
import MagazynierButtons from "./Routes/MagazynierButtons";
import MagazynierRoutes from "./Routes/MagazynierRoutes";
import SerwisantButtons from "./Routes/SerwisantButtons";
import SerwisantRoutes from "./Routes/SerwisantRoutes";

interface IProps {
  job_id: number;
}
const RoutingManager: React.FC<IProps> = ({ job_id }) => {
  switch (job_id) {
    case 1: //kierownik
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
                <MenuButton path={"menu/ludzie"} text={"Ludzie"} />
                <MenuButton
                  path={"menu/twoje_urzadzenia"}
                  text={"Twoje urządzenia"}
                />
              </MenuList>
            </Route>
            <ButtonList>
              <KierownikButtons />
              <Switch>
                <KierownikRoutes />
              </Switch>
            </ButtonList>
          </div>
          <div className="circle_after_login_box">
            <div className="circle"></div>
          </div>
        </Router>
      );
    case 2: //magazynier
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
                <MenuButton
                  path={"menu/twoje_urzadzenia"}
                  text={"Twoje urządzenia"}
                />
              </MenuList>
            </Route>
            <ButtonList>
              <MagazynierButtons />
              <Switch>
                <MagazynierRoutes />
              </Switch>
            </ButtonList>
          </div>
          <div className="circle_after_login_box">
            <div className="circle"></div>
          </div>
        </Router>
      );
    case 3: //serwisant
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
                <MenuButton
                  path={"menu/twoje_urzadzenia"}
                  text={"Twoje urządzenia"}
                />
              </MenuList>
            </Route>
            <ButtonList>
              <SerwisantButtons />
              <Switch>
                <SerwisantRoutes />
              </Switch>
            </ButtonList>
          </div>
          <div className="circle_after_login_box">
            <div className="circle"></div>
          </div>
        </Router>
      );
    case 4: //pracownik
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
                <MenuButton
                  path={"menu/twoje_urzadzenia"}
                  text={"Twoje urządzenia"}
                />
              </MenuList>
            </Route>
            <ButtonList>
              <UserButtons />
              <Switch>
                <UserRoutes />
              </Switch>
            </ButtonList>
          </div>
          <div className="circle_after_login_box">
            <div className="circle"></div>
          </div>
        </Router>
      );
  }
  return <></>;
};
export default RoutingManager;
