import * as React from "react";


export const experienceCard = (props) =>
    <div className="experience1">
        <div>{props.experience.name}</div>
        <div>{props.experience.description}</div>
        <div>{props.experience.price}</div>
        <div>{props.experience.duration}</div>
        <div>{props.experience.accesibilidad}</div>


    </div>