import * as React from "react";
import {FormularioReserva} from "./Reservas";
import reservar from "./assets/reservar.jpg";



export const FinalReserva = () => <section>
    <div className={"contenedor2"}>
        <img className={"imgReservado"} src={reservar}/>
        <div className={"textReservado"}>
            <h1>¡Gracias por realizar tu reserva con nosotros!</h1>
        </div>
    </div>
</section>

