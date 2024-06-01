import { Route, Routes } from "react-router-dom";
import "../../css/admin/contentAdmin.css"
import HeaderMain from "./HeaderAdmin";
import DashBoard from "./DashBoard";
import ProductManage from "./product/ProductManage";
import ProductSoldManage from "./product/ProductSoldManage";
function ContentAdmin() {
  return (
    <div className="main-content">
      <HeaderMain />
      <Routes>
        <Route path="/dash-board" element={<DashBoard />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/products" element={<ProductManage />} />
        <Route path="/products-sold" element={<ProductSoldManage />} />
      </Routes>

    </div>
  )
}
export default ContentAdmin;