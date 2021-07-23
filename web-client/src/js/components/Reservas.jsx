import * as React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import {FinalReserva} from "./FinalReserva";

export const FormularioReserva = () => {
    return (
        <form>
            <div>
                <label>Nombre</label>
                <input
                    id="nombre"
                    type="text"
                    name="nombre"
                />
            </div>
            <div>
                <label>Correo</label>
                <input
                    id="correo"
                    type="email"
                    name="correo"

                />
            </div>
            <div>
                <label>Fecha</label>
                <input
                    id="fecha"
                    type="date"
                    name="fecha"

                />
            </div>
            <div>
                <label>Numero de personas</label>
                <input
                    id="personas"
                    type="number"
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
                    <Route>
                        <Switch>
                            <Link to={"/FinalReserva"}>Reservar</Link>
                            <FinalReserva/>
                        </Switch>
                    </Route>
                </button>
            </div>

        </form>

    )
}
