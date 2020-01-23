import React, { useState } from "react";
import SelectorUser from "../Selector/SelectorUser";
import SelectorDevice from "../Selector/SelectorDevice";
import ButtonContext from "../Buttons/ButtonNoContext";

const GiveOutDevice: React.FC = () => {
  const [choosenEmployer, setChoosenEmployer] = useState("");
  const [choosenDevice, setChoosenDevice] = useState("");
  const updateValueEmployer = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const array = value.split(" ");
    setChoosenEmployer(array[3]);
  };
  const updateValueDevice = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const array = value.split(" ");
    setChoosenDevice(array[0]);
  };
  return (
    <>
      <SelectorUser
        text="Wybierz pracownika"
        updateChoosenValue={updateValueEmployer}
        query="select * from pracownicy"
      />
      <SelectorDevice
        text="Wybierz urządzenie"
        updateChoosenValue={updateValueDevice}
        query={`select * from sprzet where id_sprzetu in (select id_sprzetu from wypozyczenia where id_pracownika = (select id_pracownika from pracownicy where pesel = '${choosenEmployer}') )`}
      />
      <ButtonContext query={``} buttonText="Wydaj" />
    </>
  );
};
export default GiveOutDevice;