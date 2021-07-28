import * as React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {FinalReserva} from "./FinalReserva";

export const FormularioReserva = () => {
    return (
        <form>
                <div className={"form"}>
                    <label className={"labels"}>Nombre:</label>
                    <input
                        id="nombre"
                        type="text"
                        name="nombre"
                    />
                </div>
                <div className={"form"}>
                    <label className={"labels"}>Correo:</label>
                    <input
                        id="correo"
                        type="email"
                        name="correo"

                    />
                </div>
                <div className={"form"}>
                    <label className={"labels"}>Fecha:</label>
                    <input
                        id="fecha"
                        type="date"
                        name="fecha"

                    />
                </div>
                <div className={"numPerson"}>
                    <label  className={"labels"}>Numero de personas:</label>
                    <input
                        id="personas"
                        type="text"
                        name="personas"

                    />
                </div>
            <div>
                <label>Actividad</label>
                <select id="actividad" name="actividad">
                    <option value={"actividad1"}> Paseo en bicicleta por el Montseny</option>
                    <option value={"actividad2"}> Descubre la costa en barco de vela</option>
                    <option value={"actividad3"}> Descubre la Barcelona Modernista de noche</option>
                    <option value={"actividad4"}> Del huerto a la mesa</option>
                </select>
            </div>
            <div>
                <button>
                    <Link to={"./FinalReserva"}>Reservar</Link>
                </button>
            </div>
        </form>

    )
}
