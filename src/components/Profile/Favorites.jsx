import React from 'react'
import AdvertisementCard from '../Advertisements/AdvertisementCard'
import { useSelector } from 'react-redux'
import { store } from '../State/store'

export const Favorites = ({item}) => {

  const {auth} = useSelector(store => store)

  return (
    <div>
        <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>

        <div className='flex flex-wrap gap-4 justify-center'>
            {auth.favorites.map((item)=><AdvertisementCard item={item}/>)}
        </div>
    </div>
  )
}

export default Favorites