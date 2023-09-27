import React from 'react';

//componentes
import Patrocinantes from "./Patrocinantes";

//Imagenes 
import  mazorca   from "../../static/images/home/Mazorca-Oro.webp";
import  mazorcaPNG   from "../../static/images/home/MazorcaPrueba.png";
//Estilos
import './Home.css';

function HomeComponent() {
  return (
  <>  
    <div className='header-container'>
      {/* Titulo del concurso */}
      <h1 className='name-Concurso'>CONCURSO</h1>

      {/* Imagen Principal de Mazorca de oro 
      <div className='img-Container'>
        <img src={ mazorca } alt="MazorcaDEOro" className='img-Home' />
      </div>
      */}
      <div className='img-Container'>
        <img src={ mazorcaPNG } alt="MazorcaDEOro" className='img-Home-two' />
      </div>
      
      {/* Boton de Acción */}
      <div className='header-btns'>
        <a href='/inscripcion' className='btn-link'>
          <div className='btn-Incripción-Home'
              >Participar
          </div>
        </a>
      </div>

      {/* Premio */}
      <p className='Participa-Concurso'>¡Participa ya por un <span style={{color:'#fbff1d'}}>viaje a México! </span></p>

      {/* Patrocinantes del Concurso */}
      <Patrocinantes/>
    </div>  
  </>
  );
}

export default HomeComponent;