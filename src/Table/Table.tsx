import React, { useState } from "react";
import "./Table.css";
import Row from "./Row";
import groupValues from "./gropValues";
interface IProps {
  titles: string[];
  values: string[];
}
const Table: React.FC<IProps> = ({ values, titles }) => {
  const [page, setPage] = useState(15);
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);
  const size = Math.floor(70 / titles.length);
  const style = {
    width: size + "vw"
  };
  const updatePage = (pageNumber: number) => {
    if (pageNumber < 0) {
      if (page <= 15) {
        return;
      }
      const newPage = page + pageNumber;
      if(newPage <= 15){
        setFirst(true);
      }
      else{
        setFirst(false);
        setLast(false);
      }
      setPage(newPage);
    } else {
      if (page >= (values.length/titles.length)) {
        return;
      }
      const newPage = page + pageNumber;
        if(newPage >= (values.length/titles.length)){
          setLast(true);
        }
        else{
          setFirst(false);
          setLast(false);
        }
      setPage(newPage);
    }
  };
  const groupedValues: string[][] = groupValues(values, titles.length);

  return (
    <div className="table_box">
      <Arrows updatePage={updatePage} first={first} last = {last} />
      <div className="table_titles">
        {titles.map((value, index) => (
          <div className="table_title" style={style} key={index}>
            {value}
          </div>
        ))}
      </div>
      {groupedValues.map((value, index) =>
        index <= page && index >= page - 15 ? (
          <Row values={value} key={index} key1={index}></Row>
        ) : (
          ""
        )
      )}
    </div>
  );
};

interface ArrowProps {
  updatePage: Function,
  first: Boolean,
  last: Boolean,
}
const Arrows: React.FC<ArrowProps> = ({ updatePage, first, last }) => {
  return (
    <div className="arrow_box">
      <span className="arrow_left_wrap">
        <span
          className={`arrow_left  ${first ? "grey" : "blue"}`}
          onClick={() => {
            updatePage(-15);
          }}
        ></span>
      </span>
      <span className="arrow_right_wrap">
        <span
          className={`arrow_right  ${last ? "grey" : "blue"}`}
          onClick={() => {
            updatePage(15);
          }}
        ></span>
      </span>
    </div>
  );
};
export default Table;
