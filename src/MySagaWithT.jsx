import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserRequest } from './slice/userSlice';

export default function MySagaWithT() {

    const d = useSelector(y=>y.user);

    console.log(d);

    const p = useDispatch();
    
    useEffect(()=>{

        p(UserRequest())
    },[])
  return (
    <div>MySagaWithT</div>
  )
}
