import * as React from "react";
import {experienceCard} from "./experienceCard";
export const experience = (props) => (
    <section className="experienceSecction">
        {props.experiences.map(experience =>
        <experienceCard experience = {experience}/>
        )}

    </section>
)

