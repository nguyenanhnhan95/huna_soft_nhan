import { Route, Routes } from "react-router-dom";
import Manage from "./Manage";
import FormBasic from "./FormBasic";

function RouteVariationOption(){
    return(
        <Routes>
            <Route path="/" element={<Manage/>}/>
            <Route path="/add" element={<FormBasic/>}/>
        </Routes>
    )
}
export default RouteVariationOption;