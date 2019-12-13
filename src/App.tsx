import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';

const App: React.FC = () => {
  return (
    <div className="App">
      Moje DB
      <Login error_message={""}></Login>
    </div>
  );
}

export default App;
