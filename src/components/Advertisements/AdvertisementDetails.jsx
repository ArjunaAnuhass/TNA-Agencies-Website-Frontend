import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertisementById } from '../State/Advertisement/Action';

const AdvertisementDetails = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth, advertisement} = useSelector(store => store)

    const {id, districtCategory} = useParams();

    console.log("advertisement", advertisement);

    useEffect(() => {
        dispatch(getAdvertisementById({jwt, advertisementId:id}))
    }, [])

  return (
    <div className='px-5 lg:px-20'>

        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/Colombo District/Advertisement Name/7</h3>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className='w-full h-[40vh] object-cover' src={advertisement.advertisement.images?.[0]} alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://ik.imagekit.io/livlabs/ik-seo/pma/assets/iStock-1315966358__1_/properties-in-campbell-ca.jpg?tr:w-auto,dpr-auto" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/12/real_estate_investing-e1607584315870.jpg" alt="" />
                    </Grid>
                </Grid>
            </div>

            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>{advertisement.advertisement.title}</h1>
                <h2 className='text-2xl font-extrabold mt-4'>LKR {advertisement.advertisement.price}</h2>
                <p className='text-gray-500 mt-1'>
                    {advertisement.advertisement.description}
                </p>

                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon/>
                        <span>
                            {advertisement.advertisement.address?.city}
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <CalendarTodayIcon/>
                        <span>
                            Published Date: {advertisement.advertisement.publishedDate}
                        </span>
                    </p>
                    <p className='text-white flex items-center gap-3'>
                        
                        <span>
                            Land Size: {advertisement.advertisement.landSize} square feet
                        </span>
                    </p>
                    <p className='text-white flex items-center gap-3'>
                        
                        <span>
                            House Size: {advertisement.advertisement.houseSize} square feet
                        </span>
                    </p>
                    <p className='text-white flex items-center gap-3'>
                        
                        <span>
                            Baths: {advertisement.advertisement.baths} baths
                        </span>
                    </p>
                    <p className='text-white flex items-center gap-3'>
                        
                        <span>
                            Beds: {advertisement.advertisement.beds} baths
                        </span>
                    </p>
                    <p className='text-white flex items-center gap-3'>
                        
                        <span>
                            Category by District: {advertisement.advertisement.districtCategory?.name}
                        </span>
                    </p>
                    <p className='text-white flex items-center gap-3'>
                        
                        <span>
                            Email: {advertisement.advertisement.contactInformation?.email}
                        </span>
                    </p>
                    <p className='text-white items-center gap-3'>
                        
                        <span>
                            Mobile: {advertisement.advertisement.contactInformation?.mobile}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AdvertisementDetails