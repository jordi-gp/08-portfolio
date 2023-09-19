import { React, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
    const menuInput = useRef();
    const menuContent = useRef();

    const changeMenu = () => {
        const divClass = menuInput.current.className;

        //Animación del menú
        if(divClass == 'container') {
            menuInput.current.classList.add('change');
            menuContent.current.classList.remove('menu-content-hidden');
        } else if(divClass == 'container change') {
            menuInput.current.classList.remove('change');
            menuContent.current.classList.add('menu-content-hidden');
        }
    }

    return (
        <header className='header'>    
            <div className='logo'>      
                <h2>Jordi García Portfolio</h2>
            </div>
            <div ref={menuInput} onClick={changeMenu} className="container" id='menu-icon'>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div> 
            <nav ref={menuContent} className='menu-content-hidden'>
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
