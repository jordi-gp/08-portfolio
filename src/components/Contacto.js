import React from 'react';
import '../styles/contact-styles.css';

export const Contacto = () => {
    return (
        <div className='formulario-contacto'>
            <form action='#' method='post' className='sub-form'>
                <div className='form-components' >
                    <label for='name'>Nombre</label>
                    <input type='text' name='name'></input>
                    
                    <label for='lastname'>Apellido</label>
                    <input type='text' name='lastname'></input>
                    
                    <label for='email'>Correo Electrónico</label>
                    <input type='email' name='email'></input>
                    
                    <label for='mensaje'>Mensaje</label>
                    <textarea name='mensaje'></textarea>

                    <div className='btn'>
                        <input type='submit' className='sendButton' value='Enviar' />
                    </div>
                </div>
            </form>
        </div>
    )
}
