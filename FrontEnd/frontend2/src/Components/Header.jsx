import React from 'react'
import './Css/Header.css'
import { assetsf } from '../Assets/frontend_assets/assets'
export const Header = () => {
  return (
    <>
    {/* Header */}
    <div className="img bg-primary">
        {/* <img src={assetsf.homebanner} alt="" srcset="" height="400" className='himg center-block' /> */}
        <div className="banner">
          <div className="content">
          <p>Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. <br/> Accusamus porro perspiciatis praesentium veniam alias sequi.</p>
          <button className='btn btn-default'>Menu</button>
          </div>
        </div>
        
    </div>
    </>
  )
}
