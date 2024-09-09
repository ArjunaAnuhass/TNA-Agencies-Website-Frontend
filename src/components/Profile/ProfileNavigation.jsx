import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const menu=[
    {title:"Favorites", icon:<FavoriteIcon/>},
    {title:"Logout", icon:<LogoutIcon/>}
]

export const ProfileNavigation = ({open, handleClose}) => {

    const isSmallScreen = useMediaQuery("(max-width:1800)")

    const navigate = useNavigate();

    const handleNavigate = (item) => {
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }

  return (
    <div>
        <Drawer variant={isSmallScreen ? "temporary" : "permanent"} onClose={handleClose} open={isSmallScreen ? open : true} anchor='left' sx={{zIndex:1}}>

            <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
                {menu.map((item, i)=>
                <>
                    <div onClick={() => handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                        {item.icon}
                        <span>{item.title}</span>
                    </div>
                    {i!==menu.length-1 && <Divider/>}
                </>)}
            </div>

        </Drawer>
    </div>
  )
}

export default ProfileNavigation
