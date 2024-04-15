import React from 'react'
import {Routes,Route}  from 'react-router-dom'
import Home from './Home';
import AboutUS from './AboutUS';
import ContactUS from './ContactUS';
export default function ApplicationRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/aboutUs' element={<AboutUS></AboutUS>}/>
        <Route path='/contactUs' element={<ContactUS></ContactUS>}/>
    </Routes>
  )
}
