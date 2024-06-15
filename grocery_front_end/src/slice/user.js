import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FETCH_USER_FAILED, FETCH_USER_LOADING, FETCH_USER_SUCCEEDED } from "../constants/user";
import axios from "axios";
import { createHeader } from "../utils/common";
import { addErrorTask, addLoadingTask, removeLoadingTask } from "./Loading/loadingFetch";
const initialState = {
    authenticate: false,
    user: null,
    status: null,
    loading: false,
    error: null,
}
export const findByUser = createAsyncThunk('user', async ({ http, id }, { dispatch, rejectWithValue }) => {
    dispatch(addLoadingTask(id))
    try {
        const response = await axios.get(http, createHeader());
        return response.data;
    } catch (error) {
        dispatch(addErrorTask(id))
        return rejectWithValue(error.response.data)
    } finally {
        dispatch(removeLoadingTask(id))
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
