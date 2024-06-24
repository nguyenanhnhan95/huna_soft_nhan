import { Link } from "react-router-dom";
import "../../../css/admin/header/headerAdmin.css"
import {  memo, useRef } from "react";
import { useDispatch} from "react-redux";
import HeaderNotification from "../../header/HeaderNotification";
import HeaderUser from "../../header/HeaderUser";
import { onClickHandleOverPlay } from "../../../slice/main/overPlayMenu";
import SearchHeaderAdmin from "./SearchHeaderAmin";
function HeaderAdmin() {
    const dispatch = useDispatch();
    const overPlayMenuMainRef = useRef(null)
    const handleOpenMenuMainOnClick = () => {
        dispatch(onClickHandleOverPlay(true))
    }
    return (
        <div className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid container-header-main d-flex justify-content-between">
                <div className="main-content-header-left">
                    <div className=" navbar-collapse">
                        <ul className="navbar-nav ">
                            <li className="nav-item main-content-header-list" >
                                <i className="fa-solid fa-bars fa-2x" onClick={handleOpenMenuMainOnClick} ref={overPlayMenuMainRef}></i>
                            </li>
                            < SearchHeaderAdmin/>
                        </ul>
                    </div>
                </div>

                <div className="main-content-header-right">
                    <div className=" navbar-collapse">
                        <ul className="navbar-nav ">
                            <Link to={`/home`}>
                                <li className="nav-item turn-home">
                                    <i className="fa-solid fa-up-right-from-square fa-2x" />
                                </li>
                            </Link>
                            <li className="nav-item ">
                                <HeaderNotification />
                            </li>
                            <li className="nav-item">
                                <HeaderUser />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(HeaderAdmin);