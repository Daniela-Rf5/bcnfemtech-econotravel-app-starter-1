import * as React from 'react';
import {NavLink} from "react-router-dom";
import logo from './assets/Logo.png';


export const NavigationBar = () => (

    <nav className={"navigationBar"}>
        <div className={"logotipo"}>
            <img className={"Logo"} src={logo}/>
            <p>ECONOTRAVEL</p>
        </div>
        <div>
            <NavLink to={"/inicio"}>Inicio</NavLink>
            <NavLink to={"/about"}>Quiénes somos</NavLink>
            <NavLink to={"/experiencias"}>Experiencias</NavLink>
            <NavLink to={"/reservas"}>Reservas</NavLink>
        </div>
    </nav>
)