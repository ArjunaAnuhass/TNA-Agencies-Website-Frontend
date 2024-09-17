import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { estimatePricePost } from '../State/EstimatePrice/Action';

export const EstimatePrice = () => {

  const [location, setLocation] = useState();
  const [land_size, setLandSize] = useState();
  const [house_size, setHouseSize] = useState();
  const [beds, setBeds] = useState();
  const [baths, setBaths] = useState();

  const dispatch = useDispatch();

  // const {estimatePrice} = useSelector(store => store)
  const { estimated_price, loading, error } = useSelector((store) => store.estimatePrice);

  // console.log("price from store: ", estimated_price);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !land_size || !house_size || !beds || !baths) {
      alert("Please fill out all fields");
      return;
    }
    dispatch(estimatePricePost(location, land_size, house_size, beds, baths));
  }

  return (
    
    <div className='px-5 lg:px-20'>
        <h1 className='text-2xl font-semibold text-gray-400 py-3'>Estimate the Price</h1>

        <form onSubmit={handleSubmit}>
          <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Location'/>
          <input type='number' value={land_size} onChange={(e) => setLandSize(e.target.value)} placeholder='Land Size'/>
          <input type='number' value={house_size} onChange={(e) => setHouseSize(e.target.value)} placeholder='House Size'/>
          <input type='number' value={beds} onChange={(e) => setBeds(e.target.value)} placeholder='Beds'/>
          <input type='number' value={baths} onChange={(e) => setBaths(e.target.value)} placeholder='Baths'/>
          <button type='submit'>Estimate Price</button>
        </form>

        {/* {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>} */}
        {/* {price && <p className='pt-10'>Estimated Price: {price}</p>} */}
        {estimated_price && <p className='pt-10'>Estimated Price: {estimated_price}</p>}

        
    </div>
  )
}
