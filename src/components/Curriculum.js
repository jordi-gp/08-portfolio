import React from 'react';
import '../styles/curriculum-styles.css';

export const Curriculum = () => {
    return (
        <div className='contenedor'>
            <div className='informacion-superior'>
                <h2>Curriculum</h2>
                <p className='descripcion'>
                    Como parte fundamental de un portafolio no podía faltar mi curriculum, en el se pueden ver <br />
                    tanto los estudios y conocimientos obtenidos así como también la experiencia que he ido
                    obteniendo con el tiempo.
                </p>
                <br />
                <p className='descripcion'>
                    En la parte inferior, está permitida la opción de descargar el curriculum en formato PDF.
                </p>
            </div>
            <div id='curriculum'>
                {/*Información personal del curriculum*/}
                <div className='informacion-personal'>
                    <div id='info'>
                        <ul>
                            <li>
                                <strong>Población:</strong> 03728 Alcalalí
                            </li>
                            <li>
                                <strong>Segunda población:</strong> 46020 Benimaclet Valencia
                            </li>
                            <li>
                                <strong>Número de teléfono:</strong> 633 28 65 77
                            </li>
                            <li>
                                <strong>Correo electrónico:</strong> <a href='mailto:jordigar00@gmail.com'>jordigar00@gmail.com</a>
                            </li>
                            <li>
                                <strong>Edad:</strong> 23
                            </li>
                        </ul>
                    </div>
                    {/*Foto de perfil del curriculum*/}
                    <div id='foto-perfil'>
                        <img src='./assets/foto-curriculum.jpg' alt='Foto personal'></img>
                    </div>
                </div>
                {/*Información general del curriculum*/}
                <div id='formacion-curriculum'>
                    <h3>Datos Académicos:</h3>
                    <ul>
                        <li>
                            Título de la ESO en el centro de educación secundaria <strong>IES JOSEP IBORRA</strong> (2017).
                        </li>
                        <li>
                            Grado Medio en Sistemas Microinformáticos y Redes en <strong>IES Historiador Chabàs</strong> (2020).
                        </li>
                        <li>
                            Grado Superior en Desarrollo de Aplicaciones Web en <strong>IES Enric Valor</strong> (2023).
                        </li>
                    </ul>

                    <h3>Formación Complementaria:</h3>
                    <ul>
                        <li>
                            Manejo de lenguajes de programación y marcas tales como Java, JavaScript, GML, HTML, CSS.
                        </li>
                        <li>
                            Manejo de frameworks tales como Symfony y React.
                        </li>
                        <li>
                            Manejo de bases de datos en MySQL.
                        </li>
                        <li>
                            Conocimiento sobre procesadores de texto como LibreOffice Writer, Calc o programas de edición de imagen
                            tales como Gimp.
                        </li>
                    </ul>

                    <h3>Idiomas:</h3>
                    <ul>
                        <li>
                            Valenciano <strong>(Nativo)</strong>
                        </li>
                        <li>
                            Castellano <strong>(Nativo)</strong>
                        </li>
                        <li>
                            Inglés Cambridge <strong>(Título B2)</strong>
                        </li>
                    </ul>

                    <h3>Aptitudes:</h3>
                    <ul>
                        <li>
                            Puntual, social y disciplinado, siempre buscando la mejora.
                        </li>
                        <li>
                            Dispuesto ante todo al aprendizaje.
                        </li>
                    </ul>

                    <h3>Experiencia Laboral:</h3>
                    <ul>
                        <li>
                            Prácticas y FCT Dual realizadas en <strong>Teamhost Studio</strong>, trabajando en la <strong>maquetación de páginas
                            web con Wordpress y Divi</strong>, mantenimiento y actualización de webs y atendiendo a clientes ejerciendo
                            la función de soporte técnico
                        </li>
                    </ul>
                </div>
                {/*Botón de descargar del curriculum*/}
                <div id='boton-descarga-curriculum'>
                    <button>
                        <a href='./assets/Curriculum.pdf' download='Curriculum.pdf'>Descargar Curriculum</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
