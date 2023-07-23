import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Box } from '@mui/material'
import Modal from '../Components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserData } from '../Store/Slices/Middlewares/getAllData'

const Readpage = () => {
  const [open, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [checkData, setCheckData] = useState('');
  const dispatch = useDispatch();
  const getData = useSelector((state) => state?.userDetails);
  
  useEffect(() => {
    dispatch(getAllUserData());
  },[]);

  const handleChange = (e) => {
    setCheckData(e.target.value);
  }

  if(getData.loading) {
    <h1>Loading....</h1>
  }

  return (
    <div>
      {open ? <Modal setIsOpen={setIsOpen} modalData={modalData} /> : ''}
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>All Data</h1>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        <Box sx={{ display: 'flex' }}>
          <label>All</label>
          <input type='radio' value="All" checked={checkData === "All"} onClick={handleChange}/>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <label>Male</label>
          <input value="Male" checked={checkData === "Male"} type='radio' onChange={handleChange}/>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <label>Female</label>
          <input value="Female" checked={checkData === "Female"} type='radio' onChange={handleChange}/>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px', width: '25%', margin: '4rem' }}>
          {
            getData && getData.data
            .filter((searchData) => {
              if(getData.searchValue.length !== 0) {
                return searchData.name.toLowerCase().includes(getData.searchValue.toLowerCase())
              }
              else {
                return searchData;
              }
            })
            .filter((ele) =>{
              if(checkData === "Male") {
                return ele.gender === checkData
              }
              else if(checkData === "Female") {
                return ele.gender === checkData;
              }
              else return ele;
            }).map((item, index) => {
              return (
                <Card setIsOpen={setIsOpen} key={index} data={item} setModalData={setModalData}/>
              )
            })
          }
        </Box>
      </Box>
    </div>
  )
}

export default Readpage