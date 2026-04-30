import React from 'react'
import Navbar from '../Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footerpage from '../Footer/Footerpage'

const MainLayout = () => {
  return (
    <div>
       <Navbar/>
       <main>
        <Outlet/>
       </main>
       <Footerpage/>


    </div>
  )
}

export default MainLayout