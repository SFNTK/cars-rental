'use client'
import React from 'react';
import "./contact.css";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const Contact = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    return (
        <div id='contact'>
            <div id='herocontact'>
                <h2 id='h2contact'>CONTACTEZ NOUS</h2>
<div id='contactover'></div>
            </div>
            <div class="contact-cards">
    <div class="cardcntc">
        <img class="fa" src='./facebook9.png'/>
        <a href="https://www.facebook.com/profile.php?id=100093431059884">Click Here</a>
        <p>Facebook</p>
    </div>

    <div class="cardcntc">
        <img class="fa" src='./mail.png'/>
        <h3>Saidakourida@gmail.com</h3>
        <p>Email</p>
    </div>

    <div class="cardcntc">
        <img class="fa" src='./phone-call(2).png'/>
        <h3>0661-222330</h3>
        <p>Phone Number</p>
    </div>
</div>

            <div id='contactsection'>
            <img src='./rental.jpg' id='backcpntact' />
            <div id='contactcontainer'>
                <h2>CONTACT US</h2>

                <form id='form'>

                    <div className="group">
                        <img src='user(2).png' className='icon'/>
                        <input className="input" type="text" placeholder="FULL NAME" />
                    </div>
                    <div className="group">
                       <img src='./phone-call(2).png' className='icon'/>
                        <input className="input" type="tel" placeholder="ENTER YOUR PHONE NUMBER" />
                    </div>
                    <div className="group">
                       <img src='./mail.png' className='icon'/>
                        <input className="input" type="text" placeholder="ENTER YOUR EMAIL" />
                    </div>
                    <div className="group">
                       <img src='./writing.png' className='icon'/>
                        <textarea className="input"  placeholder="Your Message" />
                    </div>
                    <div id="contactbtn" onClick={handleClick}>
                        ENVOYER

                    </div>
                </form>

            </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
NOUS AVONS REÇU VOTRE MESSAGE ET NOUS VOUS RÉPONDRONS DANS LES PLUS BREFS DÉLAIS        </Alert>
      </Snackbar>
        </div>
    );
}

export default Contact;
