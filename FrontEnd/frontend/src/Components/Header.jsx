import React from 'react'
import './Css/Header.css'
import { assetsf } from '../Assets/frontend_assets/assets'
export const Header = () => {
  return (
    <>
    Header
    <div className="img bg-primary">
        <img src={assetsf.banner} alt="" srcset="" height="400" className='himg center-block' />
    </div>
    </>
  )
}
