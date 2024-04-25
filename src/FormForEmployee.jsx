import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export const FormForEmployee = (props) => {

  const {open,handleClose,data,SetData,index,setIndex} = props;
  const [form,setform]= useState({
    firstName: "",
    lastName :"",
    id:0

  });

  useEffect(()=>{

    if(index >=0)
    {
      setform(data[index])
    }
    else
    {
      setform({
        firstName:"",
        lastName : "",
        id:0
      })
    }

  },[index,open])

  const handleChange = (e)=>{

    setform({...form,[e.target.name] : e.target.value});
  }

  const handleSave = ()=>{

    
    console.log(form);
    let p =[...data];

    if(index<0)
    {
    p.push({...form,id: p.length});

    }
    else
    {
      p[index]= form;
    }
    
    setIndex(-1);
    SetData(p);
    handleClose();
  }

   
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    PaperProps={{
      component: 'form',
      onSubmit: (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const email = formJson.email;
        console.log(email);
        handleClose();
      },
    }}
  >
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        required
        margin="dense"
        id="firstName"
        name="firstName"
        label="firstName"
        type="text"
        fullWidth
        value={form.firstName}
        variant="standard"
        onChange={handleChange}
      />
       <TextField
        autoFocus
        required
        margin="dense"
        id="lastName"
        name="lastName"
        label="last Name"
        type="text"
        value={form.lastName}
        fullWidth
        variant="standard"
        onChange={handleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button type="button" onClick={handleSave}>Subscribe</Button>
    </DialogActions>
  </Dialog>
  )
}
