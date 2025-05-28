import React from 'react'
import Aside from './aside/Aside'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex h-screen">
  
        <div className="w-1/5 sticky top-0 h-screen overflow-hidden">
            <Aside />
        </div>

        <div className="w-4/5 h-screen overflow-y-auto">
            <Outlet />
        </div>
</div>
  )
}

export default Home
