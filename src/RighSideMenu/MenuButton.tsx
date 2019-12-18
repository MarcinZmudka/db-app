import React from "react";
import { Link } from "react-router-dom";
import "./rightSideMenu.css";

interface IProps {
    path: string,
    text: string
}
const MenuButton: React.FC< IProps> = ({path, text}) => {
    return (
        <Link to ={`/${path}`}>
            <button className={"menuButton"}>
                {text}
            </button>
        </Link>
    )
}
export default MenuButton;