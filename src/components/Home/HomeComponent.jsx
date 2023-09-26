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

        
        {/* */}
        <a href='/inscripcion' className='btn-link'>
          <button className='btn-Incripción-Home'
              >Participar
          </button>
        </a>

      </div>
    </div>  
  </>
  );
}

export default HomeComponent;