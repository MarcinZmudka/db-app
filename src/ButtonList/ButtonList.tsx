import React from "react";
import "./buttonList.css";

const ButtonList : React.FC = (props) => {
    return (
        <div className="buttonList">
            {props.children}
        </div>
    )
}
export default ButtonList;