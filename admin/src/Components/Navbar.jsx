import React from 'react'
import './Css/navbar.css'
import { assetsa } from '../Assets/admin_assets/assets'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className="navbarc">
            <img onClick={()=>{navigate('/')}} className='logo1' height="90" width="80" src={assetsa.logo} alt=""></img>
            <img src={assetsa.admin} className='prof' height="50" width="40" alt=""></img>
        </div>
    </>
  )
}
