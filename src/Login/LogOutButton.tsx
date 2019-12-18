import React from "react";

interface IProps {
    set_user_logged: Function;
}

const LogOutButton: React.FC<IProps> = ({set_user_logged}) => {
    return(
        
        <button className={"logout_button"} onClick={() => {set_user_logged(false)}}>
            WYLOGUJ
        </button>
    )
}
export default LogOutButton;