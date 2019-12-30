import React, { useState } from "react";

export const ChoosenDataContext = React.createContext<any>({});
interface IProps{
  values: string[]
}
export const ChoosenDataProvider: React.FC<IProps> = (props) => {
  const [data, setData] = useState(props.values);
  return (
    <ChoosenDataContext.Provider value={[data, setData]}>
      {props.children}
    </ChoosenDataContext.Provider>
  );
};
