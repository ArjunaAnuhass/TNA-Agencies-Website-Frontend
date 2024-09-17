import React from 'react'
import AdminSideBar from './AdminSideBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard  from '../Dashboard/Dashboard'
import DistrictCategory from '../Category/DistrictCategory';
import UpdateAdvertisement from '../Dashboard/UpdateAdvertisement';
import AdminFeedback from '../Feedback/AdminFeedback';

export const Admin = () => {

  const handleClose = () => {

  }
  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
          <AdminSideBar handleClose={handleClose}/>
        </div>

        <div className='lg:w-[80%]'>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/category' element={<DistrictCategory/>}/>
            <Route path='/admin/advertisement/update-advertisement/:id' element={<UpdateAdvertisement/>}/>
            <Route path='/admin-feedback' element={<AdminFeedback/>}/>
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default Admin;
