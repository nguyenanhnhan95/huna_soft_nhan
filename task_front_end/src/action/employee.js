import axios from "axios";
import { FETCH_EMPLOYEES_FAILED,FETCH_EMPLOYEES_START,FETCH_EMPLOYEES_SUCCEEDED } from "../constants/employee";
export const fetchEmployeesStart=()=>({
    type:FETCH_EMPLOYEES_START,
})
export const fetchEmployeesSucceed=(employees)=>({
    type:FETCH_EMPLOYEES_SUCCEEDED,
    employees,
})
export const fetchEmployeesFailed=(error)=>({
    type:FETCH_EMPLOYEES_FAILED,
    error,
})
export const fetchEmployees=()=>{
    return async (dispatch)=>{
        dispatch(fetchEmployeesStart())
        try {
            const res= await axios.get("http://localhost:3000/employees")
            console.log(res)
            dispatch(fetchEmployeesSucceed(res.data))
        }catch(err){
            dispatch(fetchEmployeesFailed(err))
        }
    }
}