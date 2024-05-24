import { Link, NavLink, Route, Routes } from "react-router-dom";
import "../../css/main/mainContent.css"
import Header from "../header/Header";
import HeaderNotification from "../header/HeaderNotification";
import HeaderUser from "../header/HeaderUser";
import MainSearchHeader from "./MainSearchHeader";
import HeaderMain from "./HeaderMain";
import DashBoard from "./DashBoard";
import ProductManage from "./ProductManage";
function MainContent() {
  return (
    <div className="main-content">
      <HeaderMain />
      <Routes>
        <Route path="/dash-board" element={<DashBoard />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/shop-product" element={<ProductManage />} />
      </Routes>

    </div>
  )
}
export default MainContent;