import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../State/Authentication/Action'


const initialValues = {
    email: "",
    password: ""
}

export const LoginForm = () => {

  const handleSubmit = (values) =>{
    dispatch(loginUser({userData:values, navigate}))
  }

  const dispatch = useDispatch();

  const navigate = useNavigate();
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

    </div>
  )
}
