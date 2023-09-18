import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/inicio-styles.css';

export const Inicio = () => {
    return (
        <div id='inicio'>
            <div className='descripcion-inicio'>
                <h3>Presentación</h3>
                <p>
                    Mi nombre es Jordi García, soy un programador web junior y este es mi portafolio, en el
                    se pueden ver los proyectos en los proyectos en los que voy trabajando además de mi
                    información de contacto y curriculum.
                </p>
            </div>
            <div className='info-personal'>
                <h3>Mis proyectos principales</h3>
                <div className='tarjetas'>
                    <div className='tarjeta-info col-3'>
                        <h4>Proyecto Truiter</h4>
                        <a href='https://github.com/jordi-gp/2023-truiter-symfony' target='_blank'>Ver código</a>
                    </div>
                    <div className='tarjeta-info col-3'>
                        <h4>API Rest en Symfony</h4>
                        <a href='https://github.com/jordi-gp/symfony-api-jordi' target='_blank'>Ver código</a>
                    </div>
                    <div className='tarjeta-info col-3'>
                        <h4>Web de peliculas en React</h4>
                        <a href='https://github.com/jordi-gp/06-proyecto1' target='_blank'>Ver código</a>
                    </div>
                </div>
            </div>
            <div className='call-to-action'>
                <div id='action-content'>
                    <p>
                        <strong>Te gustaría obtener más información acerca de mi experiencia laboral o sobre proyectos en los que he trabajado?
                        <br />
                        Abajo puedes encontrar enlaces para acceder tanto a mi curriculum personal como a mi Github.</strong>
                    </p>
                    <div id='action-buttons'>
                        <a href='https://github.com/jordi-gp' target='_blank'>
                            <button className='action-button' type='button'>Github</button>
                        </a>
                        <a target='_blank'>
                            <Link to={'/curriculum'}>
                                <button className='action-button' type='button'>Curriculum</button>
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
