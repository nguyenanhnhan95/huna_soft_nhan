import React, { memo, useEffect} from "react"
import Header from "../../components/header/Header";
import HomeSlider from "../../components/home/HomeSlider";
import "../../css/home/home.css"


function Home() {
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
export default memo(Home);
