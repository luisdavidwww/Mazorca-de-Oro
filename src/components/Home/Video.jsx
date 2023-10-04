import React from 'react';

//imagenes
import  Recurso1   from "../../static/images/pasos/Recurso1.png";
import  Recurso2   from "../../static/images/pasos/Recurso2.png";
import  Recurso3   from "../../static/images/pasos/Recurso3.png";

// Diseño y estilos
import './Video.css';
// Data


const CorporatePolicy = ({component}) => {




  return (
    <>
    <div className='CorporatePolicy__container'>

        <div className='AboutUs__title__Container'>
            <h1 className='Titulo-Principal-video'>En el video nós contarás</h1>
        </div>


    <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items-container'>
            {/* item 1*/}
            <li className='cards__item-pc'>
                <a className='cards__item__link-pc' >
                      <img 
                      className='cards__item__img-pc'
                      alt={Recurso1}
                      src={Recurso1}
                      />
                    
                    <div className='cards__item__info-pc'>
                        <h5 className='cards__item__text-pc'></h5>
                        <p className='cards__item__p-two'>Tu nombre, ¿quién eres?, el tiempo que llevas como agricultor y la región donde vives.</p>  
                    </div> 
                </a>
            </li>
            {/* item 2 */}
            <li className='cards__item-pc'>
                <a className='cards__item__link-pc' >
                      <img 
                      className='cards__item__img-pc'
                      alt={Recurso2}
                      src={Recurso2}
                      />
                    
                    <div className='cards__item__info-pc'>
                        <h5 className='cards__item__text-pc'></h5>
                        <p className='cards__item__p-two'>El área sembrada, y lo que más te gusta del híbrido DK-8719.</p>  
                    </div> 
                </a>
            </li>
            {/* item 3 */}
            <li className='cards__item-pc'>
                <a className='cards__item__link-pc' >
                      <img 
                      className='cards__item__img-pc'
                      alt={Recurso3}
                      src={Recurso3}
                      />
                    
                    <div className='cards__item__info-pc'>
                        <h5 className='cards__item__text-pc'></h5>
                        <p className='cards__item__p-two'>La población de plantas a cosecha, y si hay algo más que quieras contar de tu mazorca (peso, líneas etc.)</p>  
                    </div> 
                </a>
            </li>
          </ul>
        </div>
    </div>

    </div>
    </>
  )
}

export default CorporatePolicy