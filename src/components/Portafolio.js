import React, { useState } from 'react';
import '../styles/portafolio-styles.css';

export const Portafolio = () => {
    const [proyecto, setProyecto] = useState();

    const proyectoObj = {
        id: 0,
        nombre: '',
        descripcion: '',
        enlaceGit: ''
    }

    return (
        <div className='contenedor' id='proyectos'>
            <div className='proyectos-info'>
                <h2>Proyectos Creados</h2>
                <p>
                    En esta página se pueden ver todos los proyectos que he ido desarrollando,
                    además cada uno de ellos contiene un enlace a su correspondiente directorio
                    en GitHub para poder ver su código.
                </p>
            </div>
            <div className='tarjetas-proyectos'>
                <div className="card">
                    <img src="assets/githublogo.jpg" class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5>Nombre</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-primary">Ver código</button>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/githublogo.jpg" class="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-primary">Ver código</button>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/githublogo.jpg" class="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-primary">Ver código</button>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/githublogo.jpg" class="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-primary">Ver código</button>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/githublogo.jpg" class="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-primary">Ver código</button>
                    </div>
                </div>
                <div className="card">
                    <img src="assets/githublogo.jpg" class="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button type="button" className="btn btn-primary">Ver código</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
