import * as React from 'react';
import {Link} from "react-router-dom";
import logo from './assets/Logo.png';


export const NavigationBar = () => (

    <nav className={"navigationBar"}>
        <div>
            <img className={"Logo"} src={logo}/>
        </div>
        <div>
            <Link to={"/about"}>Quiénes somos</Link>
            <Link to={"/experiencias"}>Experiencias</Link>
            <Link to={"/reservas"}>Reservas</Link>
        </div>
    </nav>
)