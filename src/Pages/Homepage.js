import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { createUser } from '../Store/Slices/Middlewares/createUser';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    };
    const handleSubmit = () => {
        dispatch(createUser(formData));
        navigate('/read');
    }
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '3rem',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 500,
                        height: 500,
                    },
                }}
            >
                <Paper elevation={20}>
                    <Box sx={{ margin: '2rem' }}>
                        <Box>
                            <TextField name="name" onChange={handleChange} id="outlined-basic" label="Enter Full Name" variant="outlined" fullWidth />
                        </Box>
                        <Box sx={{ marginTop: '2rem' }}>
                            <TextField name="email" onChange={handleChange} id="outlined-basic" label="Enter EmailID" variant="outlined" fullWidth />
                        </Box>
                        <Box sx={{ marginTop: '2rem' }}>
                            <TextField name="age" onChange={handleChange} id="outlined-basic" label="Enter Age" variant="outlined" fullWidth type='number'/>
                        </Box>
                        <Box sx={{ marginTop: '2rem' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Gender"
                                    onChange={handleChange}
                                    name="gender"
                                >
                                    <MenuItem value={"Male"}>Male</MenuItem>
                                    <MenuItem value={"Female"}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}

export default Homepage