import React, { useEffect } from 'react'
import axios from 'axios';
import authFetch from './baseaxios/authFetch';

export default function Accounts() {

  useEffect(()=>{


    //let p  = JSON.parse(localStorage.getItem("token"));
    authFetch.get("/accounts").then(y=>{

      console.log(y.data);
    })

  },[])
  return (
    <div>Accounts</div>
  )
}
