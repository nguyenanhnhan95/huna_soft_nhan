import { useSelector } from "react-redux";

function Test(){
    const { products, error, status, queryParameter } = useSelector((state) => state.product)
    console.log(products)
    return(
        <>
        </>
    )
}
export default Test;