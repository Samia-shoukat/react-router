import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'; // ✅ Make sure this is added
import Footer from './Footer'; // Same for footer if used

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout