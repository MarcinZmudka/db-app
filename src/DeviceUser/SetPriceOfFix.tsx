import React, { useState } from "react";
import SelectorDevice from "../Selector/SelectorDevice";
import ButtonContext from "../Buttons/ButtonNoContext";

const GiveOutDevice: React.FC = () => {
  const [choosenDevice, setChoosenDevice] = useState("");
  const [price, setPrice] = useState("");
  const updateValueDevice = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const array = value.split(" ");
    setChoosenDevice(array[0]);
  };
  const updatePrice = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setChoosenDevice(value);
  };
  return (
    <>
      <SelectorDevice
        text="Wybierz urządzenie"
        updateChoosenValue={updateValueDevice}
        query="select * from sprzet where stan_techniczny = 'C'"
      />
      <input type = "text" onChange = {updatePrice}  className="input_from_group" /> 
      <ButtonContext query="" buttonText="Zatwierdź koszt" />
    </>
  );
};
export default GiveOutDevice;
