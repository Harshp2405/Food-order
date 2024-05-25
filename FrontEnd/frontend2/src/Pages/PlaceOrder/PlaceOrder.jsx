import React, { useContext } from 'react'
import './PlaceOrder.css'
import { Storecontext } from '../../Context/Storecontext'
import { useNavigate } from 'react-router-dom'
export const PlaceOrder = () => {

  const { carttotal}= useContext(Storecontext)
const navigate = useNavigate()

  return (
    <>
      <form className="Placeorder">
        <div className="leftplace">
          <h3 className="title">Dilivery info</h3>
          <div className="fields">
            <input required type="text" placeholder='First name'/>
            <input required type="text" placeholder='Last name'/>
          </div>
          <input required type="email" placeholder='Email id'/>
          <input required type="number" placeholder='Phone  number'/>
          <div className="fields">
            <input required type="text" placeholder='House no.'/>
            <input required type="text" placeholder='Street Name'/>
          </div>
            <input required type="text" placeholder='Area'/>
            <input required type="text" placeholder='LandMark'/>
            <input required type="text" placeholder='City name'/>
          <div className="fields">
            <input required type="number" placeholder='Pincode'/>
            <input required type="text" placeholder='State'/>
          </div>
        </div>
        <div className="rightplace">
        <div className="grand-total ">
          <h3>Total</h3>
          <div className='det'>
            <div className="details">
              <p>Subtotal</p>
              <p>{carttotal()}/-</p>
            </div>
            <br/>
            <div className="details">
              <p>Dilivery Charge 12%</p>
              <p>{carttotal()===0?0:parseInt((carttotal()*12)/100)}/-</p>
            </div>
            <br/>
            <div className="details">
              <p>Total</p>
              <p>{carttotal()===0?0:((carttotal()+parseInt((carttotal()*12)/100)))}/-</p>
            </div>
          </div>
            <button className='btn btn-success w-75 mx-5 mt-2'>Payment</button>
            <button className='btn bg-danger-subtle w-75 mx-5 mt-2' onClick={()=>{navigate("/Cart")}} >Change Item</button>
        </div>
        </div>
      </form>
    </>
  )
}
