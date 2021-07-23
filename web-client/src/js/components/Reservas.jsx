import * as React from 'react';
import {useEffect, useState} from "react";
import {ReservasApi} from "../apis/reservasApi";

export const Reservas = (props) => {

    const [reservas, setReservas] = useState([]);

    // useEffect con el parámetro "[]"
    // se puede usar para inicializar el componente.
    // Más info: https://es.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    useEffect(() => {
        let reservasApi = new ReservasApi()
        reservasApi.getReservas()
            .then( reservas => setReservas(reservas))
    }, []);

    return <div className={"experiencesList"}>
        <p className={"experiencesList__title"}>Reservas</p>
        <div className={"experiencesList__list"}>
            {props.reservas.map((reservas) =>
                <div className={"experiencesList__item experience"}>
                    <div className={"experience__name"}> {reservas.name} </div>
                    <div className={"experience__description"}>{reservas.description}</div>
                    <div className={"experience__details"}> {reservas.pricePerPerson}€ por persona</div>
                </div>
            )}
        </div>
    </div>

}