import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { RegisterForm} from "./RegisterForm"
import { LoginForm} from "./LoginForm"

export const Auth = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        outline: "none",
        boxShadow: 24,
        p: 4
    }

    const handleClosed = () => {
        navigate("/")
    }

  return (
    <>


    <Modal onClose={handleClosed} open={
        location.pathname==="/account/register" || location.pathname==="/account/login"}>

        <Box sx={style}>
            
            {location.pathname==="/account/register"?<RegisterForm/>:<LoginForm/>}
        </Box>

    </Modal>


    </>
  )
}
