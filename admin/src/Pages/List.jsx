import React, { useEffect, useState } from 'react'
import './Css/List.css'
import axios from 'axios'

export const List = () => {
  const [list, setlist] = useState([]);
  const url = "http://localhost:2024"

  const fetchlist = async () => {
    const res = await axios.get(`${url}/api/food/list`)
    try {
      setlist(res.data.data)
      console.log(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const delfood = async (id) => {
    try {
      const response = await axios.post("http://localhost:2024/api/food/remove",{ _id:id })
      await fetchlist();
      if (response.data.success) {
        console.log("data delete")
      }
      // console.log(response)
      console.log({ _id:id })
    } catch (error) {
      console.log(JSON.stringify(error))
    }
  }

  useEffect(() => {
    fetchlist();
  }, []);
  return (
    <>
      <div className="Listc flexcoll">
        <p>AllItems</p>
        <div className="ltable">
          <div className="itmtabfmt titlefmt">
            <b>Image</b>
            <b>Name</b>
            <b>Categery</b>
            <b>Price</b>
            <b>Action</b>
          </div>
        </div>
        {
          list.map((item, index) => {
            return (
              <div className="itmtabfmt" key={index}>
                <div className="imgfood">
                  <img src={`${url}/images/` + item.image} alt="" />
                </div>
                <p>{item.Foodname}</p>
                <p>{item.category}</p>
                <p>{item.price}/-</p>
                <p onClick={() => delfood(item._id)} className='del'>Delete</p>
              </div>
            );
          })
        }
      </div>
    </>
  )
}
