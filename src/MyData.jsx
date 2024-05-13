import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRockets } from './slice/rocketSlice';

export default function MyData() {
   const data = useSelector(y=>y.rocket);

   const d = useDispatch();
   
   console.log(data);

   useEffect(()=>{

    d(fetchRockets())

   },[])
  return (
    <div>MyData</div>
  )
}
