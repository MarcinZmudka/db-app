import React, {useState, useContext} from "react";
import Login_input from "./log_staff/Login_inputer";
import Pass_input from "./log_staff/Pass_inputer";
import Log_in_button from "./log_staff/Log_in_button";
import Error_Message from "./error/Error_Message";
import DB_connector from "./login-db/dbConnector";
import { AppContextConsumer  } from "../context/UserLogged";
interface IProps {
    error_message: string
}
const Login : React.FC<IProps> = ({error_message}) => {
    const [login, setlogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [, setUserLogged] = useContext(AppContextConsumer);
    const db_conector = new DB_connector();
    const check_validation = async (e: Event) => {
        e.preventDefault();
        if(!valid(login)){
            setError("Zbyt krótki login");
        }
        if(!valid(password)){
            setError("Zbyt krótkie hasło");
        }
        const data_valid = await db_conector.check_login_pass(login, password);
        if(data_valid){
            setUserLogged(true);
        }
        else{
            setError("Niepoprawne dane do logowania");
        }
    }
    const valid = (text: string) => {
        if(text.length < 6)
            return false;
        return true;
    }

    return (
        <React.Fragment>
            {/** error handling */}
            {error.length > 0 ? <Error_Message message={error}/> : ""}
            {error_message.length > 0 ? <Error_Message message={error_message}/> : ""}
            {/**loggin staff */}
            <div>
                <Login_input set_login = {setlogin}/>
                <Pass_input set_pass = {setPassword}/>
            </div>
            <Log_in_button check_validation={check_validation}/>
        </React.Fragment>
        
    )
}
export default Login;