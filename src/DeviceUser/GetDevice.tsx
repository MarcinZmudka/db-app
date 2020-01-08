import React, { useState } from "react";
import Selector from "../Selector/Selector";
import ButtonContext from "../Buttons/ButtonContextSql";

const GetDevice: React.FC = () => {
  const [choosenValue, setChoosenValue] = useState(null);
  return (
    <>
      <Selector
        text="Wybierz urządzenie"
        updateChoosenValue={setChoosenValue}
      />
      <ButtonContext query="" buttonText="Zgłoś uszkodzenie" />
    </>
  );
};
export default GetDevice;
