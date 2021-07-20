import * as React from 'react';
import {Link} from "react-router-dom";


export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <Link to={"/about"}>Quiénes somos</Link>
        <Link to={"/experiences"}>Experiencias</Link>
    </nav>
)