import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { Counter } from './Counter.jsx'
import { DisplayData } from './DisplayData.jsx'
import { DisplayDataWithAPI } from './DisplayDataWithAPI.jsx'
import BirthDateDisplay from './BirthDateDisplay.jsx'
import APIData from './APIData.jsx'
import { Login } from './Login.jsx'
import { DisplayDataWithAxios } from './DisplayDataWithAxios.jsx'
import { LoginWithFormik } from './LoginWithFormik.jsx'
import { MyForm } from './MyForm.jsx'
import { MyFormWithoutYup } from './MyFormWithoutYup.jsx'
import { FormikWithMUI } from './FormikWithMUI.jsx'
import ExampleWithSelect from './ExampleWithSelect.jsx'
import { EmployeeDisplay } from './EmployeeDisplay.jsx'
import DisplayDataWithAPIProps from './DisplayDataWithAPIProps.jsx'
import {BrowserRouter} from 'react-router-dom'
import ApplicationRoute from './ApplicationRoute.jsx'
import Product from './Product.jsx'
import Parent from './Parent.jsx'
import ApplicationRoutes from '../ApplicationRoutes.jsx'
import HeaderFile from './HeaderFile.jsx'
import ShowMoreTextToggle from '../ShowMoreTextToggle.jsx'
import MemoExample from '../MemoExample.jsx'
import SimpleExampleFromClass from '../SimpleExampleFromClass.jsx'
import Test from './Test.jsx'
import CounterRedux from './CounterRedux.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import UserRedux from './UserRedux.jsx'
import UserWithAsync from './UserWithAsync.jsx'
import UserRequestSaga from './UserRequestSaga.jsx'
import d from './nstore/nstore.js';
import CounterNewExample from './CounterNewExample.jsx'
import MyData from './MyData.jsx'
import MySagaWithT from './MySagaWithT.jsx'
import { ErrorBoundary } from "react-error-boundary";
import BuggyCounter from './BuggyCounter.jsx'
import MyRefInfo from './MyRefInfo.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    <Provider store={d
      
    }>
{/* 
<MySagaWithT> 

  This is the information
</MySagaWithT> */}

<ErrorBoundary fallback={<div>Something went wrong</div>}>

  <BuggyCounter/>
  <MyRefInfo/>

</ErrorBoundary>


</Provider>
      
    
    </BrowserRouter>
  
  </React.StrictMode>,
)
