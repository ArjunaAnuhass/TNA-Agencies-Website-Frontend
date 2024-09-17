import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import React from 'react'
import CreateDistrictCategory from './CreateDistrictCategory';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const DistrictCategoryTable = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  return (
    <Box>
        <Card className='mt-1'>
            <CardHeader action={<IconButton onClick={handleOpen} aria-label='settings'><CreateIcon/></IconButton>} title={"District Category"} sx={{pt:2, alignItems:"center"}}>

                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell align='left'>id</TableCell>
                                <TableCell align='left'>Name</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableCell component="th" scope='row'>
                                {1}
                            </TableCell>
                            <TableCell align='left'>{"name"}</TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardHeader>
        </Card>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <CreateDistrictCategory/>
            </Box>
        </Modal>
    </Box>
  )
}

export default DistrictCategoryTable