import React, { useEffect, useState } from "react"
import PersonIcon from '@mui/icons-material/Person';
import { HomeIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { findAllEmployees, searchEmployee } from "../../slice/employee";
import { getEmployees } from "../../selector/employee";
import { SEARCH_NAME_EMPLOYEE } from "../../constants/employee";
export function Home() {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const { employees, error, status, search } = useSelector((state) => state.employee)
    useEffect(() => {
        dispatch(findAllEmployees({ name: name }))
    }, [])
    console.log(employees)
    return (
        <>
            <div><input type="name" onChange={(event) => setName(event.target.value)} />
                <button type="button" onClick={() => dispatch(searchEmployee({
                    name
                }))}>search</button></div>
            <table>
                <thead>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {employees.content && employees.content.map((employee) => (
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
