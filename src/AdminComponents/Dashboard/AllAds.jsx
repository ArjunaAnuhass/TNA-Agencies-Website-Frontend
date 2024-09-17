import { Avatar, Box, Button, Card, CardContent, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdvertisement, getAllAdvertisement, updateAdvertisementAvailability } from '../../components/State/Advertisement/Action';
import { Delete } from '@mui/icons-material';
import UpdateIcon from '@mui/icons-material/Update';
import { useNavigate } from 'react-router-dom';

const allAds = [1,1,1,1,1,1,1];
export default function AllAds () {

  const disptach = useDispatch();
  const navigate = useNavigate();

  const {advertisement} = useSelector((store) => store);

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    disptach(getAllAdvertisement(jwt))
  }, [disptach, jwt])

  // disptach(updateAdvertisementAvailability({advertisementId:advertisement, jwt}));

  const handleUpdateAvailability = (advertisementId, availability) => {
    const newStatus = {availability: !availability};
    disptach(updateAdvertisementAvailability(advertisementId, newStatus, jwt));
  }

  const handleDeleteAdvertisement = (advertisementId) => {
    disptach(deleteAdvertisement(advertisementId, jwt));
  }

  const handleUpdateAdvertisement = (advertisementId) =>{
    navigate(`/admin/advertisement/update-advertisement/${advertisementId}`);
  }

  return (

    

    <Box>
      <Card className="mt-1">
        <CardHeader title="All Advertisements" sx={{ pt: 2, alignItems: 'center' }} />
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Id</TableCell>
                  <TableCell align="right">Land Size</TableCell>
                  <TableCell align="right">House Size</TableCell>
                  <TableCell align="right">Baths</TableCell>
                  <TableCell align="right">Beds</TableCell>
                  <TableCell align="right">Availability</TableCell>
                  <TableCell align='right'>Delete</TableCell>
                </TableRow>
              </TableHead>
              
              <TableBody>
                {advertisement.advertisements.map((item, index) => (
                  <TableRow
                    key={item} // Since there's no name in row, use the index as the key
                    item={item}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {/* {item.id} */}
                      <Avatar src={item.images[0]}></Avatar>
                    </TableCell>
                    <TableCell align="right">{item.title}</TableCell>
                    <TableCell align="right">{item.id}</TableCell>
                    <TableCell align="right">{item.landSize}</TableCell>
                    <TableCell align="right">{item.houseSize}</TableCell>
                    <TableCell align="right">{item.baths}</TableCell>
                    <TableCell align="right">{item.beds}</TableCell>
                    <TableCell align='right'>
                      <Button color={item.availability ? "primary":"error"} variant='contained' onClick={() => handleUpdateAvailability(item.id, item.availability)}>{item.availability ? "available":"unavailable"}</Button>
                    </TableCell>
                    <TableCell align='right'>
                      <IconButton color='error' variant='contained' sx={{justifyItems:"justify-between"}} onClick={() => handleDeleteAdvertisement(item.id)}>
                        <Delete/>
                      </IconButton>
                      <IconButton color='Blue' onClick={() => handleUpdateAdvertisement(item.id)}>
                        <UpdateIcon/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  )
}
