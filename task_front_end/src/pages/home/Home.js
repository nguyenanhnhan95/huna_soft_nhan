import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { findQueryProduct } from "../../slice/product";
import Test from "../../components/test";
import Stomp from "stompjs"
import Header from "../../components/header/Header";
import { Slideshow } from "@mui/icons-material";
import HomeSlider from "../../components/home/HomeSlider";
function Home() {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [data, setData] = useState([]);
    const { products, error, status, queryParameter } = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(findQueryProduct(queryParameter))
    }, [])
    console.log(data)
    console.log(products)
    return (
        <>
                <Header />
                <HomeSlider />

        </>
    )
}
export default Home;
