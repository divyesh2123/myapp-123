import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, Incre } from './action/counteraction';

export default function CounterRedux() {

   const d = useSelector(y=>y);
   const p = useDispatch();

   const incer = ()=>{

    p(Incre())
   }

   const dec = ()=>{

    p(DEC());
   }

  return (
    <div>{d}
    
        <button onClick={incer}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
