import React, { useEffect, useState } from "react"
import PersonIcon from '@mui/icons-material/Person';
import { HomeIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, searchEmployee } from "../../slice/employee";
import { getEmployees } from "../../selector/employee";
import { SEARCH_NAME_EMPLOYEE } from "../../constants/employee";
export function Home() {
    const dispatch = useDispatch();
    const [search,setSearch] = useState("")
    const {employees,error,status} = useSelector((state) => state.employee)
    useEffect(() => {
        dispatch(fetchEmployees())
    }, [])
    return (
        <>
        <div><input type="name" onChange={(event)=>setSearch(event.target.value)}/>
        <button type="button" onClick={()=>dispatch(searchEmployee({
            search
        }))}>search</button></div>
            <table>
                <thead>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {employees && employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.address}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
