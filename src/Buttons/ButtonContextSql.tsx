import React, {useContext} from "react";
import { ChoosenDataContext } from "../context/choosenDataFromTable";
import "./Button.css";

interface IProps{
    query: string,
    buttonText: string
}
const ButtonContext: React.FC<IProps> = ({query, buttonText}) => {
   // const [choosenData] = useContext(ChoosenDataContext);
    return (
        <div className="button_box">
            <div className="button_sql" onClick={()=> {}}>{buttonText}</div>
        </div>
    )
}
export default ButtonContext;