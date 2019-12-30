import React, { useContext } from "react";
import { ChoosenDataContext } from "../context/choosenDataFromTable";

interface IProps {
  values: string[];
}
const Row: React.FC<IProps> = ({ values }) => {
  const [, setChoosenData] = useContext(ChoosenDataContext);
  const size = Math.floor(70 / values.length);
  const style = {
    width: size + "vw"
  };
  return (
    <div className="table_values" onClick={() => setChoosenData(values)}>
      {values.map((value, index) => (
        <div className="table_value" style={style} key={index}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default Row;
