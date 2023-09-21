import React from 'react';
import  mazorcaPNG   from "../../static/images/home/Mazorca-Dorado.png";
import './Home.css';

function HomeComponent() {
  return (
  <>  
    <div className='header-container'>
      <p className='name-Concurso'>CONCURSO</p>
      <h1 className='Titulo-Principal'>MAZORCA</h1>
      <h1 className='Titulo-Principal' style={{color:"#ffd800"}}>DE ORO</h1>

      <div className='header-btns'>

        
        {/* */}
        <a href='/products' className='btn-link'>
          <button className='btn-outline'
              >Participar
          </button>
        </a>

      </div>
    </div>  
  </>
  );
}

export default HomeComponent;