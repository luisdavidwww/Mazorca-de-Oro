import React from 'react';
import { useNavigate } from "react-router-dom";

//Logo Footer 
import  MazorcaOro   from "../../../static/images/Navbar/Mazorca-Oro.svg";

//icons
import { AiFillContacts } from "react-icons/ai";



//estilos
import './Footer.css'


const Footer = () => {
    const navigate = useNavigate();


    return (
        <footer className="color__footer">
            {/* Contenedor Principal */}
            <div className="footer__container">

                {/* Logo */}
                <div className="footer__Logo" >
                        <a href='/'>
                            <div className='footer__logo__img' >
                                <img src={ MazorcaOro }  alt="Mazorca-de-Oro" />
                            </div> 
                        </a> 
                </div>

                {/* Footer */}
                <div className="footer__info">

                    {/* Categorias */}
                    <div className="footer__info__products"> 
                        <ul className="footer__info__products__list" >
                            <li className='footer__info__products__item'>
                                <a href='/'>
                                    <span className='footer__span'>Inicio</span>
                                </a> 
                            </li>
                            <li className='footer__info__products__item'>
                                <a href='/inscripcion'>    
                                    <span className='footer__span' >Inscripción</span>
                                </a> 
                            </li>
                            <li className='footer__info__products__item'>
                                <a href='/detalles'>    
                                    <span className='footer__span' >Detalles</span>
                                </a> 
                            </li>
                            <li className='footer__info__products__item-btn'>
                                <a className='btn-Incripción-footer' href='/inscripcion' >Participa Ahora</a>
                            </li>
                        </ul>
                    </div>

                    {/* Información de Contacto */}
                    <div className="footer__info__contact"> 
                        <div className='footer__info__contact__list'>
                            <div className='footer__info__contact__item'>
                                <div className='footer__info__contact__iconText'>
                                    <AiFillContacts className='footer__icon__info'/>
                                    <span className='footer__contact__span' >Más Información: 0501- CASAGRI (2272474) 54654</span>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Casagri */}
            <div className="text-center text-Copy">Concuso Mazorca de Oro © 2023 - All Rights Reserved</div>
            
        </footer>
    )
}

export default Footer; 