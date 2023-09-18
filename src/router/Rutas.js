import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { Error404 } from '../components/Error404';
import { HeaderNav, MenuNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';


export const MyRoutes = () => {
    return (
        <BrowserRouter>
            {/*MENÚ*/}
            <HeaderNav />
            {/*CONTENIDO PRINCIPAL*/}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to='/inicio' />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/portafolio' element={<Portafolio />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </section>
            {/*FOOTER*/}
            <Footer />
        </BrowserRouter>
    )
}
