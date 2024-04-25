import React, { useState } from 'react'
import DisplayWithAPI from './DisplayWithAPI'
import FormWithAPI from './FormWithAPI';

export const CRUDAPI = () => {

  const [d,setd]= useState({});
  const [open,setopen]= useState(false);
  

  const handleClose = ()=>{

    setopen(false);
  }

  const handleOpen= (data)=>{

    setopen(true);

    console.log(data);
    setd(data);
  }

  return (
    <div>
        
        <DisplayWithAPI handleOpen={handleOpen} open={open}/>
        <FormWithAPI handleClose={handleClose} open={open} d={d}/>


    </div>
  )
}
