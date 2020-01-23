import React, { useState } from "react";
import Selector from "../Selector/SelectorDevice";
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
        const array = brokenDevice.split(" ");
        console.log(`update sprzet set stan_techniczny = 'C' where nr_ewidencyjny = '${array[0]}'`);
        fetch(`http://localhost:3001/query?query=update sprzet set stan_techniczny = 'C' where nr_ewidencyjny = '${array[0]}'`);
    }
    return(
        <>
            <Selector updateChoosenValue={updateBrokenDevice} text="Wybierz urządzenie" query={`${query}`}/>
            <button onClick={()=> sendQuery()} className="group_input_button">{text}</button>
        </>
    )
}

export default Container;