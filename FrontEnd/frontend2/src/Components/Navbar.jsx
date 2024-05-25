import React, { useContext, useState } from 'react'
import { assetsf } from '../Assets/frontend_assets/assets'
import { assetsa } from '../Assets/admin_assets/assets'
import './Css/Navbar.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Storecontext } from '../Context/Storecontext'
import { Loginpopup } from './Loginpopup'
export const Navbar = ({setshowlogin}) => {
    const navigate = useNavigate()
    const [menu , setMenu] = useState("Home")
    const {carttotal , token ,settoken} = useContext(Storecontext) 

    const logout = ()=>{
        localStorage.removeItem("token")
        settoken("")
        navigate("/")
    }
    return (
        <>
            <nav className="navbar bg-green-300">
                <div className="container">
                    <img src={assetsa.logo} onClick={()=>{navigate("/")}} alt="" width="70" height="70" />
                    <div className='navmenu'>
                        <ul className='navul'>
                        <li id='navli' onClick={()=>{setMenu("Home")}} className={[menu === "Home"?"active":""]}><Link  className='Link' to='/'>Home</Link></li>
                            {/* <Link className='Link'  to='/Cart'>Cart</Link>
                            <Link className='Link'  to='/PlaceOrder'>PlaceOrder</Link> */}

                            <li id='navli' onClick={()=>{setMenu("Menu")}} className={[menu === "Menu"?"active":""]}><a href='#exp' className='a'>Menu</a></li>
                            <li id='navli' onClick={()=>{setMenu("ContactUs")}} className={[menu === "ContactUs"?"active":""]}><a href='#footer' className='a'>ContactUs</a></li>
                            <li id='navli' onClick={()=>{setMenu("AboutUs")}} className={[menu === "AboutUs"?"active":""]}>AboutUs</li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <div className="cart mx-5 mb-3">
                            <img  className='butn' onClick={()=>{navigate('/Cart')}} src={assetsf.basket_icon} alt="" />
                            <div className={carttotal===0?"":"alertcart"}></div>
                        </div>
                        {!token?<button className='butn btn btn-dark' onClick={()=>{setshowlogin(true)}} >Sign in</button>:<div className='prof' >
                            <img src={assetsf.profile_icon} alt="" />
                            <ul className="navprof">
                                <li><img src={assetsf.bag_icon} alt="" /><p>Order</p></li>
                                <br/>
                                <li onClick={logout}><img src={assetsf.logout_icon} alt="" /><p>Logout</p></li>
                            </ul>
                        </div>}
                        
                    </div>
                </div>
            </nav>
        <Outlet></Outlet>
        </>
    )
}
