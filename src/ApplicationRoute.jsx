import React from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import Accounts from './Accounts'
import { Login } from './Login'
import LoginPage from './LoginPage'
import Parent from './Parent'
import {CRUDAPI} from './CRUDAPI';
import MemoExample from '../MemoExample'
import MyFormLan from './MyFormLan'
import MyOperationUsingReducer from './MyOperationUsingReducer'
export default function ApplicationRoute() {
  return (
    <>
    <Link  to="/account">Navigate</Link>
    <Routes>
        <Route path='/p' element={<MemoExample></MemoExample>}/>
        <Route path='/account' element={<Accounts></Accounts>}/>
        <Route path='/' element={<LoginPage></LoginPage>}/>
        <Route path='/crud' element={<Parent></Parent>}/>
        <Route path='/crudwithapi' element={<CRUDAPI></CRUDAPI>}/>
        <Route path='/lan' element={<MyFormLan/>} />
        <Route path='/reducer' element={<MyOperationUsingReducer/>}/>
    </Routes>
    </>
  )
}
