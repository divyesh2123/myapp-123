import React from 'react'
import { useRoutes } from 'react-router-dom'
import MyRouteInfo from './MyRouteInfo';

export default function RouteWithHook() {

  const  d = useRoutes(MyRouteInfo());
  return (
    <div>
        {d}
    </div>
  )
}
