import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const AdvertisementCard = () => {
  return (
    
    <Card className='w-[18rem]'>

        <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover' src="https://cdn.prod.website-files.com/620ec747459e13c7cf12a39e/625b10a58137b364b18df2ea_iStock-94179607.jpg" alt="" />

            <Chip size='small' className='absolute top-2 left-2' color={true?"success":"error"} label={true?"Available":"Unavailable"}></Chip>
        </div>

        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg'>Kirulapone Luxury House with Furnished Three Storied</p>
                <p className='text-gray-500 text-sm'>
                    Colombo District
                </p>
            </div>

            <div>
                <IconButton>
                    {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
            </div>
        </div>
    </Card>
  )
}

export default AdvertisementCard