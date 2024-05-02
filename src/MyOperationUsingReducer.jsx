import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

export default function MyOperationUsingReducer() {


    const manageState = (state,{type,payLoad})=>{

        switch(type)
        {
            case "ADD":
                let d= [...state];
                d.push(payLoad);
                return d;
            default :

            return state;
        }

    }
 const [data,dis]  =  useReducer(manageState,[])
 const [form,setform] = useState({
    firstName : "",
    lastName : ""
 })

 const handleChange = (e)=>{

    setform({...form,[e.target.name]: e.target.value})

 }


 const handleSave = ()=>{

    dis({type:"ADD123",payLoad : form})

 }

 console.log(data);
  return (
    <>
        
        <input type='text' name='firstName' onChange={handleChange}/>
        <input type='text' name='lastName'  onChange={handleChange}/>
        <input type='button' value="save" onClick={handleSave}/>
    
            {

                data?.map((value)=>{

                    return (<>{value.firstName}</>)
                })

            }

    
    </>
  )
}
