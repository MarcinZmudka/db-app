import React, { useState, useEffect } from "react";
import "./Selector.css";

interface IProps {
  updateChoosenValue: Function,
  text: string
}
const Selector: React.FC<IProps> = ({ updateChoosenValue, text }) => {
  const [inputValue, setInputValue] = useState([""]);
  useEffect(() => {
      if(inputValue.length > 1){
          return;
      }
      fetch(`http://localhost:3001/query`)
        .then(res => res.json())
        .then(data => setInputValue(["magazyn1", "magazyn2", "magazyn3"]));
  });
  return (
    <>
      {inputValue === [""] ? (
        "loader"
      ) : (
        <select className="selector_select" onChange={e => updateChoosenValue(e)}>
            <option>{text}</option>
          {inputValue.map((value, index) => (
            <option
              className="selector_option"
              value={value}
              key={index}
            >
              {value}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default Selector;
