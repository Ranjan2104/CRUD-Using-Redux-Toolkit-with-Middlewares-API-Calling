import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { deleteUserData } from '../Store/Slices/Middlewares/deleteUser';
import { useDispatch } from 'react-redux';

export default function Cards({setIsOpen, data, setModalData}) {
    const navigate = useNavigate();
    const{name, email, age, gender, id} = data;
    const dispatch = useDispatch();
    return (
        <Card elevation={15}>
            <CardContent>
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
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '2rem'  }}>
                <Button variant="contained" size='small' color='secondary' onClick={() => navigate(`/edit/${id}`, {state: {data: data}})}>Edit</Button>
                <Button variant="contained" size='small' onClick={() => [setIsOpen(true), setModalData({name, email, age, gender})]}>View</Button>
                <Button variant="contained" size='small' color='success' onClick={() => dispatch(deleteUserData(data))}>Delete</Button>
            </Box>
        </Card>
    );
}
