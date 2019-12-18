import React from "react";

const ButtonList : React.FC = (props) => {
    return (
        <div className="buttonList">
            {props.children}
        </div>
    )
}
export default ButtonList;