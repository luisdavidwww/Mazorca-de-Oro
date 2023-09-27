import React from 'react';

//Imagenes
import  mazorcaPNG   from "../../static/images/home/Mazorca-OroPNG.png";

//Estilos
import './DetallesConcurso.css';

function DetallesConcurso() {
  return (
  <>  
    <div className='container_detalles'>
      {/* Titulo Detalles del concurso */}
      <h1 className='Titulo-Principal-Inscripcion'>
      ¿Como <span style={{ color: '#ffd800' }}>Participar?</span>
        </h1>

    </div>  
  </>
  );
}

export default DetallesConcurso;