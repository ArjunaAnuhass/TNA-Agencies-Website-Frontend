import { Dashboard } from '@mui/icons-material'
import React from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LogoutIcon from '@mui/icons-material/Logout';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../components/State/Authentication/Action';

const menu = [
    {title:"Dashboard", icon:<Dashboard/>, path:"/"},
    // {title:"Category", icon:<CategoryIcon/>, path:"/category"},
    // {title:"Advertisement", icon:<NewspaperIcon/>, path:"/editAdvertisements"},
    {title:"Admin-Feedback", icon:<FeedbackIcon/>, path:"/admin-feedback"},
    {title:"Logout", icon:<LogoutIcon/>, path:"/"}

]

const AdminSideBar = ({handleClose}) => {

    const isSmallScreen = useMediaQuery("(max-width:1080px)")

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleNavigate = (item) => {
        navigate(`/admin/advertisement${item.path}`)

        if(item.title==="Logout"){
            navigate("/")
            dispatch(logout())
            handleClose()
        }
    }
  return (
    <div>
        <>
        <Drawer variant={isSmallScreen?"temporary":"permanent"} onClose={handleClose} open={true} anchor='left' sx={{zIndex:1}}>

            <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'>
                {menu.map((item, i)=><>
                <div onClick={()=>handleNavigate(item)} className='px-5 flex items-center gap-5 cursor-pointer'>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                {i!==menu.length-1 && <Divider/>}
                </>)}
            </div>
        </Drawer>
        </>
    </div>
  )
}

export default AdminSideBar