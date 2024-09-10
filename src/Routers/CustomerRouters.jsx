import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import AdvertisementDetails from '../components/Advertisements/AdvertisementDetails'
import Profile from '../components/Profile/Profile'
import { Auth } from '../components/Auth/Auth'

export const CustomerRouters = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/:city/:title/:id' element={<AdvertisementDetails/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
        </Routes>
        <Auth/>
    </div>
  )
}
