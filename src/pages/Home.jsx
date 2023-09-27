import React, { useEffect } from 'react';
//componentes
import HomeComponent from "../components/Home/HomeComponent";
import Participate from "../components/Home/Participate"
import Video from "../components/Home/Video"

export const Home = () => {

  useEffect(() => {
    document.title= `Concurso Mazorca de Oro`;
  },[])

  return (
    <>
      <HomeComponent/>
      <div style={{ backgroundColor:'#070400'}}>
        <Participate/>
        <Video/>
      </div>
      
    </>
  )
}






