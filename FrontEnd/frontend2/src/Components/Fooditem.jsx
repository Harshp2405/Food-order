import React, { useContext, useState } from 'react'
import './Css/Fooditem.css'
import { assetsf } from '../Assets/frontend_assets/assets'
import { Storecontext } from '../Context/Storecontext'
export const Fooditem = ({ id, name, price, desc, image }) => {
const { cart, setcart } = useContext(Storecontext)
    const { cartitem, addtocart, removetocart } = useContext(Storecontext);
    const imgurl = "http://localhost:2024/images/"
    return (
        <>
            <div className="fooditem">
                <img className='foodimg' src={imgurl + image} alt="" />
                <div className="info">
                    <p className='name'>{name}</p>
                    <p className='desc'>{desc}</p>
                    <div className="price-count">
                        <p className="price">{price}</p>
                        {
                            !cartitem[id]
                                ? <img className='add' onClick={
                                    ()=>{addtocart(id)}
                                } src={assetsf.add_icon_white} alt='' />
                                : <div className='counter'>
                                    <img src={assetsf.remove_icon_red} alt="" onClick={() => {
                                        removetocart(id)
                                    }} />
                                    <p>{cartitem[id]}</p>
                                    <img src={assetsf.add_icon_green} alt="" onClick={() => {
                                        addtocart(id)
                                    }} />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
