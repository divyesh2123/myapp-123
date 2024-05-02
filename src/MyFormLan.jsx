import React, { useContext, useState } from 'react'
import LanContext from './LangContext/LangContext'

export default function MyFormLan() {

  const {lan} =  useContext(LanContext);

  const MyLables = {

    "en" : {

        "firstName" : "First Name",
        "lastName" : "Last Name"

    },

    "hi" : {

        "firstName" : "पहला नाम",
        "lastName": "उपनाम"
    }

  }
  return (
    <div>

        <label> 
            {MyLables[lan].firstName}
        </label>

        <input type='text' placeholder={MyLables[lan].firstName}/>

        <label> 
            {MyLables[lan].lastName}
        </label>

        <input type='text' placeholder={MyLables[lan].lastName}/>

    </div>
  )
}
