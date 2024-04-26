import React, { useState } from 'react'
import DisplayWithAPI from './DisplayWithAPI'
import FormWithAPI from './FormWithAPI';
import { Button } from '@mui/material';

export const CRUDAPI = () => {

  const [d,setd]= useState(null);
  const [open,setopen]= useState(false);
  

  const handleClose = ()=>{

    setd(null);

    setopen(false);
  }

  const handleOpen= (data)=>{

    setopen(true);

    console.log(data);

  
    setd(data);
  }

  const handleOpenForAdd= ()=>{

    setopen(true);
  }
  return (
    <div>
        
        <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={handleOpenForAdd}
            >
              Add New Item
            </Button>

        <DisplayWithAPI handleOpen={handleOpen} open={open}/>
        <FormWithAPI handleClose={handleClose} open={open} d={d}/>


    </div>
  )
}
