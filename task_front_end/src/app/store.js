import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "../slice/employee";
import { productSlice } from "../slice/product";

export const store = configureStore({
    reducer: {
        employee: employeesSlice.reducer,
        product:productSlice.reducer
    },
})
