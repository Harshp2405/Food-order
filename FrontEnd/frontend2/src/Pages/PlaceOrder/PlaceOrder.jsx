import React, { useContext } from 'react'
import './PlaceOrder.css'
import { Storecontext } from '../../Context/Storecontext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export const PlaceOrder = () => {

  const { carttotal , token,food_list,cartitem}= useContext(Storecontext)

  const[data , setdata]=useState({
    Firstname:"",
    Lastname:"",
    Emailid:"",
    Phonenumber:"",
    Houseno:"",
    Streetname:"",
    Area:"",
    LandMark:"",
    Cityname:"",
    Pincode:"",
    State:"",
  })

const [paym, setpaym] = useState({paym:"online"})
const onpay =(e)=>{
  const name = e.target.name
  const value = e.target.value
  setpaym(paym=>({...paym,[name]:value}))
}

  const onchange =(e)=>{
    const name = e.target.name
    const value = e.target.value
    setdata(data=>({...data,[name]:value}))
  }

  const placeorder = async (e)=>{
    e.preventDefault()
    let orderdata = []
    food_list.map((item)=>{
      if(cartitem[item._id]>0){
        let iteminfo = item
        iteminfo["quantity"] = cartitem[item._id]
        orderdata.push(iteminfo)
      }
      return orderdata
    })
    console.log(orderdata)
    let od = {
      address:data,
      items:orderdata,
      amount:carttotal()+100,
      paym:paym
    }
    
    if(paym.paym === "online"){
      alert("online payment")
      let res = await axios.post("http://localhost:2024/api/order/place",od,{headers:{token}})
      console.log(res.data) 
      if(res.data.sucess){
        const {session} = res.data;
        window.open(session,'_blank')
      }else{
        alert("Something went wrong")
        console.log(e)
      }
    }else{
      alert("offline payment")
      let res = await axios.post("http://localhost:2024/api/order/offline",od,{headers:{token}})
      window.open("/myorders",'_self')
      console.log(res.data) 
      console.log(od)
    }
  }


  const navigate = useNavigate()

  useEffect(() => {
    console.log(data)
    console.log(paym)
    if(!token){
      navigate("/Cart")
    }
    else if(carttotal()===0){
      alert("Add product to cart")
      navigate("/Cart")
    }
  }, [])


  return (
    <>
      <form onSubmit={placeorder} className="Placeorder">
        <div className="leftplace">

          <h3 className="title">Dilivery info</h3>
          <div className="fields">
            <input name='Firstname' onChange={onchange} value={data.Firstname} required type="text" placeholder='First name'/>
            <input name='Lastname' onChange={onchange} value={data.Lastname} required type="text" placeholder='Last name'/>
          </div>
          <input name='Emailid' onChange={onchange} value={data.Emailid} required type="email" placeholder='Email id'/>
          <input name='Phonenumber' onChange={onchange} value={data.Phonenumber} required type="number" placeholder='Phone  number'/>
          <div className="fields">
            <input name='Houseno' onChange={onchange} value={data.Houseno} required type="text" placeholder='House no.'/>
            <input name='Streetname' onChange={onchange} value={data.Streetname} required type="text" placeholder='Street Name'/>
          </div>
            <input name='Area' onChange={onchange} value={data.Area} required type="text" placeholder='Area'/>
            <input name='LandMark' onChange={onchange} value={data.LandMark} required type="text" placeholder='LandMark'/>
            <input name='Cityname' onChange={onchange} value={data.Cityname} required type="text" placeholder='City name'/>
          <div className="fields">
            <input name='Pincode' onChange={onchange} value={data.Pincode} required type="number" placeholder='Pincode'/>
            <input name='State' onChange={onchange} value={data.State} required type="text" placeholder='State'/>
          </div>

        </div>
        <div className="rightplace">
        <div className="grand-total ">
        <div className="paydiv">
        <p className='paymenttype'>Choose Payment type</p>
          <select id='sel' onChange={onpay}  name="paym" >
                <option id='op' value="online">Online</option>
                <option id='op' value="COD">Cash on delivery</option>
          </select><br /><br />
        </div>
        <br />
          <h3>Total</h3>
          <div className='det'>
            <div className="details">
              <p>Subtotal</p>
              <p>{carttotal()}/-</p>
            </div>
            <br/>
            <div className="details">
              <p>Dilivery Charge </p>
              <p>100/-</p>
            </div>
            <br/>
            <div className="details">
              <p>Total</p>
              <p>{carttotal()===0?0:((carttotal()+100))}/-</p>
            </div>
          </div>
          {
            paym.paym === "online"?<button className='btn btn-success w-75 mx-5 mt-2' type='submit' >Pay Online</button>:<button className='btn btn-success w-75 mx-5 mt-2' type='submit' >Pay on delivery</button>
          }
            
            <button className='btn bg-danger-subtle w-75 mx-5 mt-2' onClick={()=>{navigate("/Cart")}} >Change Item</button>
        </div>
        </div>
      </form>
    </>
  )
}
