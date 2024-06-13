import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import './Myorder.css'
import { Storecontext } from '../../Context/Storecontext'
import { assetsf } from '../../Assets/frontend_assets/assets'
export const Myorder = () => {

    const [data, setdata] = useState([])
    const {token} = useContext(Storecontext)


    const fetchorder = async ()=>{
        try {
        const res = await axios.post("http://localhost:2024/api/order/userorder",{},{headers:{token}})
        setdata(res.data.message)
        console.log(res.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(token){
            fetchorder()
        }
    },[token])
  return (
    <>
    <div className="myorder">
        <h1>My orders</h1>
        <div className="cont">
            {data.map((order , index)=>{
                return(<>
                    <div className="myorder2" key={index}>
                        <img src={assetsf.parcel_icon} alt="" />
                        <p>{order.items.map((item , index)=>{
                            if(index=== order.items.length-1){
                                return item.Foodname+" --> "+item.quantity
                            }else{
                                return item.Foodname+" --> "+item.quantity+", "
                            }
                        })}</p>
                        <p className='tamo'>{order.amount}/-</p>
                        <p>total Items  {order.items.length} </p>
                        <p> <span>&#x25aa;</span> {order.status} </p>
                        <button className='btn btn-dark' onClick={()=>{fetchorder()}}>Track orders</button>
                    </div>
                </>)
            })
            }
        </div>
    </div>
    </>
  )
}
