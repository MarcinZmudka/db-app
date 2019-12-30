import React, { useContext } from "react";
import "./App.css";
import Login from "./Login/Login";
import RoutingManager from "./RoutingManager";
import { UserLoggedContext, UserLoggedProvider } from "./context/UserLogged";
import Table from "./Table/Table";
import GroupOfInputs from "./GroupOfInputs/Group";

const App: React.FC = () => {
  return (
    <div className="App">
      <UserLoggedProvider>
        <Conditional />
      </UserLoggedProvider>
      
      {/* <GroupOfInputs
        values={["Marcin", "Marcin1", "Marcin2", "Marcin3", "Marcin4"]}
        buttonName={"Potwierdz"}
        buttonFunction={() => {}}
      /> */}
    </div>
  );
};
const Conditional: React.FC = () => {
  const [user_logged] = useContext(UserLoggedContext);
  return (
    <React.Fragment>
      {user_logged ? <RoutingManager /> : <Login error_message={""} />}
    </React.Fragment>
  );
};
export default App;
