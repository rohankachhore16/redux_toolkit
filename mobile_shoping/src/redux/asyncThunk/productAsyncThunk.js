
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../constant"
import { productServise } from "../servise/productServise";


export const productAsync = createAsyncThunk(ASYNC_ROUTES.HOME,
    async(payload,{rejectWithValue})=>{
        try{
            const response = await productServise(payload);
            return response;
        }catch(err){
            return rejectWithValue(err);
        }
    })