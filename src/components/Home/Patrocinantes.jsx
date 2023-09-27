import React from 'react';
import { Link } from 'react-router-dom';

//Imagenes
import  casagri   from "../../static/images/Logos/casagri.webp";
import  bayer   from "../../static/images/Logos/bayer.webp";
import  dekalb   from "../../static/images/Logos/dekalb.webp";

//Estilos
import './Patrocinantes.css'

const Patrocinantes = () => {
  return (
  <div >
    {/* Patrocinantes del COncurso */}
    <div className='logos__container'>
        {/* Casagri */}
        <Link to={"http://casagri-group.com/"} className='logo__container-Patrocinantes'>
          <img src={ casagri } alt="Logo-Casagri" className='img-Patrocinante' />
        </Link>
        {/* Bayer */}
        <Link to={""} className='logo__container-Patrocinantes'>
          <img src={ bayer } alt="Logo-Bater" className='img-Patrocinante' />
        </Link>
        {/* Dekalb */}
        <Link to={""} className='logo__container-Patrocinantes'>
          <img src={ dekalb } alt="Logo-Dekalb" className='img-Patrocinante' />
        </Link>
    </div>
  </div>
  )
}

export default Patrocinantes