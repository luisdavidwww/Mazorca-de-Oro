import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';

//Estilos
import './Navbar.css';

//imagenes Mazorca-Oro
import  MazorcaOro  from "../../../static/images/Navbar/Mazorca-Oro.svg";




function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  {/* Ver el boton del Navbar Menu en Versión Movil*/}
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };



  useEffect(() => {
    showButton();
  }, []);




  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };




  return (
    <>
      <nav className='navbar'>
        {/* Logo Mazorca de Oro */}
        <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
        {
          MazorcaOro != null ? 
            (<img src={ MazorcaOro } width={"140px"} height={"48px"} alt="Casagri" />
               ):null
        }    
        </a>

        {/* Icono Menu Version Movil */}
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        {/* Navbar */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* Inicio */}
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Inicio 
            </Link>
          </li>
          {/* Inscripcion */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/inscripcion'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Inscripción
            </Link>
          </li>
          {/* Detalles */}
          <li className='nav-item'>
            <a
              href="/detalles"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Detalles
            </a>
          </li>
          {/* Participa Ahora */}
          <li className='nav-item'>
            <Link to='/inscripcion' className='btn-Incripción'>Participa Ahora</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
