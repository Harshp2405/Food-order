/* eslint-disable array-callback-return */
import React, { useContext } from 'react'
import './Css/Fooddisplay.css'
import { Storecontext } from '../Context/Storecontext'
import { Fooditem } from './Fooditem'
export const Fooddisplay = ({categeries}) => {

    const{ food_list } = useContext(Storecontext)
    
    return (
        <>
            <div className="fooddisplay" id='fooddisplay'>
            
                <div className="dishlist">
                    {
                        food_list.map((item,index)=>{
                            if(categeries==="All" || categeries===item.category){
                                return(
                                <>
                                    <Fooditem key={index} id={item._id} name={item.Foodname} desc={item.Fooddescription} price={item.price} image={item.image}/>
                                </>
                            )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}
