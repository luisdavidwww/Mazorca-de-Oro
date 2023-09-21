import React, { useState, useEffect } from 'react';
import HomeComponent from "../components/Home/HomeComponent"

export const Home = () => {


  

  useEffect(() => {
    document.title= `Concurso Mazorca de Oro`;
  },[])

  return (
    <div >
      <HomeComponent/>
    </div>
  )
}






