import React from "react";
interface IProps {
    set_login: Function
}
const Login_input: React.FC<IProps> = ({set_login}) => {
        return (
        <input type="text" placeholder="Login" onChange={e => set_login(e.target.value)}/>
    )
}

export default Login_input;