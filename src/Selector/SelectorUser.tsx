import React, { useState, useEffect } from "react";
import "./Selector.css";

interface IProps {
  updateChoosenValue: Function;
  text: string;
  query: string;
}
const Selector: React.FC<IProps> = ({ updateChoosenValue, text, query }) => {
  const [inputValue, setInputValue] = useState([""]);
  useEffect(() => {
    if (inputValue[0] !== "") {
      return;
    }
    fetch(`http://localhost:3001/query?query=${query}`)
      .then(res => res.json())
      .then(data => {
          console.log("joł");
        const array: string[] = [];
        data.data.map((item: any) => {
          const label = `${item.imie}  ${item.nazwisko} ${item.pesel}`;
          array.push(label);
        });
        setInputValue(array);
      });
  });
  return (
    <>
      {inputValue === [""] ? (
        "loader"
      ) : (
        <select
          className="selector_select"
          onChange={e => updateChoosenValue(e)}
        >
          <option>{text}</option>
          {inputValue.map((value, index) => (
            <option className="selector_option" value={value} key={index}>
              {`${value}`}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default Selector;
