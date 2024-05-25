import React, { useContext, useEffect, useState } from 'react'
import './Css/Loginpopup.css'
import { assetsf } from '../Assets/frontend_assets/assets'
import { Storecontext } from '../Context/Storecontext'
import axios from 'axios'
export const Loginpopup = ({setshowlogin}) => {
    const {url , settoken , token}=useContext(Storecontext)

    const [currentState, setcurrentState] = useState("Login")
    const [data,setdata]=useState({
        userName:"",
        userMail:"",
        userPassword:""
    })

    const onchange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setdata(data=>({...data,[name]:value}))
    }


    const log = async (e)=>{
        e.preventDefault()
        let logurl = url;
        if (currentState==="Login") {
            logurl += "/api/user/login"
        }
        else{
            logurl += "/api/user/signup"
        }

        const res = await axios.post(logurl,data)

        if(res.data.sucess){
            settoken(res.data.token)
            localStorage.setItem("token",res.data.token)
            setshowlogin(false)
        }
        else{
            alert(res.data.message)
        }
    }
    useEffect(() => {
        console.log(data)
    },[data])
  return (
    <>
        <div className="login" id="login">
            <form onSubmit={log} className="containerLog">
                <div className="title">
                    <h3>{currentState}</h3>
                    <img src={assetsf.cross_icon} onClick={()=>setshowlogin(false)} alt="" />
                </div>
                <div className="input">
                    {currentState==="Login"?<></>:<input name='userName' onChange={onchange} value={data.userName} type="text" id="name" placeholder='Enter Name' required/>}
                    <input type="email" id="Mail" name='userMail' onChange={onchange} value={data.userMail} placeholder='Enter E-mail' required/>
                    <input type="password" id="Pass" name='userPassword' onChange={onchange} value={data.userPassword} placeholder='Enter Password' required/>
                </div>
                <button type='submit' className='logbtn btn btn-info'>{currentState==="SignUp"?"Creat Account":"Login"}</button>
                <div className="popcondition">
                    <input type="checkbox" name="" id=""/>
                    <p>I agree Terms & Condition</p>
                </div>
                {currentState==="Login"
                ?<p  className='Create'>New Here!! <span id='loginspan' onClick={()=>setcurrentState("SignUp")}>Create Account</span></p>
                :<p className='Already'>Already Have Account...<span onClick={()=>setcurrentState("Login")} >Login Here</span></p>}
            </form>
        </div>
    </>
  )
}