import React from 'react'
import { Navbar } from './Components/Navbar'
import { assetsa } from './Assets/admin_assets/assets'
import { assetsf } from './Assets/frontend_assets/assets'
import {Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Cart } from './Pages/Cart/Cart'
import { PlaceOrder } from './Pages/PlaceOrder/PlaceOrder'
import { Header } from './Components/Header'

export const App = () => {
  
  return (
    <>
      <Navbar /><Outlet></Outlet>
      App
    </>
  )
}
