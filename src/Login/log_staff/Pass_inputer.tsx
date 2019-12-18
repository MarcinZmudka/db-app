import React from "react";
interface IProps {
    set_pass: Function
}
const Pass_input: React.FC<IProps> = ({set_pass}) => {
        return (
        <input className={"log_input"} type="password" placeholder="Password" onChange={e => set_pass(e.target.value)}/>
    )
}

export default Pass_input;