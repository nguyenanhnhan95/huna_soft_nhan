import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "../slice/employee";

export const store = configureStore({
    reducer: {
        employee: employeesSlice.reducer,
    },
})
