import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateAdvertisement } from '../../components/State/Advertisement/Action';

const UpdateAdvertisement = () => {
    const { id } = useParams(); // Get the advertisement ID from the URL
  const dispatch = useDispatch();
  const { advertisements } = useSelector((store) => store.advertisement);
  const [formData, setFormData] = useState({
    title: '',
    landSize: '',
    houseSize: '',
    baths: '',
    beds: '',
  });

  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    const ad = advertisements.find((item) => item.id === parseInt(id)); // Find the ad by ID
    if (ad) {
      setFormData({
        title: ad.title,
        landSize: ad.landSize,
        houseSize: ad.houseSize,
        baths: ad.baths,
        beds: ad.beds,
      });
    }
  }, [id, advertisements]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAdvertisement(id, formData, jwt)); // Dispatch update advertisement
  };
  return (
    <div>
        <div className='p-4'>
            <h1 className='text-gray-500 text-center text-xl pb-10'>Update Advertisement</h1>
        </div>

        <Box sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Land Size"
          name="landSize"
          value={formData.landSize}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="House Size"
          name="houseSize"
          value={formData.houseSize}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Baths"
          name="baths"
          value={formData.baths}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Beds"
          name="beds"
          value={formData.beds}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Update Advertisement
        </Button>
      </form>
    </Box>
    </div>
  )
}

export default UpdateAdvertisement