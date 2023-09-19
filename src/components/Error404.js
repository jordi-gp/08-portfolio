import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/404-styles.css';

export const Error404 = () => {
    return (
        <div id='contenedor'>
            <h1>ERROR 404</h1>
            <h3>Revisa la url que has puesto, es posible que no sea correcta!</h3>
            <h4><Link to='/inicio'>Ir a Inicio</Link></h4>
        </div>
    )
}
