import React from 'react'
import './Css/Expmenu.css'
import { menu_list } from '../Assets/frontend_assets/assets'
export const Expmenu = ({ categeries, setcategeries }) => {

    return (
        <>
            <div className="expmenu mt-4" id="exp">
                Categeries
                <div className="list mt-2">
                    {
                        menu_list.map((item, index) => {
                            return (<>
                                <div key={index} onClick={() => {
                                    setcategeries(prev => prev === item.menu_name ? "All" : item.menu_name)
                                }
                                } className="listItem">
                                    <img className={categeries===item.menu_name?"active":""} src={item.menu_image} alt="" />
                                    <p>{item.menu_name}</p>
                                </div>
                            </>)
                        })
                    }
                </div>
            </div>
        </>
    )
}
