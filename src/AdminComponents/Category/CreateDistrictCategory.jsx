import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCategory } from '../../components/State/Advertisement/Action';

const CreateDistrictCategory = () => {

    const dispatch = useDispatch();


    const [formData, setFormData] = useState({category:""})

    const handleSubmit = (e) => {
        // e.preventDefault();
        // if (!formData.category) {
        //     console.error("Category name is required");
        //     return; // Prevent submission if category name is empty
        // }
        const data = {
            name : formData.category,

        };
        console.log(data);
        dispatch(createCategory({reqData:data, jwt:localStorage.getItem("jwt")}));
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,[name]:value
        });
        console.log("value", formData)
    }

  return (
    <div className=''>
        <div className='p-4'>
            <h1 className='text-gray-500 text-center text-xl pb-10'>Create District Category</h1>

            <form className='space-y-5' onSubmit={handleSubmit}>
                <TextField fullWidth id='category' name='category' label='Category Name' variant='outlined' onChange={handleInputChange} value={formData.category}></TextField>

                <Button variant='contained' type='submit'>Create Category</Button>
            </form>
        </div>
    </div>
  )
}

export default CreateDistrictCategory