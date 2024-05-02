import React, { useContext } from 'react'
import LanContext from './LangContext/LangContext'

export default function HeaderContext() {

  const {setlan} =  useContext(LanContext);
  
  const handleChange = (e)=>{
    setlan(e.target.value);
  }
  
  return (
    <div>
        <select onChange={handleChange}>

            <option value="en">English</option>
            <option value="hi">Hindi</option>
        </select>

    </div>
  )
}
