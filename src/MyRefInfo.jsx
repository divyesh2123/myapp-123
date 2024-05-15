import React, { useRef, useState } from 'react'

export default function MyRefInfo() {

    console.log("this is info");
    const d=     useRef(0);

    const [data,setData]= useState(0);
    const displayInfo = ()=>{

        console.log(d.current.value);
    }

    const handleCounter = (e)=>{

        setData(e.target.value);
    }
  return (
    <div>
        
        <input type='text' ref={d}/>
        <input type='text' name="counter" onChange={handleCounter}/>
        <button onClick={displayInfo}>Display</button>
    </div>
  )
}
