import React, { useState } from 'react';


export const FormularioReserva= (props) => {
    const estadoInicialFormulario = { id: null, nombre: '',correo: '', fecha: '', personas: '', actividad: ''};
    const gestionarCampo = (event) => {
        const { name, value } = event.target;
        setReserva({ ...reserva, [name]: value });
    }
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!reserva.nombre || !reserva.correo) return;
                props.agregarReserva(reserva);
                setReserva(estadoInicialFormulario);
            }}
        >
            <div className="form-group">
                <label>Nombre</label>
                <input
                    id="nombre"
                    className="form-control"
                    type="text"
                    name="nombre"
                    value={reserva.nombre}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Correo</label>
                <input
                    id="correo"
                    className="form-control"
                    type="text"
                    name="correo"
                    value={reserva.correo}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Fecha</label>
                <input
                    id="fecha"
                    className="form-control"
                    type="text"
                    name="fecha"
                    value={reserva.fecha}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Numero de personas</label>
                <input
                    id="personas"
                    className="form-control"
                    type="text"
                    name="personas"
                    value={reserva.personas}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <label>Actividad</label>
                <input
                    id="actividad"
                    className="form-control"
                    type="text"
                    name="actividad"
                    value={reserva.actividad}
                    onChange={gestionarCampo}
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Agregar usuario</button>
            </div>
        </form>
    )
}
