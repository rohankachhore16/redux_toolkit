import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAsync } from '../../redux/asyncThunk/productAsyncThunk';
import { addToCart } from '../../redux/slices/cartSlice';
// import {useHistory} from "react-router"
const Home = () => {
  const { data, status } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  // const history= useHistory()
  useEffect(() => {
    dispatch(productAsync());
  }, [])
const addToItem=(items)=>{
dispatch(addToCart(items));
// history.push()
}
  //  console.log(productAsync());
  console.log("..................................", data,)
  console.log("status is ", status)
  return (
    <>
      <h2>New arrivals</h2>
      <div className="products">

              {data.map(items => (
             <div key={items.id} className="product">
               <img src={items.image} alt="" />
               <span>{items.title}</span>
                  <p style={{ textAlign: "center"}}>{items.price}</p>
<button onClick={()=> addToItem(items)}>add to cart</button>
                </div>
        ))}
        
    </div>
    </>
      )
}

      export default Home;
