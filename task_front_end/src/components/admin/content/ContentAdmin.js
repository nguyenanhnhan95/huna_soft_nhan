import { Route, Routes } from "react-router-dom";
import "../../../css/admin/content/contentAdmin.css"
import HeaderMain from "../header/HeaderAdmin";
import DashBoard from "../dashboard/DashBoard";
import ValueOption from "../variationOption/Manage";
import RouteProduct from "../product/RouteProduct";
import RouteVariationOption from "../variationOption/RouteVariationOption";
import RouteVariation from "../variation/RouteVariation";
function ContentAdmin() {
  return (
    <div className="main-content">
      <HeaderMain />
      <Routes>
        <Route path="/dash-board" element={<DashBoard />} />
        <Route path="/" element={<DashBoard />} />       
        <Route path={'/products/*'} element={<RouteProduct/>} />
        <Route path="/products-variation-option/*" element={<RouteVariationOption />} />
        <Route path="/products-variation/*" element={<RouteVariation/>} />
      </Routes>
    </div>
  )
}
export default ContentAdmin;