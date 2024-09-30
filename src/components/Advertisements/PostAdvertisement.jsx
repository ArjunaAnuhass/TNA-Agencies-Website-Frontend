import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Button, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik, yupToFormErrors } from 'formik'
import React, { useEffect, useState } from 'react'
import { uploadImageToCloudinary } from '../util/UploadToCloudinary';
import { useDispatch } from 'react-redux';
import { createAdvertisement } from '../State/Advertisement/Action';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialValues={
    title:"",
    landSize:"",
    houseSize:"",
    baths:"",
    beds:"",
    description:"",
    price:"",
    streetName:"",
    city:"",
    district:"",
    country:"Sri Lanka",
    email:"",
    mobile:"",
    images:[],
}

export const PostAdvertisement = () => {

    const {advertisement} = (store => store);

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const jwt = localStorage.getItem("jwt");

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
        }),
        onSubmit: (values, e) => {
            const data = {
                title:values.title,
                landSize:values.landSize,
                houseSize:values.houseSize,
                baths:values.baths,
                beds:values.beds,
                description:values.description,
                price:values.price,
                address:{
                    streetName:values.streetName,
                    city:values.city,
                    district:values.district,
                    country:values.country
                },
                contactInformation:{
                    email:values.email,
                    mobile:values.mobile
                },
                images:values.images,
            };
            console.log("data ---", data);

            dispatch(createAdvertisement({data, jwt}))
                .then(() => {
                    setSuccess(true);
                })
                .catch((error) => {
                    setError(error);
                })
        }
    });

    useEffect(() => {
        if (success) {
            toast.success("Advertisement posted successfully!");
            setTimeout(() => {
                navigate("/all-adds"); // Navigate to another page
            }, 2000);  // Redirect after 2 seconds
        }
    }, [success, navigate]);


    // const handleImageChange = async(e) => {
    //     const file = e.target.files[0]
    //     setUploadImage(true)
    //     const image = await uploadImageToCloudinary(file)
    //     formik.setFieldValue("images", [...formik.values.images, image])
    //     setUploadImage(false)
    // }

    const [uploadImage, setUploadImage] = useState(false);

    const handleImageChange = async (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            const file = files[0];
            setUploadImage(true);
            try {
                const image = await uploadImageToCloudinary(file);
                formik.setFieldValue("images", [...formik.values.images, image]);
            } catch (error) {
                console.error("Error uploading image: ", error);
            } finally {
                setUploadImage(false);
            }
        }
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.images]
        updatedImages.splice(index, 1);
        formik.setFieldValue("images", updatedImages);
    }

  return (
    <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
        <div className='lg:max-w-4xl'>
        <h1 className='font-bold text-2xl text-center py-2'>
            Post an Advertisement
        </h1>

        <form onSubmit={formik.handleSubmit} className='space-y-4'>
            <Grid container spacing={2}>
                <Grid item xs={12} className='flex flex-wrap gap-5'>

                    <input type='file' accept='image/*' id='fileInput' style={{display:"none"}} onChange={handleImageChange}/>

                    <label className='relative' htmlFor='fileInput'>
                        <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                            <AddPhotoAlternateIcon className='text-white'/>
                        </span>
                        {
                            uploadImage && <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                                <CircularProgress/>
                            </div>
                        }
                    </label>

                    <div className='flex flex-wrap gap-2'>
                        {formik.values.images.map((image, index)=> (
                        <div className='relative'>
                            <img className='w-24 h-24 object-cover' key={index} src={image} alt=''/>
                            <IconButton size='small' sx={{position: 'absolute', top: 0, right: 0, outline: 'none'}} onClick={()=>handleRemoveImage(index)}>
                                <CloseIcon sx={{fontSize:"1rem"}}/>
                            </IconButton>
                        </div>))}
                        {formik.touched.images && formik.errors.images ? (
        <div style={{ color: 'red' }}>{formik.errors.images}</div>
    ) : null}
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <TextField fullWidth id='title' name='title' label='title' variant='outlined' onChange={formik.handleChange} value={formik.values.title}></TextField>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField fullWidth id='landSize' name='landSize' label='land size' variant='outlined' onChange={formik.handleChange} value={formik.values.landSize}></TextField>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField fullWidth id='houseSize' name='houseSize' label='house size' variant='outlined' onChange={formik.handleChange} value={formik.values.houseSize}></TextField>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField fullWidth id='baths' name='baths' label='baths' variant='outlined' onChange={formik.handleChange} value={formik.values.baths}></TextField>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField fullWidth id='beds' name='beds' label='beds' variant='outlined' onChange={formik.handleChange} value={formik.values.beds}></TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField fullWidth id='description' name='description' label='description' variant='outlined' onChange={formik.handleChange} value={formik.values.description}></TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField fullWidth id='price' name='price' label='price' variant='outlined' onChange={formik.handleChange} value={formik.values.price}></TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField fullWidth id='streetName' name='streetName' label='street name' variant='outlined' onChange={formik.handleChange} value={formik.values.streetName}></TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField fullWidth id='city' name='city' label='city' variant='outlined' onChange={formik.handleChange} value={formik.values.city}></TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField fullWidth id='district' name='district' label='district' variant='outlined' onChange={formik.handleChange} value={formik.values.district}></TextField>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField fullWidth id='country' name='country' label='country' variant='outlined' onChange={formik.handleChange} value={formik.values.country}></TextField>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField fullWidth id='email' name='email' label='email' variant='outlined' onChange={formik.handleChange} value={formik.values.email}></TextField>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField fullWidth id='mobile' name='mobile' label='mobile' variant='outlined' onChange={formik.handleChange} value={formik.values.mobile}></TextField>
                </Grid>

                {/* <Grid item xs={12} lg={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.category}
                        label="category"
                        onChange={formik.handleChange}
                        >
                        {advertisement.districtCategory.map((item) => <MenuItem value={item}>{item.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid> */}
            </Grid>

            <Button className='mt-5' variant='contained' color='primary' type='submit' disabled={formik.values.images.length < 3}>Post Advertisement</Button>
        </form>
        </div>

    </div>
  )
}


export default PostAdvertisement;