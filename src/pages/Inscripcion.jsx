import React, { useState, useEffect } from 'react';
import InscriptionForm from "../components/Inscription/InscriptionForm"

export const Inscripcion = () => {


  

  useEffect(() => {
    document.title= `Inscripcion | Mazorca de Oro`;
  },[])

  return (
    <div >
      <InscriptionForm/>
    </div>
  )
}



