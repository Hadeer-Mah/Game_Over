import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx';


export default function MainLayout({userData, logout}) {
  return (
    <>
    <Navbar userData={userData} logout={logout}/>
    <div className="container">
    <Outlet></Outlet>
    </div>
    
    </>
  )
}
