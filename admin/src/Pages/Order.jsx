import React, { useEffect, useState } from 'react'
import './Css/Order.css'
import axios from 'axios'
import { assetsa } from '../Assets/admin_assets/assets'
export const Order = () => {
  const [orders, setdata] = useState([])

  const statushandle = async (e,orderid)=>{
    const res = await axios.post("http://localhost:2024/api/order/status",{
      orderid,status:e.target.value
    })
    console.log(res)
if(res.data.sucess){
  await fetchapi()
}
    console.log(e,orderid)
  }


  const fetchapi = async () => {
    const res = await axios.get("http://localhost:2024/api/order/adminorders")
    if (res.data.sucess) {
      setdata(res.data.data)
      console.log(res.data.data)
    } else {
      console.log("Error")
      alert("error to fetch")
    }
  }
  useEffect(() => {
    fetchapi()
  }, [])

  return (
    <>
      <div className="orders">
        <h2>Orders</h2>
        <div className="olist">
          {
            orders.map((order, index) => {
              return (
              <div>
                <div key={index} className="oitem">
                  <img src={assetsa.order_icon} alt="" />
                  <div className="">
                    <p className="fooditem">
                    Items: 
                      {
                        order.items.map((item , index)=>{
                          if(index === order.items.length-1){
                            return item.Foodname+"-->"+item.quantity+" "
                          }else{
                            return item.Foodname+"-->"+item.quantity+","
                          }
                        })
                      }
                    </p>
                    <p className='itemso'>
                      Items : { order.items.length } &nbsp;&nbsp;&nbsp;
                      Amount :{order.amount}/-
                    </p>
                    <p className='oiname'>
                      {
                        "Name: "+order.address.Firstname + " "+ order.address.Lastname
                      }
                    </p>
                    <p className="address">
                      {
                        "Address: "+order.address.Houseno+" "+order.address.Streetname+" "+order.address.Area+" "+order.address.LandMark+" "+order.address.Cityname+" "+order.address.Pincode+" "+order.address.State
                      }
                    </p>
                    <p className="contact">
                    Contact Number: 
                      {
                        order.address.Phonenumber
                      }
                    </p>
                    <select onChange={(e)=>statushandle(e ,order._id)} value={order.status} name="" id="sel">
                      <option value="Under Process">Under Process</option>
                      <option value="On the Way">On the Way</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>)
            })
          }
        </div>
      </div>
    </>
  )
}
