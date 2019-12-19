import React from "react";
import { Link } from "react-router-dom";
import "./rightSideMenu.css";

interface IProps {
  path: string;
  text: string;
}
const MenuButton: React.FC<IProps> = ({ path, text }) => {
  return (
    <div className="menuButtonBox">
      <Link to={`/${path}`} className="menuButtonLink ">
        <button className={"menuButton"}>{text}</button>
      </Link>
      <div className="menuButtonShadow"></div>
    </div>
  );
};
export default MenuButton;
