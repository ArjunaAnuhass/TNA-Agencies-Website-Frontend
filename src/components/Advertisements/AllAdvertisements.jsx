import React from 'react'
import AdvertisementCard from './AdvertisementCard'


const advertisement=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

const AllAdvertisements = () => {
  return (

    
    <section className='px-5 lg:px-20'>
        <h1 className='text-2xl font-semibold text-gray-400 py-3'>All Adds</h1>

        <div className='flex flex-wrap items-center justify-around gap-5'>
            {
                advertisement.map((item)=><AdvertisementCard/>)
            }
        </div>
        <section>

        </section>
    </section>
  )
}

export default AllAdvertisements