import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function Modal({ setIsOpen, modalData }) {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setIsOpen(false);
    };
    const{name, email, age, gender} = modalData;

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    View Details
                </BootstrapDialogTitle>
                <DialogContent dividers sx={{ width: '300px'}}>
                    <Typography sx={{ fontSize: 16, fontWeight: '500' }} gutterBottom>
                        Name - {name}
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: '500' }} gutterBottom>
                        Email - {email}
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: '500' }} gutterBottom>
                        age - {age}
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: '500' }} gutterBottom>
                        Gender - {gender}
                    </Typography>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}