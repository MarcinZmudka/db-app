import React from "react";
interface IProps {
  values: string[];
}
const Table: React.FC<IProps> = ({ values }) => {
  return (
    <div className={""}>
      {values.map((value,index) => (
        <div className={""} key={index}>{value}</div>
      ))}
    </div>
  );
};
export default Table;
