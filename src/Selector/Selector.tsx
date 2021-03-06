import React, { useState, useEffect } from "react";
import "./Selector.css";

interface IProps {
  updateChoosenValue: Function,
  text: string, 
  query: string
}
const Selector: React.FC<IProps> = ({ updateChoosenValue, text, query }) => {
  const [inputValue, setInputValue] = useState([""]);
  useEffect(() => {
      if(inputValue[0] ==="1"){
          return;
      }
      fetch(`http://localhost:3001/query?query=${query}`)
        .then(res => res.json())
        .then(data => {
          const values = data.data.map((value:any) => {

            const map = new Map(Object.entries(data.data[0]));
            const array =Array.from(map);
            return array[0][1];
          });
          setInputValue(values);
        });
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
              {`Magazyn${value}`}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default Selector;
