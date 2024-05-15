import React, { useState } from 'react'

export default function BuggyCounter() {

    const [counter,setCounter]= useState(0);

    const dataInfo= ()=>{

        setCounter(counter+1);

    }

    if(counter == 3)
        {
            throw Error("Error From Buggy Counter");
        }
  return (
    <div>{counter}
    <button onClick={dataInfo}>+</button>
    </div>
  )
}
