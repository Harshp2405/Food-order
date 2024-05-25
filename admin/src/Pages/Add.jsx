import React, { useEffect, useState } from 'react'
import './Css/Add.css'
import { assetsa } from '../Assets/admin_assets/assets'
import axios from 'axios'

export const Add = () => {
  const urladd = "http://localhost:2024"
  const [image, setimage] = useState(false)
  const [data, setdata] = useState({
    Foodname:"",
    Fooddescription:"",
    price:"",
    category:"Salad",
  })

  const changeHandle = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setdata(data=>({...data,[name]:value}))
  }
  useEffect(() => {
    console.log(data)
  }, [data])

  const onsubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("Foodname",data.Foodname)
    formdata.append("Fooddescription",data.Fooddescription)
    formdata.append("price",Number(data.price))
    formdata.append("category",data.category)
    formdata.append("image",image)

    const response = await axios.post(`${urladd}/api/food/add`,formdata);
    if (response.data.success) {
      setdata({
        Foodname:"",
        Fooddescription:"",
        price:"",
        category:"Salad",
      })
      setimage(false)
    }
    else{
      console.log("Error")
      console.log(e)
      setdata({
        Foodname:"",
        Fooddescription:"",
        price:"",
        category:"Salad",
      })
      setimage(false)
    }
  }

  return (
    <>
      <div className="add">
        <form className='flexcol' onSubmit={onsubmit}>
          <div className="imgupload flexcol">
            <p>upload img</p>
            <label htmlFor="image">
              <img className='upimg' required src={image?URL.createObjectURL(image):assetsa.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setimage(e.target.files[0])} type="file" id='image' name='image' hidden required />
          </div>
          <div className="addname flexcol">
            <p>Product Name</p>
            <input onChange={changeHandle} value={data.Foodname} type="text" name='Foodname' placeholder='Name' required/>
          </div>
          <div className="adddesc flexcol">
            <p>Product Desc</p>
            <textarea onChange={changeHandle} value={data.Fooddescription} rows='6' name='Fooddescription' placeholder='Food description' required />
          </div>
          <div className="addcatprice flexcol">
              <p>Categeory</p>
            <div className="cate flexcol">
              <select onChange={changeHandle}  name="category" >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Desert">Desert</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">PureVeg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="price flexcol">
              <p>Price</p>
              <input onChange={changeHandle} value={data.price} type="number" name='price' required placeholder='Price' />
            </div>
          </div>
          <button type='submit' className='btn btn-outline-secondary my-3' >Submit</button>
        </form>
      </div>
    </>
  )
}
/*

Foodname
Fooddescription
price
image
category

*/ 