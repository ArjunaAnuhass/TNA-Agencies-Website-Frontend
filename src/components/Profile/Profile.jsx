import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'
import Favorites from './Favorites'
import PostAdvertisement from '../Advertisements/PostAdvertisement'
import AddFeedback from './AddFeedback'
import AllFeedback from './AllFeedback'

const Profile = () => {

    const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation open={openSideBar}/>

        </div>

        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element={<UserProfile/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/post-advertisement' element={<PostAdvertisement/>}/>
            <Route path='/add-feedback' element={<AddFeedback/>}/>
            <Route path='/all-feedback' element={<AllFeedback/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default Profile