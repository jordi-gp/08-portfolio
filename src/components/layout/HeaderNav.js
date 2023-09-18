import { React, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
    return (
        <header className='header'>    
            <div className='logo'>      
                <h2>Jordi García Portfolio</h2>
            </div>
            {/* TODO: Solucionar como poner el evento onClick para realizar la animación del menú

                <div className="container" id='menu-icon'>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div> 
            */}
            <nav id='menu-content'>
                <ul>
                    <li>
                        <NavLink to='/inicio' className={({isActive}) => isActive ? 'active-link' : ''}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/portafolio' className={({isActive}) => isActive ? 'active-link' : ''}>Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/curriculum' className={({isActive}) => isActive ? 'active-link' : ''}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacto' className={({isActive}) => isActive ? 'active-link' : ''}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
