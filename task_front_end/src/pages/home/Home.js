import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import HomeSlider from "../../components/home/HomeSlider";
import "../../css/home.css"


function Home() {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [data, setData] = useState([]);
    useEffect(() => {
        // dispatch(findQueryProduct(queryParameter))
    }, [])
    return (
        <div className="container-home">
                <Header />
                <HomeSlider />
            </div>
            
    )
}
export default Home;
