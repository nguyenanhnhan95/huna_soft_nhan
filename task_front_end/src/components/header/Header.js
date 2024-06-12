import { useEffect} from "react";
import "../../css/header/header.css"
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart";
import HeaderNotification from "./HeaderNotification";
import HeaderUser from "./HeaderUser";
import HeaderMenusMB from "./HeaderMenusMB";
import HeaderMenusPc from "./HeaderMenusPC";
import { useDispatch, useSelector } from "react-redux";
import { findAllCategoryMenus, getAllCategoryMenus } from "../../slice/product/productCategoty";
import store from "../../../src/store/store";
import { actionReducerStore, reducerSliceKey } from "../../constants/reducerSlice";
store.injectReducer(actionReducerStore.add,reducerSliceKey.productCategoryMenus,getAllCategoryMenus.reducer)
function Header() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(findAllCategoryMenus())
    },[])
    return (
        <div className="header">
            <div className="container-fluid container-header ">
                <div className="d-flex justify-content-between ">
                    <div className="d-flex justify-content-start align-items-center">
                        <HeaderMenusMB />
                        <HeaderMenusPc/>
                    </div>
                    <div className="d-flex justify-content-end align-items-center mr-5">
                        <HeaderSearch />
                        <HeaderCart />
                        <HeaderNotification />
                        <HeaderUser />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;