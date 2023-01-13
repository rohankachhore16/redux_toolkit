import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const  initialState={
    cartItem:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
}

export const cartSlice= createSlice({
name:"cart",
initialState,
reducers:{
addToCart(state,action){
    const itemIndex = state.cartItem.findIndex((itmes)=> itmes.id === action.payload.id);
    if(itemIndex >= 0){
        toast.info("increased product qunatity",{position:"bottom-left"});
        state.cartItem[itemIndex].cartQuantity +=1;
    }else{
        toast.success("added new product to cart",{position:"bottom-left"});
        const tempProduct = {...action.payload,cartQuantity:1}
        state.cartItem.push(tempProduct);

    }
    localStorage.setItem("cartItem",JSON.stringify(state.cartItem))
},
},
})


export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;