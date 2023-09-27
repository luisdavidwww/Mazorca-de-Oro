import React, { useState, useEffect } from 'react';

// Estilos y diseño
import './Participate.css';




const Participate = () => {

  const [data, setDataCasagri] = useState([]);

  const [expandido, setExpandido] = useState(false);



  const toggleExpandido = () => {
    setExpandido(!expandido);
  };



  return (
    <>
    
        <section className='AboutUs__main' >
            {/* Ttitulo Principal */}
            <div className='AboutUs__title__Container'>
                <h1 className='Titulo-Principal-Inscripcion'>
                  ¿Como <span style={{ color: '#ffd800' }}>Participar?</span>
                </h1>
            </div>
            <div className='AboutUs__text__Container'>
                  <p className='text__aboutUs'>Graba un video en formato horizontal de máximo 2 minutos mostrando la mazorca de oro con la que participarás.</p>
            </div>
        </section>
    </>
  )
}

export default Participate