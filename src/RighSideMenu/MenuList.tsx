import React from "react";
import "./rightSideMenu.css";

const MenuList : React.FC = (props) => {
    return (
        <div className={"rightSideMenu"}>
            {props.children}
        </div>
    )
}
export default MenuList;