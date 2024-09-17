import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../AdminComponents/Admin/Admin'

export const AdminRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/*' element={<Admin/>}/>
        </Routes>
    </div>
  )
}

export default AdminRoute;
