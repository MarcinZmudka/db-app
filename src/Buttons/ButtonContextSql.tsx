import React, { useContext } from "react";
import { ChoosenDataContext } from "../context/choosenDataFromTable";
import "./Button.css";

interface IProps {
  query: string,
  index: number,
  buttonText: string;
}
const ButtonContext: React.FC<IProps> = ({ query, index, buttonText }) => {
  const [choosenData] = useContext(ChoosenDataContext);
  const deleteFunc = () => {
         fetch(
      `http://localhost:3001/query?query=${query}'${choosenData[index]}'`
    )
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(res => console.log(res));
  };
  return (
    <div className="button_box">
      <div
        className="button_sql"
        onClick={() => {
          deleteFunc();
        }}
      >
        {buttonText}
      </div>
    </div>
  );
};
export default ButtonContext;
