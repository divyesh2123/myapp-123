import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './slice/counterslice';

export default function CounterNewExample() {

   const counter = useSelector(y=>y.counter);

  const d =  useDispatch();

  const iaminc = ()=>{

    d(inc())
  }

  const iamdec = ()=>{

    d(dec())
  }
  return (
    <div>{counter.count}
    
        <button onClick={iaminc}>+</button>
        <button onClick={iamdec}>-</button>
    </div>
  )
}
