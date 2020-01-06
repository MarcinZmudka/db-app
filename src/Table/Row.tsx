import React, { useContext } from "react";
import { ChoosenDataContext } from "../context/choosenDataFromTable";

interface IProps {
  values: string[],
  key1: number
}
const Row: React.FC<IProps> = ({ values, key1 }) => {
  const [, setChoosenData] = useContext(ChoosenDataContext);
  const size = Math.floor(70 / values.length);
  const style = {
    width: size + "vw"
  };
  return (
    <div className="table_values" data-id={key1} onClick={(e) => {
      setChoosenData(values);
      const fathers = document.querySelectorAll(".table_values");
      const fatherArray = Array.prototype.slice.call(fathers);
      fatherArray.map(father => {
        const children = Array.prototype.slice.call(father?.children);
        children.map(item => item.style.backgroundColor = "#dadada");
      })
      const father = document.querySelector(`[data-id='${key1}']`);
      const children = Array.prototype.slice.call(father?.children);
      children.map(item => item.style.backgroundColor = "#26edd5");
      }}>
      {values.map((value, index) => (
        <div className="table_value" style={style} key={index} >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Row;
