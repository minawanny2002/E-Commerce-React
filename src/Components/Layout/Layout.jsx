import React from 'react'
import { Outlet } from 'react-router-dom'
import  Navbar  from './../Navbar/Navbar'
import  Error  from './../Error/Error'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout