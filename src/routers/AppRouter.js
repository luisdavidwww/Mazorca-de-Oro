import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import   Navbar   from '../components/common/Navbar/Navbar';
import  { Home }  from '../pages/Home';
import  { Inscripcion }  from '../pages/Inscripcion';
import  Error  from '../pages/Error404';
import  Footer  from '../components/common/Footer/Footer';


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
                <Footer component="Footer"/>   
        </Router>
    )
}
