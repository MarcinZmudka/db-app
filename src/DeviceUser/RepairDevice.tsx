import React, { useState } from "react";
import SelectorDevice from "../Selector/SelectorDevice";
import ButtonContext from "../Buttons/ButtonNoContext";

const GiveOutDevice: React.FC = () => {
  const [choosenDevice, setChoosenDevice] = useState("");
  const updateValueDevice = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const array = value.split(" ");
    setChoosenDevice(array[0]);
  };
  return (
    <>
      <SelectorDevice
        text="Wybierz urządzenie"
        updateChoosenValue={updateValueDevice}
        query="select * from sprzet where stan_techniczny = 'C'"
      />
      <ButtonContext query={`update sprzet set stan_techniczny = 'A-' where nr_ewidencyjny = '${choosenDevice}'`} buttonText="Napraw" />
    </>
  );
};
export default GiveOutDevice;
