import React from 'react'
import './Home.css'
import { Header } from '../../Components/Header'
import { Outlet } from 'react-router-dom'
export const Home = () => {
  return (
    <><Outlet/>
      <Header/>
    </>
  )
}