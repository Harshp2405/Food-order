import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Css/User.css'
export const User = () => {
    const [user, setuser] = useState([])

    const userlist = async ()=>{
        const res = await axios.get("http://localhost:2024/api/food/user")
        try {
            setuser(res.data.data)
            console.log(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteuser = async (id)=>{
        try {
        const res = await axios.post("http://localhost:2024/api/food/del",{_id:id})
        console.log(res.data)
        userlist()
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
      userlist();
      deleteuser()
    }, [])
  return (
    <>
        <div className="alluser">
            <h2>All User</h2>
            <div className="data">
            <div className="details">
                <b>USER NAME</b>
                <b>USER EMAIL ID</b>
                <b>Delete</b>
            </div>
            {
                user.map((item , index)=>{
                    return(
                        <div className='listmap' key={index} >
                            <span>{item.userName}</span>
                            <span>{item.userMail}</span>
                            <span className='deluser' onClick={()=>{deleteuser(item._id)}} >Delete</span>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    </>
  )
}
