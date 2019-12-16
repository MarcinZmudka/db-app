import React, { createContext, useState } from "react";

export interface AppContextInterface {
    userLogged: boolean,
    setUserLogged: Function
  }
  
  const ctxt = React.createContext<AppContextInterface | null>(null);
  
  export const AppContextProvider = ctxt.Provider;
    
  export const AppContextConsumer = ctxt.Consumer;