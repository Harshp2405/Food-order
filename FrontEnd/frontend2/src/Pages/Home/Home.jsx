import React, { useState } from 'react'
import './Home.css'
import { Header } from '../../Components/Header'
import { Outlet } from 'react-router-dom'
import { Expmenu } from '../../Components/Expmenu'
import { Fooddisplay } from '../../Components/Fooddisplay'
export const Home = () => {
  const [categeries , setcategeries] = useState("All");
  return (
    <>
      <Header/>
      <Expmenu categeries={categeries} setcategeries={setcategeries}/>
      <Fooddisplay categeries={categeries}/>
      <Outlet/>
    </>
  )
}