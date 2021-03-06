import React, { useState, useEffect } from "react";
import "./Group.css";

interface IProps {
  values: string[],
  buttonName: string,
  buttonFunction: Function,
  titles: string[]
}

const GroupOfInputs: React.FC<IProps> = ({
  values,
  titles,
  buttonFunction,
  buttonName
}) => {
  const [inputValues, setInputValues] = useState([...values]);
  const updateState = (event: React.FormEvent<HTMLInputElement>, index: number) => {
    const value = event.currentTarget.value;
    const newState = [...inputValues];
    newState[index] = value;
    setInputValues(newState);
  };
  const validState = (callback: Function) => {
    if (values.length === Object.keys(inputValues).length) {
      callback(inputValues);
    } else {
      console.log("nie wpisałeś danych do wszystkich pól");
    }
  };
  useEffect(()=>{
      setInputValues([...values])
  }, [values])

  return (
    <>
      <div className={"box_of_inputs"}>
        {values.map((value, index) => (
          <div className="box_title_input">
            <div className="title_of_input">{titles[index]}</div>
            <input
              type="text"
              className={"input_from_group"}
              onChange={e => {
                updateState(e, index);
              }}
              key={index}
              value={inputValues[index]}
              placeholder={value.toUpperCase()}
            />
          </div>
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
