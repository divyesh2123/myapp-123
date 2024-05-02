import React from 'react'
import { useFetch } from './useFetch'

export default function Test() {

   const {data,loading} = useFetch("https://jsonplaceholder.typicode.com/users");

   console.log(data);
  return (
    <div>Test</div>
  )
}
