import axios from "axios"
import { FETCH_PRODUCT_FAILED, FETCH_PRODUCT_SUCCEEDED, FETCH_EMPLOYEES_START, FETCH_PRODUCT_LOADING } from "../constants/product"
import BaseService from "../services/base"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const http='http://localhost:8080/product';
const initialState = {
    status: 'uninitialized',
    products: [],
    error: null,
    queryParameter: {
        "size": 10,
        "page": 0,
        "criterias": {
            "name": "nhan"
        }
    }
}
export const findQueryProduct = createAsyncThunk('product', async (queryParameter) => {
    console.log(queryParameter)
    return BaseService.findAll(http,queryParameter)
})
// export const fetchProduct = createAsyncThunk('product/fetchEmployees')
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(findQueryProduct.pending, (state, action) => {
                state.status = FETCH_PRODUCT_LOADING
            })
            .addCase(findQueryProduct.fulfilled, (state, action) => {
                state.status = FETCH_PRODUCT_SUCCEEDED
                state.products = action.payload
            })
            .addCase(findQueryProduct.rejected, (state, action) => {
                state.status = FETCH_PRODUCT_FAILED
                state.products = []
                state.error = action.error
            })
    }
})