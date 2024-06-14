import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { linkHttp } from "../../constants/common/resource";
import { constLogin } from "../../constants/login/login";

export const loginFormAuth = createAsyncThunk('auth/login',
    async (account,{rejectWithValue}) => {
        try {
            const response = await axios.post(linkHttp.authLogin, account);
            localStorage.setItem(constLogin.ACCESS_TOKEN, response.data.accessToken);
            return response.data;
        } catch(error) {
            return rejectWithValue(error.response.data)
        }
    }
)
export const loginForm = createSlice({
    name: "loginForm",
    initialState: {
        loading: false,
        accessToken: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(loginFormAuth.pending, (state) => {
                state.loading = true;
                state.accessToken = null;
                state.error = null;
            })
            .addCase(loginFormAuth.fulfilled, (state, action) => {
        
                state.loading = false;
                state.accessToken = action.payload.accessToken;
                state.error = null;
            })
            .addCase(loginFormAuth.rejected, (state, action) => {
                state.loading = false;
                state.accessToken = null;
                state.error = action.payload.result;
            })
    }
})