import React, { useContext } from 'react';
import MenuButton from '../RighSideMenu/MenuButton';
import LogOutButton from '../Login/LogOutButton';
import { UserLoggedContext } from '../context/UserLogged';
import "./navbar.css";

const Navbar: React.FC = () => {
    const [, set_user_logged] = useContext(UserLoggedContext);
    return (
        <nav>
            <div className="company">Nazwa Firmy</div>
            <div className="login_navbar_title">System rezerwacji urządzeń</div>
            <LogOutButton set_user_logged={set_user_logged}/>
            {/* <MenuButton path={"menu"} text={"POWRÓT"} />        */}
        </nav>
    )
}

export default Navbar;