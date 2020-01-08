import React, { useState } from "react";
import Selector from "../Selector/Selector";
import ButtonContext from "../Buttons/ButtonContextSql";


const GiveOutDevice: React.FC = () => {
    const [choosenEmployer, setChoosenEmployer] = useState(null);
    const [choosenDevice, setChoosenDevice] = useState(null);
    return (
        <>
            <Selector text="Wybierz pracownika" updateChoosenValue={()=>{}} />
            <Selector text="Wybierz urządzenie" updateChoosenValue={()=>{}}/>
            <ButtonContext query="" buttonText="Wydaj" />
        </>
    )
}
export default GiveOutDevice;