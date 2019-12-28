import React, { useState } from "react";

export const ChoosenDataContext = React.createContext<any>({});

export const ChoosenDataProvider: React.FC = props => {
  const [data, setData] = useState({});
  return (
    <ChoosenDataContext.Provider value={[data, setData]}>
      {props.children}
    </ChoosenDataContext.Provider>
  );
};
