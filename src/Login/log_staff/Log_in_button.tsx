import React from "react";
interface IProps {
    check_validation: Function;
}
const Log_in_button: React.FC<IProps> = ({check_validation}) => {

    return (
        <button onClick={e => check_validation(e)}>Log in</button>
    )
}
export default Log_in_button;