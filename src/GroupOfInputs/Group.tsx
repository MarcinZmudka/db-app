import React, { useState } from "react";

interface IProps {
  values: string[],
  buttonName: string,
  buttonFunction: Function
}

const GroupOfInputs: React.FC<IProps> = ({ values, buttonFunction, buttonName }) => {
  const [state, setState] = useState({});
  const upadateState = (event: React.FormEvent<HTMLInputElement>) => {
    const oldState = state;
    const attribute = event.currentTarget.placeholder;
    const value = event.currentTarget.value;
    Object.assign(oldState, { [attribute]: value });
    setState(oldState);
  };
  const validState = (callback: Function) => {
      if(values.length == Object.keys(state).length){
        callback();
      }
      else{
          console.log("nie wpisałeś danych do wszystkich pól");
      }
  }
  return (
    <div className={""}>
      {values.map((value, index) => (
        <input
          type="text"
          className={""}
          onChange={e => {
            upadateState(e);
          }}
          key={index}
          placeholder={value.toUpperCase()}
        />
      ))}
    <button onClick={()=>{validState(buttonFunction)}}>{buttonName}</button>
    </div>
  );
};
export default GroupOfInputs;