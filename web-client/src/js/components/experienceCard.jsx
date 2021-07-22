import * as React from "react";


export const experienceCard = (props) =>
    <div className="experience">
        <div>{props.experience.name}</div>
        <div>{props.experience.description}</div>
        <div>{props.experience.pricePerPerson}</div>
        <div>{props.experience.duration}</div>
    </div>