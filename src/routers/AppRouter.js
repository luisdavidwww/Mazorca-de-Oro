import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import   Navbar   from '../components/common/Navbar/Navbar';
import  { Home }  from '../pages/Home';
import  { Inscripcion }  from '../pages/Inscripcion';
import  { Detalles }  from '../pages/Detalles';
import  Error  from '../pages/Error404';
import  Footer  from '../components/common/Footer/Footer';


export const AppRouter = () => {
    return (
        <>
            <Navbar component="Navbar"/>    
            <>       
                <Routes>
                    <Route path="/" element={ <Home/> }></Route>;
                    <Route path="/inscripcion" element={ <Inscripcion/> }></Route>;
                    <Route path="/detalles" element={ <Detalles/> }></Route>;
                    <Route path="*" element={ <Error/> }></Route>   
                </Routes>
            </> 
            <Footer component="Footer"/>   
        </>
    )
}
