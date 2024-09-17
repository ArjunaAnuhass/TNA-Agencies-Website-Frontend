import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../State/Authentication/Action';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FeedbackIcon from '@mui/icons-material/Feedback';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

const menu=[
    {title:"Favorites", icon:<FavoriteIcon/>},
    {title:"Post-Advertisement", icon:<PostAddIcon/>},
    {title:"Add-Feedback", icon:<FeedbackIcon/>},
    {title:"All-Feedback", icon:<InsertCommentIcon/>},
    {title:"Logout", icon:<LogoutIcon/>},
]

export const ProfileNavigation = ({open, handleClose}) => {

    const isSmallScreen = useMediaQuery("(max-width:1800)")

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleNavigate = (item) => {

        if(item.title==="Logout"){
            dispatch(logout())
            navigate("/")
        }
        else

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
