import React, { useState } from 'react'
import MyChild from './MyChild';

export default function MyExample() {
    const [lan,setlan] = useState('en');
  return (
    <div>
        <MyChild/>
        
    </div>
  )
}
