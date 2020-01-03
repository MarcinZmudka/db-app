import React, { useState } from "react";
import "./Group.css";

interface IProps {
  values: string[];
  buttonName: string;
  buttonFunction: Function;
}

const GroupOfInputs: React.FC<IProps> = ({
  values,
  buttonFunction,
  buttonName
}) => {
  const [state, setState] = useState({});
  const upadateState = (event: React.FormEvent<HTMLInputElement>) => {
    const oldState = state;
    const attribute = event.currentTarget.placeholder;
    const value = event.currentTarget.value;
    Object.assign(oldState, { [attribute]: value });
    setState(oldState);
    console.log(oldState);
  };
  const validState = (callback: Function) => {
    if (values.length == Object.keys(state).length) {
      callback();
    } else {
      console.log("nie wpisałeś danych do wszystkich pól");
    }
  };
  return (
    <>
      <div className={"box_of_inputs"}>
        {values.map((value, index) => (
          <input
            type="text"
            className={"input_from_group"}
            onChange={e => {
              upadateState(e);
            }}
            key={index}
            placeholder={value.toUpperCase()}
          />
        ))}
      </div>
      <button
        className="group_input_button"
        onClick={() => {
          validState(buttonFunction);
        }}
      >
        {buttonName}
      </button>
    </>
  );
};
export default GroupOfInputs;
