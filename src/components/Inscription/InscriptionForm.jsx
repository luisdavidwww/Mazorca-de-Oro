import React from 'react';
import { useForm } from '../../hooks/useForm.tsx';
import './InscriptionForm.css';

function InscriptionForm() {

    /* Hook de formulario */
    const { email, password, onChange } = useForm({
      email: '',
      password: ''
    });
  

  return (
  <>  
    <div className='Inscripction-container'>

      <h1 className='Titulo-Principal'>Inscribete <span style={{color:"#ffd800"}}>Ahora</span></h1>



        
                {/* Correo */}
                <div className='Container__Label-Email'>
                  <label htmlFor="email" className='Label__Form'>Nombre Completo</label>
                  <input
                    type="text"
                    className='Input__Form'
                    id="email"
                    placeholder="Ingrese su correo electrónico"
                    value={email}
                    autoComplete="off"
                  />
                </div>

                {/* Correo */}
                <div className='Container__Label-Email'>
                  <label htmlFor="email" className='Label__Form'>Correo Electrónico</label>
                  <input
                    type="text"
                    className='Input__Form'
                    id="email"
                    placeholder="Ingrese su correo electrónico"
                    value={email}
                    autoComplete="off"
                  />
                </div>

                {/* Contraseña */}
                <div className='Container__Label'>
                  <label htmlFor="password" className='Label__Form'>Contraseña</label>
                  <div className='PasswordInputContainer'>
                    <input
                      type='password' 
                      className='Input__Form'
                      id="password"
                      placeholder="Ingrese su contraseña"
                      value={password}
                      autoComplete="off"
                    />
                  </div>
                </div>

    </div>  
  </>
  );
}

export default InscriptionForm;