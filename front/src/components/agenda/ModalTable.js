import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AthletesTable from "./AthletesTable";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90vw",
    bgcolor: 'background.paper',
    border: '1px solid grey',
    boxShadow: 24,
    p: 4,
};

export default function ModalTable(props) {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Liste des athlètes participants
                        </Typography>
                        <Typography id="transition-modal-description" sx={{mt: 2}}>
                            <AthletesTable data={props.data}/>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
