import {createSlice} from "@reduxjs/toolkit"

import { productAsync } from "../asyncThunk/productAsyncThunk";
import { THUNK_STATUS } from "../constant";

const productSlice = createSlice({
    name:'product',
     initialState:{
        data:[],
        status:null,
    },
    reducers:{

        
    },
    extraReducers:(builder)=>{
        builder.addCase(productAsync.pending,(state,action)=>{
            state.status= THUNK_STATUS.LOADING
        });
        builder.addCase(productAsync.fulfilled,(state,action)=>{
            state.data=action.payload.data;
            state.status=THUNK_STATUS.SUCCEES;
        });
        builder.addCase(productAsync.rejected,(state,action)=>{
            state.status=THUNK_STATUS.ERRROR;
        });
    }
});
export default productSlice.reducer;