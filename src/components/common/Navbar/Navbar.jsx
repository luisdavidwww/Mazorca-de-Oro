import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';

//Estilos
import './Navbar.css';

//imagenes
import  LogoMazorcaOroPNG   from "../../../static/Mazorca-Oro-02.png";
import  LogoMazorcaOroTwo from "../../../static/images/Navbar/Mazorca-Oro-two.png";
import  LogoMazorcaOroOne  from "../../../static/images/Navbar/Mazorca-Oro-One.png";

//Componentes
import Dropdown from '../Dropdown/Dropdown';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    showButton();
  }, []);


  window.addEventListener('resize',  refreshPage);


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
        <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
        {
          LogoMazorcaOroOne != null ? 
            (<img src={ LogoMazorcaOroOne } width={"150PX"} height={"65PX"} alt="Casagri" />
               ):null
        } 
         
        </a>


        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Inicio 
            </Link>
          </li>

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
              Inscripción <i className='fas fa-caret-down' />
            </Link>
          </li>

          <li className='nav-item'>
            <a
              href="/financing"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Detalles
            </a>
          </li>

          <li className='nav-item'>
            <button className='btn-Incripción' >Participa Ahora</button>
          </li>
          
        </ul>

      </nav>
    </>
  );
}

export default Navbar;
