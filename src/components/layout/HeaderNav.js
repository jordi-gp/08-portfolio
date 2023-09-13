import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
    return (
        <header className='header'>    
            <div className='logo'>      
                <h2>Jordi García Portfolio</h2>
            </div>
            <nav>
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
                        <NavLink to='/servicios' className={({isActive}) => isActive ? 'active-link' : ''}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacto' className={({isActive}) => isActive ? 'active-link' : ''}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
