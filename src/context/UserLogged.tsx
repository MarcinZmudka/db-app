import React, { useState} from "react";

export const UserLoggedContext = React.createContext<any>(false);

export const UserLoggedProvider: React.FC = props => {
  const [userLogged, setUserLogged] = useState(true);
  return (
    <UserLoggedContext.Provider value={[userLogged, setUserLogged]}>
      {props.children}
    </UserLoggedContext.Provider>
  );
};

