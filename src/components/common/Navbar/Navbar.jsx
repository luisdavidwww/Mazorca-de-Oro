import React, { useState, useEffect  } from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';
import  LogoMazorcaOro   from "../../../static/Mazorca-Oro.svg";




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
          LogoMazorcaOro != null ? 
            (<img src={ LogoMazorcaOro } width={"140px"} height={"140px"} alt="Casagri" />
               ):null
        } 
         
        </a>


        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <a href='/' className='nav-links' onClick={closeMobileMenu}>
              Inicio
            </a>
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
            {/*dropdown && <Dropdown />*/}
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
