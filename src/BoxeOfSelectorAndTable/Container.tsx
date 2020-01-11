import React, { useState } from "react";
import Selector from "../Selector/Selector";
interface IProps{
    text: string,
    query: string
}
const Container: React.FC<IProps> = ({text, query}) => {
    const [brokenDevice, setBrokenDevice] = useState("");
    const updateBrokenDevice = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        setBrokenDevice(value);
    }
    const sendQuery = () => {
        fetch(`http://localhost:3001/broken?${brokenDevice}`);
    }
    return(
        <>
            <Selector updateChoosenValue={updateBrokenDevice} text="Wybierz urządzenie" query=""/>
            <button onClick={()=> sendQuery()} className="group_input_button">{text}</button>
        </>
    )
}

export default Container;