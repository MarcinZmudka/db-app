import React, {useState, useContext} from 'react';
import './App.css';
import Login from './Login/Login';
import RoutingManager from "./RoutingManager";
import {UserLoggedContext, UserLoggedProvider } from "./context/UserLogged";

const App: React.FC = () => {
  const [user_logged, set_user_logged] = useContext(UserLoggedContext);
  return (
    <div className="App">
      Moje DB
      <UserLoggedProvider >
        {user_logged ? <RoutingManager/> : <Login error_message={""}/>}
      </UserLoggedProvider>
      
    </div>
  );
}

export default App;
