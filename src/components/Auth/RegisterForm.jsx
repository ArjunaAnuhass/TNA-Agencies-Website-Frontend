import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: ""
}

export const RegisterForm = () => {

  const handleSubmit = (values) => {
    console.log("form values", values)

  }

  const navigate = useNavigate();
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



    </div>
  )
}
