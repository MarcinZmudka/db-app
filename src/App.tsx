import React, { useContext } from "react";
import "./App.css";
import Login from "./Login/Login";
import RoutingManager from "./RoutingManager";
import { UserLoggedContext, UserLoggedProvider } from "./context/UserLogged";
import GroupOfInputs from "./GroupOfInputs/Group";


const App: React.FC = () => {
  return (
    <div className="App">
      {/* <UserLoggedProvider>
        <Conditional />
      </UserLoggedProvider> */}
      <GroupOfInputs values = {["1","2","3","4","5","6"]} buttonName="raz dwa" buttonFunction = {()=>{}} />
    </div>
  );
};
const Conditional: React.FC = () => {
  const [user_logged] = useContext(UserLoggedContext);
  sessionStorage.setItem('id', user_logged.id);
  return (
    <React.Fragment>
      {user_logged !== false ? <RoutingManager job_id ={user_logged.job_id}/> : <Login error_message={""} />}
    </React.Fragment>
  );
};
export default App;
