import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormWithAPI(props) {

    const {open,handleClose,d} = props;

    

    
    const [form,setform]= useState({
        firstname : "",
        lastname : "",

    })

    console.log(form);
    useEffect(()=>{

        if(d)
        {
           
            setform({...d,firstname:d.firstname,lastname: d.lastname});
        }

        console.log(d);

    },[d])

    const handleSave = ()=>{

    }

    const handleChange = (e)=>{

        setform({...form,[e.target.name]: e.target.value});

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
        id="firstname"
        name="firstname"
        label="firstname"
        type="text"
        fullWidth
        value={form?.firstname}
        variant="standard"
        onChange={handleChange}
      />
       <TextField
        autoFocus
        required
        margin="dense"
        id="lastname"
        name="lastname"
        label="last name"
        type="text"
        value={form?.lastname}
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
