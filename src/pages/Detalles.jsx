import React, {  useEffect } from 'react';
import DetallesConcurso from "../components/Detalles/DetallesConcurso"

export const Detalles = () => {

  useEffect(() => {
    document.title= `Detalles | Mazorca de Oro`;
  },[])

  return (
    < >
      <DetallesConcurso/>
    </>
  )
}



