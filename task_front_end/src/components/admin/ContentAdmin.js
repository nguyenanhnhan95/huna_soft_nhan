import { Route, Routes } from "react-router-dom";
import "../../css/admin/contentAdmin.css"
import HeaderMain from "./HeaderAdmin";
import DashBoard from "./DashBoard";
import Manage from "./product/Manage";
import SoldManage from "./product/SoldManage";
import FormBasic from "./product/FormBasic";
function ContentAdmin() {
  return (
    <div className="main-content">
      <HeaderMain />
      <Routes>
        <Route path="/dash-board" element={<DashBoard />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/products" element={<Manage />} />
        <Route path="/products-sold" element={<SoldManage />} />
        <Route path="/products/add" element={<FormBasic />} />
      </Routes>
    </div>
  )
}
export default ContentAdmin;