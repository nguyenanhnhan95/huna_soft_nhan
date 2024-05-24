import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCESS_TOKEN, PROVIDER_ID, PROVIDER_LOCAL, USER_LOGIN } from "../constants/login";

export const loginFormAuth = createAsyncThunk('auth/login',
    async(account)=>{
        const response = await axios.post("http://localhost:8080/auth/login", account );
        localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
        return response.data;
    }
)
export const loginForm = createSlice({
    name:"loginForm",
    initialState:{
        loading:false,
        accessToken:null,
        error:null
    },
    extraReducers:(builder)=>{
        builder.
        addCase(loginFormAuth.pending,(state)=>{
            state.loading=true;
            state.accessToken=null;
            state.error=null;
        })
        .addCase(loginFormAuth.fulfilled,(state,action)=>{
            state.loading=false;
            state.accessToken=action.payload;
            state.error=null;
        })
        .addCase(loginFormAuth.rejected,(state,action)=>{
            state.loading=false;
            state.accessToken=null;
            state.error=action.error;
        })
    }
})