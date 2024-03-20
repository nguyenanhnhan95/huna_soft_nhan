import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { findQueryProduct } from "../../slice/product";
import Cookies from "js-cookie";
function Home() {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const { products, error, status, queryParameter } = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(findQueryProduct(queryParameter))
    }, [])
    console.log(products)
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
                    {/* <th>Address</th> */}
                    <th>Action</th>
                </thead>
                <tbody>
                    {products.result && products.result.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            {/* <td>{employee.address}</td> */}
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Home;
