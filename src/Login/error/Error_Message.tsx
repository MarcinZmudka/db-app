import React from "react";
interface IProps {
    message: string
}
const Error_Message  : React.FC<IProps> = ({message}) => {
    return (
    <div>{message}</div>
    )
}
export default Error_Message;