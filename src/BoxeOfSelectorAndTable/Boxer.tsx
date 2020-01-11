import React, { useState } from "react";
import Selector from "../Selector/Selector";
import ShowDevices from "../ShowDevices/ShowDevices";

const Boxer: React.FC = () => {
  const [choosenValue, setChoosenValue] = useState("");
  const updateChoosenValue = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    console.log(event.currentTarget.attributes);
    setChoosenValue(value);
  };
  return (
    <div className="boxer_box">
      {choosenValue === "" ? (
        <Selector
          updateChoosenValue={updateChoosenValue}
          text="Wybierz magazyn"
          query="select * from magazyny"
        />
      ) : (
        <ShowDevices query= {`select * from sprzet where id_magazynu=${choosenValue}`} />
      )}
    </div>
  );
};
export default Boxer;
