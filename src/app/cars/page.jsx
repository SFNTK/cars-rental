'use client'
import React, { useEffect, useRef, useState } from 'react';
import "./car.css";
import { listecars } from "../../../public/carsliste";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
    borderRadius: "20px",

    p: 4,
};
const Page = () => {
    const [validationame, setvalidationame] = useState(true)
    const [validationdate1, setvalidationdate1] = useState(false)
    const [validationphone, setvalidationphone] = useState(true)
    const circul = useRef();
    const [open, setopen] = useState(false)
    const [selected, setselected] = useState({})

    const handleClose = () => setopen(false);
    const [carscontent, setcontent] = useState(<div><CircularProgress /></div>);
    const [value1, setValue1] = React.useState(dayjs('2024-09-05'));
    const [value2, setValue2] = React.useState(dayjs('2024-09-05'));
    const [name, setname] = useState(null)
    const [phone, setphone] = useState(null)
    const [Open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleclose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        const content = listecars.map(data => {
            return <div className='car2' key={data.id}>
                <img src={data.image.toString()} className='carimage2' />
                <span>{data.category}</span>
                <span>{data.name}</span>
                <span>Prix Des</span>
                <p>{data.price}</p>
                <div id='carddisplay2'>
                    <div><img src='./user4.png' />{data.user}</div>
                    <div><img src='./luggage.png' />{data.luggage}</div>
                    <div><img src='./car.png' />{data.door}</div>
                    <div><img src='./setting.png' />{data.type}</div>
                </div>
                <div className='carsbtn2' onClick={() => {
                    setselected(data)
                    setopen(true)
                    console.log(data)
                }}>RESERVEZ MAINTENANT</div>
            </div>
        })
        setcontent(content)

    }, [])
    return (
        <div>
            <div id='carscontainer2'>



                {carscontent}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"

                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style} id="containermodal">
                        <img src={selected.image} id='carimg' />
                        <form>

                            <div class="coolinput">
                                <label for="input" class="text">Nom Complet :</label>
                                <input type="text" placeholder="Write here..." name="input" class="input" onChange={e => {
                                    setname(e.target.value)
                                }} />
                            </div>
                            <div class="coolinput">
                                <label for="input" class="text">Numero du telephone</label>
                                <input type="text" placeholder="Write here..." name="input" class="input" onChange={e => {
                                    setphone(e.target.value)
                                }} />
                            </div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer
                                    components={[
                                        'DatePicker',
                                        'MobileDatePicker',
                                        'DesktopDatePicker',
                                        'StaticDatePicker',
                                    ]}
                                >

                                    <DemoItem label="Date d'entrée">
                                        <DatePicker defaultValue={dayjs()} onChange={(newValue) => setValue1(newValue)} />
                                    </DemoItem>
                                    <DemoItem label="Date du Sortie">
                                        <DatePicker defaultValue={dayjs().add(1, "day")} onChange={(newValue) => setValue1(newValue)} />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>




                            <div id='btnmodal'


                                onClick={handleClick}

                            >Reservez</div>
                        </form>


                    </Box>
                </Fade>
            </Modal>
            <Snackbar open={Open} autoHideDuration={6000} onClose={handleclose}>
                <Alert
                    onClose={handleclose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    NOUS AVONS REÇU VOTRE DEMANDE,NOUS VOUS APPELERONS DANS LES PLUS BREFS DÉLAIS POUR CONFIRMER AVEC VOUS      </Alert>
            </Snackbar>
        </div>
    );
}

export default Page;
