import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN, USER_LOGIN } from "../constants/login";
import { FETCH_USER_FAILED, FETCH_USER_LOADING, FETCH_USER_SUCCEEDED } from "../constants/user";
import BaseService from "../services/base";
import { createHeader } from "../config/common";
import axios from "axios";
const initialState = {
    authenticate: false,
    user: null,
    status: null,
    loading: false,
    error: null,
}
export const findByUser = createAsyncThunk('user', async (http,{rejectWithValue}) => {
    try{
        const headers = createHeader(localStorage.getItem(ACCESS_TOKEN));
        const response = await axios.get(http, headers);
        console.log(response.data)
        localStorage.setItem(USER_LOGIN, JSON.stringify(response.data));
        return response.data;
    }catch(error){
        console.log(error)
        console.log(rejectWithValue(error.response.data))
        return rejectWithValue(error.response.data)
    }
})
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(findByUser.pending, (state, action) => {
                state.authenticate = false;
                state.user = null;
                state.loading = true;
                state.status = FETCH_USER_LOADING;
                state.error = null;
            })
            .addCase(findByUser.fulfilled, (state, action) => {
                state.authenticate = false;
                state.user = action.payload;
                state.loading = false;
                state.status = FETCH_USER_SUCCEEDED;
                state.error = null;
            })
            .addCase(findByUser.rejected, (state, action) => {
                state.authenticate = false;
                state.user = null;
                state.loading = false;
                state.status = FETCH_USER_FAILED;
                state.error = action.error;
            })
    }
})
