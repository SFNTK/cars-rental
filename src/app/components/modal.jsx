import React from 'react';
import "./modal.css";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const Modal = (props) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div id='modalall'>
    <div id='modalcontent'>
    <img src='./tiguan.webp'/>
<div class="coolinput">
    <label for="input" class="text">Name:</label>
    <input type="text" placeholder="Write here..." name="input" class="input"/>
</div>
<div class="coolinput">
    <label for="input" class="text">Name:</label>
    <input type="text" placeholder="Write here..." name="input" class="input"/>
</div>
    </div>
        </div>
    );
}

export default Modal;
