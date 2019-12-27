import React from "react";
import { Link } from "react-router-dom";
import "./Title.css";

interface IProps {
  title: string;
  button: boolean;
}
const Title: React.FC<IProps> = ({ title, button }) => {
  return (
    <div className="box_title">
      <div className="title_text">{title}</div>
      {button ? <Button /> : ""}
    </div>
  );
};

const Button: React.FC = () => {
  return (
    <Link to="/menu">
      <div className="button_back">POWRÓT</div>
    </Link>
  );
};
export default Title;
