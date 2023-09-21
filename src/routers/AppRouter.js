import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import   Navbar   from '../components/common/Navbar/Navbar';
import  { Home }  from '../pages/Home';
import  { Inscripcion }  from '../pages/Inscripcion';
import  Error  from '../pages/Error404';


export const AppRouter = () => {
    return (
        <Router>
             <Navbar component="Navbar"/>    
            <div>       
                    <Routes>
                        <Route path="/" element={ <Home/> }></Route>;
                        <Route path="/inscripcion" element={ <Inscripcion/> }></Route>;
                        <Route path="*" element={ <Error/> }></Route>   
                    </Routes>
            </div> 
        </Router>
    )
}
