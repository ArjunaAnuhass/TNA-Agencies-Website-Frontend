import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminRoute } from './AdminRoute'
import { CustomerRouters } from './CustomerRouters'

const Routers = () => {
  return (
    <Routes>
        <Route path="/admin/advertisement/*" element={<AdminRoute/>}/>
        <Route path="/*" element={<CustomerRouters/>}/>
    </Routes>
  )
}

export default Routers;