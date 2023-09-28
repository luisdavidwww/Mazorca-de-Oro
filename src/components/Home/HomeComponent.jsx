import React from 'react';
import { Link } from 'react-router-dom';

//componentes
import Patrocinantes from "./Patrocinantes";

//Imagenes 
import  mazorca   from "../../static/images/home/Mazorca-Oro.webp";
import  mazorcaPNG   from "../../static/images/home/MazorcaPrueba.png";
import  mazorcaWEBP   from "../../static/images/home/MazorcaPruebaW.webp";

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
        <img src={ mazorcaWEBP } alt="MazorcaDEOro" className='img-Home-two' />
      </div>
      
      {/* Boton de Acción */}
      <div className='header-btns'>
        <Link to='/inscripcion' className='btn-link'>
          <div className='btn-Incripción-Home'
              >Participar
          </div>
        </Link>
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