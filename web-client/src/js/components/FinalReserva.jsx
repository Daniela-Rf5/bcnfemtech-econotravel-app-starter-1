import * as React from "react";
import {FormularioReserva} from "./Reservas";
import reservar from "./assets/reservar.jpg";



export const FinalReserva = () => <section>
    <div className={"contenedor"}>
        <img className={"imgInicio"} src={reservar}/>
        <div className={"textInicio"}>
            <h1>¡Gracias por realizar tu reserva con nosotros!</h1>
        </div>
    </div>
</section>

