import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import AdvertisementDetails from '../components/Advertisements/AdvertisementDetails'
import Profile from '../components/Profile/Profile'
import { Auth } from '../components/Auth/Auth'
import AllAdvertisements from '../components/Advertisements/AllAdvertisements'
import { EstimatePrice } from '../components/Estimate-Price/EstimatePrice'

export const CustomerRouters = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='advertisements/:title/:id' element={<AdvertisementDetails/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            <Route path='/all-adds' element={<AllAdvertisements/>}/>
            <Route path='/estimate-price' element={<EstimatePrice/>}/>
        </Routes>
        <Auth/>
    </div>
  )
}
