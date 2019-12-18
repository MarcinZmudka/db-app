import React, { useContext } from 'react';
import MenuButton from './RighSideMenu/MenuButton';
import LogOutButton from './Login/LogOutButton';
import { UserLoggedContext } from './context/UserLogged';

const Navbar: React.FC = () => {
    const [, set_user_logged] = useContext(UserLoggedContext);
    return (
        <div>
            <div>Nazwa Firmy</div>
            <div>System rezerwacji urządzeń</div>
            <LogOutButton set_user_logged={set_user_logged}/>
            <MenuButton path={"menu"} text={"POWRÓT"} />       
        </div>
    )
}

export default Navbar;