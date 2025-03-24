// /* eslint-disable array-callback-return */
// import React, { useContext } from 'react'
// import './Css/Fooddisplay.css'
// import { Storecontext } from '../Context/Storecontext'
// import { Fooditem } from './Fooditem'
// export const Fooddisplay = ({categeries}) => {

//     const{ food_list } = useContext(Storecontext)
    
//     return (
//         <>
//             <div className="fooddisplay" id='fooddisplay'>
            
//                 <div className="dishlist">
//                     {
//                         food_list.map((item,index)=>{
//                             if(categeries==="All" || categeries===item.category){
//                                 return(
//                                 <>
//                                     <Fooditem key={index} id={item._id} name={item.Foodname} desc={item.Fooddescription} price={item.price} image={item.image}/>
//                                 </>
//                             )
//                             }
//                         })
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }
import React, { useContext, useState } from 'react';
import './Css/Fooddisplay.css';
import { Storecontext } from '../Context/Storecontext';
import { Fooditem } from './Fooditem';

export const Fooddisplay = ({ categeries }) => {
    const { food_list } = useContext(Storecontext);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle input change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filtered food list based on category and search query
    const filteredFoodList = food_list.filter(item =>
        (categeries === "All" || categeries === item.category) &&
        item.Foodname.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="fooddisplay" id='fooddisplay'>
                {/* Search Container */}
                <div className="search-container mt-5">
                    <input
                        type="text"
                        placeholder="Search for food..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                </div>

                <div className="dishlist">
                    {
                        filteredFoodList.length > 0 ? (
                            filteredFoodList.map((item, index) => (
                                <Fooditem
                                    key={index}
                                    id={item._id}
                                    name={item.Foodname}
                                    desc={item.Fooddescription}
                                    price={item.price}
                                    image={item.image}
                                />
                            ))
                        ) : (
                            <p className="not-found">Item Not Found</p>
                        )
                    }
                </div>
            </div>
        </>
    );
};
