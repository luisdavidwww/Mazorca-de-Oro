import React, { useEffect, useState } from 'react';




const Error = () => {
    useEffect(() => {
      document.title= `Error 404`
     }, [])



  return (
    <div style={{backgroundColor:'#F9F9F9'}}>
        <>
        <div>Error 404</div>
        </>
    </div>
  )
}

export default Error;






