export class ReservasApi {

    // hace una llamada al backend y convierte el resultado en un JSON
    getReservas() {
        return fetch("/reservas")
            .then(response => response.json())
    }
}