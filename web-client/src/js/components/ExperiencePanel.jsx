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

    return <div className={"experiencesList"}>
        <p className={"experiencesList__title"}>Experiencias</p>
        <div className={"experiencesList__list"}>
            {props.experiences.map((experience) =>
                <div className={"experiencesList__item experience"}>
                    <img className={"experience__image"}>{experience.image}</img>
                    <div className={"experience__container"}>
                        <h1 className={"experience__name"}> {experience.name} </h1>
                        <p className={"experience__description"}>{experience.description}</p>
                        <p className={"parrafo__precio"}>
                            <span>{experience.pricePerPerson}€</span> por persona</p>
                    </div>
                </div>
            )}
        </div>
    </div>

}

