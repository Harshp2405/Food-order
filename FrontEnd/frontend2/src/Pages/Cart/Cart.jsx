/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../Context/Storecontext'
import { useNavigate } from 'react-router-dom'
export const Cart = () => {
  const {cartitem , food_list , removetocart , carttotal , deletecart}=useContext(Storecontext)
  const navigate = useNavigate() 
  const imgurl ="http://localhost:2024/images/"
  return (
    <>
    <div className="cart">
      <div className="cartitems">
        <div className="cartitemtitle">
          <p>Item</p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
          <p>Delete</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item , index)=>{
            if(cartitem[item._id]>0){
              return(
                <><div className='cartitemtitle cart-item-items' key={index}>
                  <img src={imgurl+item.image} alt=''/>
                  <p>{item.Foodname}</p>
                  <p>{item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>{cartitem[item._id]*item.price}</p>
                  <p onClick={()=>{removetocart(item._id)}} className='del'><i className='fas fa-circle-minus'></i></p>
                  <p onClick={()=>{deletecart(item._id)}} className='del'><i className='fas fa-trash-can'></i> </p>
                </div>
                <hr />
                </>
              )
            }
          })
        }
      </div>
      <div className="bottom">
        <div className="carttotal">
          <div>
            <div className="carttotaldetail">
              <p>Subtotal</p>
              <p>{carttotal()===0?0:carttotal()}</p>
            </div>
            <hr />
            <div className="carttotaldetail">
              <p>Dilivery charge </p>
              <p>{carttotal()=== 0?0:100}rs</p>
            </div>
            <hr />
            <div className="carttotaldetail">
              <p>total</p>
              <p>{carttotal()===0?0:carttotal()+100}</p>
            </div>
          </div>
            <button className='btn bg-primary w-75 mx-auto' onClick={()=>{navigate("/PlaceOrder")}} >Checkout</button>
            <button className='btn bg-danger w-75 mx-auto' onClick={()=>{navigate("/")}} >Menu</button>
        </div>
      </div>
    </div>
    </>
  )
}