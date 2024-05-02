import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { FormForEmployee } from './FormForEmployee';
import DisplayDataWithGrid from './DisplayDataWithGrid';
export default function Parent() {

  const [data,SetData]= useState([]);
   const [open,setOpen] = useState(false);

   if(index < 0)
   {
   useEffect(()=>{

   })

   const [index,setIndex]= useState(-1);
  
  
  }

    const handleClickOpen = () => {
        setOpen(true);
      };

      const deleteEmp = (index)=>{

        let p = [...data];

        p.splice(index,1);

        SetData(p);

      }

      const editEmp = (index)=>{

        setOpen(true);
        setIndex(index);

      }
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <>

<Button variant="outlined" onClick={handleClickOpen} >
        Open form dialog
      </Button>

      <FormForEmployee open={open}   handleClose={handleClose} data={data} SetData={SetData} index={index} setIndex={setIndex}/>
      <DisplayDataWithGrid data={data} deleteEmp={deleteEmp} editEmp={editEmp}/>
    </>
  )
}
