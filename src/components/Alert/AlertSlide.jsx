import  React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertSlide({setExitMessage, message, registro }) {

  const [open, setOpen] = React.useState(true);

  const navigate = useNavigate();


  const handleClose = (registro) => {
    if(registro){
      navigate('/');
      window.scrollTo(0, 0);
    };

    setExitMessage(false);
  };

  return (
    <div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{message}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(registro)}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}