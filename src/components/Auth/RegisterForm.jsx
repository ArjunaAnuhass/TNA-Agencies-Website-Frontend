import { Alert, Button, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../State/Authentication/Action'

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: ""
}

export const RegisterForm = () => {

  const dispatch=useDispatch();
  const navigate = useNavigate();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubmit = (values) => {
    dispatch(registerUser({userData:values, navigate}))
      .then(() => {
        // Assuming your registerUser action returns a promise
        setSnackbarMessage("Registration successful");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      })
      .catch(error => {
        setSnackbarMessage("This email already used ti another account...Please check and Try Again!", error);
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
    console.log("form values", values)
  }

    const handleSnackbarClose = () => {
      setOpenSnackbar(false);

  }

  
  return (
    <div>

      <Typography variant='h4' className='text-center'>
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>

        <Form>

          <Field as={TextField} name="fullName" label="Full Name" fullWidth variant="outlined" margin="normal">

          </Field>

          <Field as={TextField} name="email" label="Email" fullWidth variant="outlined" margin="normal">

          </Field>

          <Field as={TextField} name="password" label="Password" fullWidth variant="outlined" margin="normal" type="password">

          </Field>

          <FormControl fullWidth margin='normal'>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Field
              as={Select}
                labelId="role-simple-select-label"
                id="demo-simple-select"
                label="Role"
                name="role"
              >
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
              </Field>
          </FormControl>

          <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained'>Register</Button>
        </Form>
      </Formik>

      <Typography variant='body2' align='center' sx={{mt:3}}>
        If you already have an account...
        <Button size='small' onClick={() => navigate("/account/login")}>
          Login
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


export default RegisterForm