import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LanContext from './LangContext/LangContext'
import HeaderContext from './HeaderContext'
import MyFormLan from './MyFormLan'
import ApplicationRoutes from '../ApplicationRoutes'
import ApplicationRoute from './ApplicationRoute'

function App() {
  const [lan, setlan] = useState('en')

  return (
    <>
    <LanContext.Provider  value={{lan,setlan}}>

      
        <HeaderContext/>

          <ApplicationRoute/>
     
    </LanContext.Provider>
       
    </>
  )
}

export default App
