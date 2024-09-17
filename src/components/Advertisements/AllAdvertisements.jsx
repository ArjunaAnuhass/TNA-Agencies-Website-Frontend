import React, { useEffect } from 'react'
import AdvertisementCard from './AdvertisementCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAdvertisement } from '../State/Advertisement/Action'


const advertisements=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

const AllAdvertisements = () => {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {advertisement} = useSelector(store => store)

  console.log("advertisement", advertisement);

  useEffect(()=>{
    dispatch(getAllAdvertisement(jwt))
  }, [])

  return (

    
    <section className='px-5 lg:px-20'>
        <h1 className='text-2xl font-semibold text-gray-400 py-3'>All Adds</h1>

        <div className='flex flex-wrap items-center justify-around gap-5'>
            {
                advertisement.advertisements.map((item)=><AdvertisementCard item = {item}/>)
            }
        </div>
        <section>

        </section>
    </section>
  )
}

export default AllAdvertisements