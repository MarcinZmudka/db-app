import React, { useState } from "react";
import Selector from "../Selector/Selector";
import ShowDevices from "../ShowDevices/ShowDevices";

const Boxer: React.FC = () => {
    const [choosenValue, setChoosenValue] = useState("");
    const updateChoosenValue = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        setChoosenValue(value);
    }
    return(
        <div className="boxer_box">
            {choosenValue === "" ?
                    <Selector updateChoosenValue={updateChoosenValue} text="Wybierz magazyn"/> : 
                    <ShowDevices query=""/>}
        </div>
    )
}
export default Boxer;