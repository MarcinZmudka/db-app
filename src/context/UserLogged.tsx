import React, { createContext, useState, Dispatch, SetStateAction } from "react";

export const UserLoggedContext = React.createContext<any>(false);

export const UserLoggedProvider: React.FC = props => {
  const [userLogged, setUserLogged] = useState(false);
  return (
    <UserLoggedContext.Provider value={[userLogged, setUserLogged]}>
      {props.children}
    </UserLoggedContext.Provider>
  );
};

