import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN } from "../constants/login";
import { FETCH_USER_FAILED, FETCH_USER_LOADING, FETCH_USER_SUCCEEDED } from "../constants/user";
import BaseService from "../services/base";
import { createHeader } from "../config/common";
const initialState = {
    Authenticate: false,
    user: null,
    status: null,
    error: null,
}
export const findByUser = createAsyncThunk('user', async (http) => {
    console.log(http)
    const header = createHeader(localStorage.getItem(ACCESS_TOKEN));
    return BaseService.findByUser(http + "/me", header)
})
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(findByUser.pending, (state, action) => {
                state.status = FETCH_USER_LOADING
            })
            .addCase(findByUser.fulfilled, (state, action) => {
                state.status = FETCH_USER_SUCCEEDED
                state.user = action.payload
                state.Authenticate = true;
            })
            .addCase(findByUser.rejected, (state, action) => {
                state.status = FETCH_USER_FAILED
                state.error = action.error
            })
    }
})