import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addErrorTask, addLoadingTask, removeLoadingTask } from "../Loading/loadingFetch";


export const findAllCategoryMenus = createAsyncThunk('productCategoryMenus',
    async(idFetch, { dispatch })=>{
        
        dispatch(addLoadingTask(idFetch))
        try{
            const response = await axios.get("http://localhost:8080/category");
            return response.data;
        }catch(error){
            dispatch(addErrorTask(idFetch))
        }finally {
            dispatch(removeLoadingTask(idFetch));
        }
    }
)
export const getAllCategoryMenus = createSlice({
    name:"productCategoryMenus",
    initialState:{
        loading:false,
        productCategories:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(findAllCategoryMenus.pending,(state)=>{
            state.loading=true;
            state.productCategories=[];
            state.error=null;
        })
        .addCase(findAllCategoryMenus.fulfilled,(state,action)=>{
            state.loading=false;
            state.productCategories=action.payload;
            state.error=null;
        })
        .addCase(findAllCategoryMenus.rejected,(state,action)=>{
            state.loading=false;
            state.productCategories=[];
            state.error=action.error;
        })
    }
})