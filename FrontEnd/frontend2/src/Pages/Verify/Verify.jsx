import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Storecontext } from '../../Context/Storecontext';
import axios from 'axios';

export const Verify = () => {

  const navigate = useNavigate()
  const [searchparams, setsearchparams] = useSearchParams();
  const sucess = searchparams.get("sucess")
  const orderid = searchparams.get("orderid")
  const { url } = useContext(Storecontext)

const verifypayment = async () =>{
  const res = await axios.post("http://localhost:2024/api/order/verify",{sucess,orderid});
  if(res.data.sucess){
    navigate("/myorders")
    console.log(res.data)
    alert("sucess /myorder")
  }
  else{
    alert("error At Payment")
    console.log(res.data)
    // navigate("/")
  }
}

useEffect(() => {
verifypayment()
}, [])

  console.log(sucess, orderid);

  return (
    <>
      <div className="verfy">
        verify
        <div className="spinner">
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </>
  )
}
