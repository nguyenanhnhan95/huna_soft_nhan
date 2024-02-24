import React, { useEffect, useState } from "react"
import PersonIcon from '@mui/icons-material/Person';
import { HomeIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { todoAdded } from "../../reducerSlice/employeeSlice";
import { useGetEmployees } from "../../api/api";
import { selectEmployees, selectEmployeesStatus } from "../../selector/employee";
import { fetchEmployees } from "../../action/employee";
export function Home() {
    const dispatch = useDispatch();
    const status = useSelector(selectEmployees)
    const employees = useSelector(selectEmployeesStatus)
    console.log(employees)
    useEffect(()=>{
        dispatch(fetchEmployees())
    },[dispatch])
    return (
        <div>
            
        </div>
    )
}
