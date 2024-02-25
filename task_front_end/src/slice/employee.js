import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { FETCH_EMPLOYEES_FAILED, FETCH_EMPLOYEES_START, FETCH_EMPLOYEES_SUCCEEDED, SEARCH_NAME_EMPLOYEE } from "../constants/employee"

const initialState = {
    status:'uninitialized',
    employees:[],
    error:null,
    searchEmployee:[]
}
export const fetchEmployees= createAsyncThunk('employees/fetchEmployees',async ()=>{
    try {
        const res =await axios.get('http://localhost:8080/employees')
        return res.data;
    } catch (error) {
        alert(error)
    }
    
})
export const employeesSlice = createSlice({
    name:'employees',
    initialState,
    reducers:{
        searchEmployee:(state,action)=>{
           state.employees=state.employees.filter((a)=>a.name.includes(action.payload.search))
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchEmployees.pending,(state,action)=>{
            state.status=FETCH_EMPLOYEES_START
        })
        .addCase(fetchEmployees.fulfilled,(state,action)=>{
            state.status=FETCH_EMPLOYEES_SUCCEEDED
            state.employees=action.payload
        })
        .addCase(fetchEmployees.rejected,(state,action)=>{
            state.status=FETCH_EMPLOYEES_FAILED
            state.employees=[]
            state.error=action.error
        })
    }
})
export const {searchEmployee}=employeesSlice.actions