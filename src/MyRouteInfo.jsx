import React from 'react'
import Home from '../Home'
import Product from './Product'

export default function MyRouteInfo() {

    let routes = [
        {
            path: "/",
            element: <Home />,
            role: "admin"
        },
        {
            path: "/prdouct",
            element: <Product/>,
            role : "RT"
        }

    ]
  return  routes.filter((v)=>{
    return v.role = JSON.parse(localStorage.getItem("token")).type
  });
}
