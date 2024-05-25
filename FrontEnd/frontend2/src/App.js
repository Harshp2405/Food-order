import React, { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { assetsa } from './Assets/admin_assets/assets'
import { assetsf } from './Assets/frontend_assets/assets'
import {Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Cart } from './Pages/Cart/Cart'
import { PlaceOrder } from './Pages/PlaceOrder/PlaceOrder'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Loginpopup } from './Components/Loginpopup'

export const App = () => {
  const [showlogin, setshowlogin] = useState(false)
  return (
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
          <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  )
}
