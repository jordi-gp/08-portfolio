import '../styles/portafolio-styles.css';
import { trabajos } from '../data/trabajos';

export const Portafolio = () => {
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
                {
                    trabajos.map(trabajo => {
                        return (
                            <div className="card" key={trabajo.id}>
                                <img src="assets/githublogo.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5>{trabajo.nombre}</h5>
                                    <p className="card-text">{trabajo.descripcion}</p>
                                    <p>Tecnologías Utilizadas:</p>
                                    <ul>
                                        {
                                            trabajo.tecnologias.map(tecnologia => {
                                                return (
                                                    <li key={tecnologia}>
                                                        {tecnologia}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <a className='enlace-github' target='_blank' href={trabajo.githubUrl}>
                                        <button type="button" className="btn btn-primary">
                                            Ver código
                                        </button>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
