import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Storecontext = createContext(null)
export const Storecontextprovider =(props)=>{

    const [cartitem , setcartitem] = useState({})
    const [food_list , setfoodlist] = useState([])
    const url = "http://localhost:2024"
    const [token,settoken]=useState("")

    const addtocart = async (itemid)=>{
        if(!cartitem[itemid]){
            setcartitem((prev)=>({...prev,[itemid]:1}))
        }
        else{
            setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
        if (token) {
            await axios.post("http://localhost:2024/api/cart/add",{itemid},{headers:{token}})
        }
    }

    const removetocart =async (itemid)=>{
        setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
        await axios.post("http://localhost:2024/api/cart/remove",{itemid},{headers:{token}})
    } 
    const deletecart = async (itemid)=>{
        // setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
        setcartitem((prev)=>({...prev,[itemid]:prev[itemid] = 0}))
        await axios.post("http://localhost:2024/api/cart/delete",{itemid},{headers:{token}})
    } 

    const cartdata = async(token)=>{
        const res = await axios.post("http://localhost:2024/api/cart/getcart",{},{headers:{token}})
        setcartitem(res.data.userCart)
    }

    const carttotal = ()=>{
        try {
            let tamount = 0
            for (const item in cartitem) {
                    let iteminfo = food_list.find((product)=>product._id === item)
                    tamount = tamount + (iteminfo.price * cartitem[item])
                }
                return tamount;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(JSON.stringify(cartitem)+"5465")
        async function load(){
            await fetchfood()
            if (localStorage.getItem("token")) {
                settoken(localStorage.getItem("token"))
                await cartdata(localStorage.getItem("token"))
            }
        }
        load();
    }, [])
    
    const fetchfood= async ()=>{
        const res = await axios.get("http://localhost:2024/api/food/list")
        setfoodlist(res.data.data)
        setcartitem(food_list)
    }

    const contextValue = {
        food_list,
        cartitem,
        setcartitem,
        addtocart,
        removetocart,
        carttotal,
        url,
        token,
        settoken,
        deletecart,
    }
    useEffect(() => {
        // console.log(cartitem)
    }, [cartitem])
    
    return(
        <Storecontext.Provider value={contextValue}>
            {
                props.children
            }
        </Storecontext.Provider>
    )
}