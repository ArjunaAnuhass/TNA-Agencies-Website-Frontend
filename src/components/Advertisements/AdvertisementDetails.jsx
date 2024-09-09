import { Grid } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const AdvertisementDetails = () => {
  return (
    <div className='px-5 lg:px-20'>

        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/Colombo District/Advertisement Name/7</h3>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className='w-full h-[40vh] object-cover' src="https://cdn.prod.website-files.com/620ec747459e13c7cf12a39e/625b10a58137b364b18df2ea_iStock-94179607.jpg" alt="" />
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
                <h1 className='text-4xl font-semibold'>Advertisement Name</h1>
                <h2 className='text-2xl font-extrabold mt-4'>LKR 42,000,000</h2>
                <p className='text-gray-500 mt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sapiente numquam 
                    dolor incidunt unde aut dicta cumque atque corporis, facilis, consequuntur adipisci eveniet quis 
                    repudiandae iure culpa est? Beatae, esse?e
                </p>

                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon/>
                        <span>
                            Colombo, Sri Lanka
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <CalendarTodayIcon/>
                        <span>
                            Published Date: 2024-09-09 20.33 PM
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        
                        <span>
                            Land Size: 1700 square feet
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        
                        <span>
                            House Size: 2000 square feet
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        
                        <span>
                            Baths: 2 baths
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        
                        <span>
                            Beds: 4 baths
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        
                        <span>
                            Baths: 2 baths
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        
                        <span>
                            Email: anuhass2017@gmail.com
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        
                        <span>
                            Mobile: 076-731-7368
                        </span>
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AdvertisementDetails