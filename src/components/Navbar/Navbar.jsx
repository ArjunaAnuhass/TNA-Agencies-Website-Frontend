import { Avatar, Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css"
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();


  return (
    <div className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#194759] lg:px-20 flex justify-between'>

      {/* <div className='flex items-center space-x-4'> */}
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
          <li className='logo font-semibold text-gray-300 text-2xl'>
            TNA-Agencies
          </li>

        </div>

      {/* </div> */}

      <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="hidden md:flex space-x-10">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/about" className="text-white hover:text-gray-200">About</a>
          <a href="/all-ads" className="text-white hover:text-gray-200">All Ads</a>
          <a href="/estimate" className="text-white hover:text-gray-200">Estimate the Property</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/about" className="text-white hover:text-gray-200">About</a>
          <a href="/all-ads" className="text-white hover:text-gray-200">All Ads</a>
          <a href="/estimate" className="text-white hover:text-gray-200">Estimate the Property</a>
        </div>
      )}
    </nav>

      <div className='flex items-center space-x-2 lg:space-x-10'>

        <div className=''>
          <IconButton>
            <SearchIcon sx={{fontSize:"1.5rem", color:"white"}}/>
          </IconButton>
        </div>

        <div className=''>
          {false?<Avatar sx={{bgcolor:"white"}}>A</Avatar>:
          <IconButton onClick={()=>navigate("/account/login")}>
            <Person/>
          </IconButton>}
        </div>

      </div>

    </div>
  )
}
