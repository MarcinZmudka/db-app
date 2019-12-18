import React from "react";
interface IProps {
    message: string
}
const Error_Message  : React.FC<IProps> = ({message}) => {
    return (
    <div className={"error_box"}>{message}</div>
    )
}
export default Error_Message;