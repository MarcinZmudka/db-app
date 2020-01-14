import React from "react";
import "./Button.css";

interface IProps {
  query: string,
  buttonText: string
}
const ButtonContext: React.FC<IProps> = ({ query, buttonText }) => {
  const deleteFunc = () => {
      console.log(query);
    fetch(`http://localhost:3001/query?query=${query}`)
      .then(res => {
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
