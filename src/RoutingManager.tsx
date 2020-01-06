import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuList from "./RighSideMenu/MenuList";
import ButtonList from "./ButtonList/ButtonList";
import MenuButton from "./RighSideMenu/MenuButton";
import Navbar from "./navbar/NavbarComponent";
import GroupOfInputs from "./GroupOfInputs/Group";
import Title from "./Title/Title";
import { ChoosenDataProvider } from "./context/choosenDataFromTable";
import Fetcher from "./Fetcher/ChangeUserData";
import FetcherDevice from "./Fetcher/ChangeDeviceData";
import MyDevicesFetcher from "./Fetcher/MyDevicesFetcher";
import ShowDevices from "./ShowDevices/ShowDevices";
import Boxer from "./BoxeOfSelectorAndTable/Boxer";
import Container from "./BoxeOfSelectorAndTable/Container";
import ShowSearchedDevices from "./ShowDevices/ShowSearchedDevices";
import ButtonContext from "./Buttons/ButtonContextSql";

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
            <MenuButton path={"menu/ludzie"} text={"Ludzie"} />
            <MenuButton path={"menu/twoje_urzadzenia"} text={"Twoje urządzenia"} />
          </MenuList>
        </Route>
        <ButtonList>
          <Switch>
            <Route path="/menu/sprzet">
              <MenuButton path={"dodaj_urzadzenie"} text={"Dodaj urządzenie"} />
              <MenuButton path={"usun_urzadzenie"} text={"Usuń urządzenie"} />
              <MenuButton
                path={"wyszukaj_urzadzenie"}
                text={"Wyszukaj urządzenie"}
              />
              <MenuButton
                path={"urzadzenia_magazyn"}
                text={"Wyświetl urządzenia wybranego magazynu"}
              />
              <MenuButton
                path={"wszystkie_urzadzenia"}
                text={"Wyświetl wszystkie urządzenia"}
              />
              <MenuButton path={"statystyki"} text={"Generuj statystyki"} />
              <MenuButton
                path={"zmiana_danych"}
                text={"Zmiana danych urządzenia"}
              />
            </Route>
            <Route path="/menu/ludzie">
              <MenuButton
                path={"zakladanie_konta"}
                text={"Załóż konto pracownikowi"}
              />
              <MenuButton
                path={"nadaj_role"}
                text={"Nadaj role pracownikowi"}
              />
              <MenuButton
                path={"odbierz_role"}
                text={"Odbierz role pracownikowi"}
              />
              <MenuButton
                path={"usun_konto"}
                text={"Usuń konto pracownikowi"}
              />
              <MenuButton path={"zmien_konto"} text={"Zmień dane pracownika"} />
            </Route>
            <Route path="/menu/twoje_urzadzenia">
              <MenuButton
                path={"zglos_uszkodzenie"}
                text={"Zgłoś uszkodzenie urządzenia"}
              />
              <MenuButton
                path={"urzadzenia"}
                text={"Zobacz posiadane urządzenia"}
              />
              <MenuButton path={"oddaj"} text={"Oddaj urządzenie"} />
              {/**<MenuButton path = {"menu"} text = {"POWRÓT"}/> */}
            </Route>
          </Switch>
          <Switch>
            <Route path="/dodaj_urzadzenie">
              <Title title="Tutaj możesz dodać urządzenie" button={true} />
              <GroupOfInputs
                values={[
                  "Typ",
                  "Model",
                  "Producent",
                  "Opis techniczny",
                  "Stan techniczny",
                  "Numer Ewidencyjny"
                ]}
                buttonName="Dodaj urządzenie"
                buttonFunction={() => {}}
              />
            </Route>
            <Route path="/zakladanie_konta">
              <Title
                title="Tutaj możesz dodać nowego użytkownika"
                button={true}
              />
              <GroupOfInputs
                values={[
                  "Imię",
                  "Nazwisko",
                  "Pesel",
                  "Dział firmy",
                  "Stanowisko"
                ]}
                buttonName="Dodaj pracownika"
                buttonFunction={() => {}}
              />
            </Route>
            <Route path="/zmien_konto">
              <ChoosenDataProvider
                values={[
                  "Imię",
                  "Nazwisko",
                  "Pesel",
                  "Dział firmy",
                  "Stanowisko"
                ]}
              >
                <Fetcher />
              </ChoosenDataProvider>
            </Route>
            /**urządzenia  */
            <Route path="/zmiana_danych">
              <ChoosenDataProvider
                values={[
                  "Typ",
                  "Model",
                  "Producent",
                  "Opis techniczny",
                  "Stan techniczny",
                  "Numer Ewidencyjny"
                ]}
              >
                <FetcherDevice />
              </ChoosenDataProvider>
            </Route>
            <Route path="/usun_urzadzenie">
              <Title title="Tutaj możesz usunąć urządzenie" button={true} />
              <ChoosenDataProvider values={[]}>
                <ButtonContext buttonText="usun wybrane urzadzenie" query=""/>
                <MyDevicesFetcher/>
              </ChoosenDataProvider>
            </Route>
            <Route path="/wszystkie_urzadzenia">
              <Title title="Tutaj możesz zobaczyć wszystkie urządzenia" button={true} />
              <ChoosenDataProvider values={[]}>
                <ShowDevices query=""/>
              </ChoosenDataProvider>
            </Route>
            <Route path="/urzadzenia_magazyn">
              <Title title="Urządzenia wybranego magazynu" button={true} />
              <Boxer/>
            </Route>
            <Route path="/wyszukaj_urzadzenie">
                <Title title="Tutaj możesz wyszukać urzadzenie" button={true}/>
                <ShowSearchedDevices query=""/>
            </Route>
            /**User routes */
            <Route path="/zglos_uszkodzenie">
              <Title title="Zgłoś uszkodzenie urządzenia" button={true}></Title>
              <Container text="Potwierdź zepsucie" query=""/>
            </Route>
            <Route path="/oddaj">
              <Title title="Oddaj swoje urządzenie" button={true}></Title>
              <Container text="Potwierdź oddanie" query=""/>
            </Route>
            <Route path="/urzadzenia">
              <Title title="Tutaj możesz zobaczyć swoje urządzenia" button={true}/>
              <ChoosenDataProvider
                values={[
                  "Typ",
                  "Model",
                  "Producent",
                  "Opis techniczny",
                  "Stan techniczny",
                  "Numer Ewidencyjny"
                ]}
              >
                <MyDevicesFetcher/>
              </ChoosenDataProvider>
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
