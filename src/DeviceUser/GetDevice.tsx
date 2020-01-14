import React, { useState } from "react";
import Selector from "../Selector/SelectorDevice";
import ButtonContext from "../Buttons/ButtonNoContext";

const GetDevice: React.FC = () => {
  const [choosenValue, setChoosenValue] = useState("");
  const updateValueDevice = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const array = value.split(" ");
    setChoosenValue(array[0]);
  };
  return (
    <>
      <Selector
        text="Wybierz urządzenie"
        updateChoosenValue={updateValueDevice}
        query="select * from sprzet"
      />
      <ButtonContext
        query={`update sprzet set stan_techniczny = 'C' where nr_ewidencyjny = '${choosenValue}'`}
        buttonText="Zgłoś uszkodzenie"
      />
    </>
  );
};
export default GetDevice;
