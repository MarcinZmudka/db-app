import React, { useState } from "react";
import Selector from "../Selector/Selector";
import ButtonContext from "../Buttons/ButtonContextSql";


const GiveOutDevice: React.FC = () => {
    const [choosenEmployer, setChoosenEmployer] = useState(null);
    const [choosenDevice, setChoosenDevice] = useState(null);
    return (
        <>
            <Selector text="Wybierz pracownika" updateChoosenValue={()=>{}} query="" />
            <Selector text="Wybierz urządzenie" updateChoosenValue={()=>{}} query="" />
            <ButtonContext query="" index={0} buttonText="Wydaj" />
        </>
    )
}
export default GiveOutDevice;