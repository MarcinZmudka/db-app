import React from "react";
import "./Table.css";
import Row from "./Row";

interface IProps {
  titles: string[];
  values: string[];
}
const Table: React.FC<IProps> = ({ values, titles }) => {
  const size = Math.floor(70 / titles.length);
  const style = {
    width: size + "vw"
  };
  let temporaryArray: string[] = [];
  const groupedValues: string[][] = [];
  for (let i = 0; i <= values.length; i++) {
    if (i % titles.length === 0 && i != 0) {
      groupedValues.push(temporaryArray);
      temporaryArray = [];
      temporaryArray.push(values[i]);
    } else {
      temporaryArray.push(values[i]);
    }
  }
  return (
    <div className="table_box">
      <div className="table_titles">
        {titles.map((value, index) => (
          <div className="table_title" style={style} key={index}>
            {value}
          </div>
        ))}
      </div>
      {groupedValues.map((value, index) => (
        <Row values={value} key={index}></Row>
      ))}
    </div>
  );
};
export default Table;
