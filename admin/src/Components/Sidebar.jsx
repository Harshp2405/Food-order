import React from 'react'
import './Css/sidebar.css'
import { assetsa } from '../Assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'
export const Sidebar = () => {
  return (
    <>
      <div className="Sidebarc">
        <div className="sideope">
          <NavLink to='/add' className="sidebarop ">
            <img src={assetsa.add_icon} alt="" /><p className='textp'>Add Item</p>
          </NavLink>
          <NavLink to='/list' className="sidebarop">
            <img src={assetsa.order_icon} alt="" /><p className='textp'>List Item</p>
          </NavLink>
          <NavLink to='/order' className="sidebarop">
            <img src={assetsa.order_icon} alt="" /><p className='textp'>Orders Item</p>
          </NavLink>
          <NavLink to='/user' className="sidebarop">
            <i className='fas fa-user user' ></i><p className='textp'>User List</p>
          </NavLink>
        </div>
      </div>
    </>
  )
}
