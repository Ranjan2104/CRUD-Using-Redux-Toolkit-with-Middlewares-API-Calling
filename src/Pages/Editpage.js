import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { updateUserData } from '../Store/Slices/Middlewares/updateUser';
import { useDispatch, useSelector } from 'react-redux';

const Editpage = () => {
  const [formData, setFormData] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(params.id) {
        setFormData({...location?.state?.data});
    }
  },[])

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value})
  };
  const handleSubmit = () => {
    dispatch(updateUserData(formData));
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
                    <TextField name="name" onChange={handleChange} value={formData.name} id="outlined-basic" label="Enter Full Name" variant="outlined" fullWidth />
                </Box>
                <Box sx={{ marginTop: '2rem' }}>
                    <TextField name="email" onChange={handleChange} value={formData.email} id="outlined-basic" label="Enter EmailID" variant="outlined" fullWidth />
                </Box>
                <Box sx={{ marginTop: '2rem' }}>
                    <TextField name="age" onChange={handleChange} value={formData.age} id="outlined-basic" label="Enter Age" variant="outlined" fullWidth type='number'/>
                </Box>
                <Box sx={{ marginTop: '2rem' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value= {formData?.gender === "Male" ? "Male" : formData?.gender === "Female" ? "Female" : ''}
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
                <Button variant="contained" onClick={handleSubmit}>Save Details</Button>
            </Box>
        </Paper>
    </Box>
</div>
  )
}

export default Editpage;