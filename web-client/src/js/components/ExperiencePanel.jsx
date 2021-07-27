import * as React from 'react';
import {useEffect, useState} from "react";
import {ExperienceApi} from "../apis/experiencesApi";

export const ExperiencePanel = (props) => {

    const [experiences, setExperiences] = useState([]);

    // useEffect con el parámetro "[]"
    // se puede usar para inicializar el componente.
    // Más info: https://es.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    useEffect(() => {
        let experienceApi = new ExperienceApi()
        experienceApi.getExperiences()
            .then(experiences => setExperiences(experiences))
    }, []);

    return <div>
        <p className={"titleExperience"}>Experiencias</p>

        <div className={"experienceSection"}>
            {props.experiences.map((experience) =>
                <div className={"experienceCard"} key={experience.id}>
                    <div className={"experienceImage"}>
                       <div>{experience.image}</div>
                    </div>
                    <div className={"experienceText"}>
                        <h1 className={"experienceName"}> {experience.name} </h1>
                        <p className={"experienceDescription"}>{experience.description}</p>
                        <h3 className={"parrafoPrecio"}><p>{experience.pricePerPerson}€ por persona</p>
                        </h3>
                    </div>
                </div>
            )}
        </div>
    </div>
}



