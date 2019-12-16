import React from 'react';
import MenuButton from './RighSideMenu/MenuButton';
import LogOutButton from './Login/LogOutButton';

const Navbar: React.FC = () => {
    return (
        <div>
            <div>Nazwa Firmy</div>
            <div>System rezerwacji urządzeń</div>
            <LogOutButton set_user_logged={()=>{}}/>
            <MenuButton path={"menu"} text={"POWRÓT"} />       
        </div>
    )
}

export default Navbar;