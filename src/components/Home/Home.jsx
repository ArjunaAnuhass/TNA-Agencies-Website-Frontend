import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className=''>
        <section className='banner z-50 relative flex flex-col justify-center items-center'>

            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>TNA Agencies</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Home is where your story begins</p>
            </div>

            <div className='cover absolute right-0 left-0 top-0'>

            </div>

            <div className='fadout'></div>
        </section>

    </div>
  )
}

export default Home