import React, { useState } from 'react'
import { assetsf } from '../Assets/frontend_assets/assets'
import { assetsa } from '../Assets/admin_assets/assets'
import './Css/Navbar.css'
import { Link, Outlet } from 'react-router-dom'
export const Navbar = () => {
    const [menu , setMenu] = useState("Home")
    return (
        <>
            <nav class="navbar bg-orange-600">
                <div class="container">
                    <img src={assetsa.logo} alt="" width="70" height="70" />
                    <div className='navmenu'>
                        <ul className='navul'>
                            <li id='navli' onClick={()=>setMenu("Home")} className={[menu === "Home"?"active":""]}>Home</li>
                            <Link to='/'>Home</Link>
                            <Link to='/Cart'>Home</Link>
                            <Link to='/PlaceOrder'>Home</Link>
                            <li id='navli' onClick={()=>setMenu("Menu")} className={[menu === "Menu"?"active":""]}>Menu</li>
                            <li id='navli' onClick={()=>setMenu("ContactUs")} className={[menu === "ContactUs"?"active":""]}>ContactUs</li>
                            <li id='navli' onClick={()=>setMenu("AboutUs")} className={[menu === "AboutUs"?"active":""]}>AboutUs</li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <div className="cart">
                            <img  className='butn' src={assetsf.basket_icon} alt="" />
                            <div className="alertcart"></div>
                        </div>
                        <button className='butn btn btn-dark' >Sign in</button>
                    </div>
                </div>
            </nav>
        <Outlet></Outlet>
        </>
    )
}
