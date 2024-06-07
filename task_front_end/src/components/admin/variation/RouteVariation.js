import { Routes, Route } from "react-router-dom";
import Manage from "./Manage";
import FormBasic from "./FormBasic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActionModel } from "../../../slice/main/actionAdmin";
import { variationHttp } from "../../../constants/htttp";
import { columnVariation, dataActions, queryParameter, variationAction, variationSearch } from "../../../constants/product/variation";

function RouteVariation() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setActionModel({
            httpNavigate: variationHttp.variationNavigate,
            httpApi: variationHttp.variation,
            itemAction: variationAction,
            itemSearch: variationSearch,
            queryParameter:queryParameter,
            nameColumn: columnVariation,
            dataActions:dataActions,
        }))
    }, [])
    return (
        <Routes>
            <Route path="/" element={<Manage />} />
            <Route path="/add" element={<FormBasic />} />
            <Route path="/edit/:id" element={<FormBasic />} />
        </Routes>
    )
}
export default RouteVariation;