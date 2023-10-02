import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

//estilos Diseño
import "./Loader.css"
function FacebookCircularProgress(props) {
  return (
    <Box ssx={{ display: 'flex', height: '100%' }} className='loading' >
      
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#5b6274' : '#5b6274'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        {...props}
      />
    </Box>
  );
}

const Loader = () => {
  return (
    <>
            <div className='loanding__Container'>
              <FacebookCircularProgress />
              <div className='Loading__title'>Subiendo Video</div>
            </div>
    </>
  )
}

export default Loader


