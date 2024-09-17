import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../State/Authentication/Action'


const initialValues = {
    email: "",
    password: ""
}

export const LoginForm = () => {

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubmit = (values) =>{
    dispatch(loginUser({userData:values, navigate}))
    .then(() => {
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    })
    .catch(error => {
      setSnackbarMessage("Login failed. Please check your credentials.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    });
  }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  return (
    <div>

        <Typography variant='h4' className='text-center'>
            Login
        </Typography>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>

          <Form>

            <Field as={TextField} name="email" label="email" fullWidth variant="outlined" margin="normal">

            </Field>

            <Field as={TextField} name="password" label="password" fullWidth variant="outlined" margin="normal">

            </Field>

            <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained'>Login</Button>

          </Form>

        </Formik>

        <Typography variant='body2' align='center' sx={{mt:3}}>
          Don't have an account?
          <Button size='small' onClick={() => navigate("/account/register")}>
            register
          </Button>
        </Typography>

        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

    </div>
  )
}
