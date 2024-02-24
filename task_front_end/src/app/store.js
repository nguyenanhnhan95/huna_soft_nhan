import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../reducers/employee";

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
    }
})
