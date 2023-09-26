import React from 'react';

//Logo Footer 
import  mazorcaPNG   from "../../../static/images/footer/Mazorca-Oro.png";
import  MazorcaOne   from "../../../static/images/footer/Mazorca-Oro-One.png";

//icons
import { AiFillContacts } from "react-icons/ai";



//estilos
import './Footer.css'


const Footer = () => {
    return (
        <footer className="color__footer">
            {/* Contenedor Principal */}
            <div className="footer__container">

                {/* Logo */}
                <div className="footer__Logo" >
                        <a href='/'>
                            <div className='footer__logo__img' >
                                <img src={ MazorcaOne }  alt="Mazorca-de-Oro" />
                            </div> 
                        </a> 
                </div>

                {/* Footer */}
                <div className="footer__info">

                    {/* Categorias */}
                    <div className="footer__info__products"> 
                        <ul className="footer__info__products__list" >
                            <li className='footer__info__products__item'>
                                <a href='/Category/Agroindustrial'>
                                    <span className='footer__span'>Inicio</span>
                                </a> 
                            </li>
                            <li className='footer__info__products__item'>
                                <a href='/Category/Maquinarias'>    
                                    <span className='footer__span' >Inscripción</span>
                                </a> 
                            </li>
                            <li className='footer__info__products__item'>
                                <a href='/Category/Salud Animal'>    
                                    <span className='footer__span' >Detalles</span>
                                </a> 
                            </li>
                            <li className='footer__info__products__item-btn'>
                                <button className='btn-Incripción-footer' >Participa Ahora</button>
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