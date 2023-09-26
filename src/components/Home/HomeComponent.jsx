import React from 'react';

//Imagenes
import  mazorcaPNG   from "../../static/images/home/Mazorca-Oro.png";
//Estilos
import './Home.css';

function HomeComponent() {
  return (
  <>  
    <div className='header-container'>
      <p className='name-Concurso'>CONCURSO</p>
      <div className='img-Container'>
        <img src={ mazorcaPNG } alt="MazorcaDEOro" className='img-Home' />
      </div>
      
      <div className='header-btns'>

        

        <a href='/inscripcion' className='btn-link'>
          <div className='btn-Incripción-Home'
              >Participar
          </div>
        </a>


      </div>
      <p className='Participa-Concurso'>¡PARTICIPA YA POR UN <span style={{color:'#fbff1d'}}>VIAJE A MÉXICO! </span></p>
    </div>  
  </>
  );
}

export default HomeComponent;