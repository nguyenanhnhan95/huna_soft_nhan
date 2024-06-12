import { Route, Routes } from "react-router-dom";
import "../../../css/admin/content/contentAdmin.css"
import HeaderMain from "../header/HeaderAdmin";
import DashBoard from "../dashboard/DashBoard";
import RouteProduct from "../product/productManages/RouteProduct";
import RouteVariation from "../product/variation/RouteVariation";
import RouteShopPromotion from "../shop/promotion/RouteShopPromotion";
import RouteVariationOption from "../product/variationOption/RouteVariationOption";
function ContentAdmin() {

  return (
    <div className="main-content">
      <HeaderMain />
      <Routes>
        <Route path="/dash-board" element={<DashBoard />} />
        <Route path="/" element={<DashBoard />} />
        <Route path={'/products/*'} element={<RouteProduct />} />
        <Route path="/products-variation-option/*" element={<RouteVariationOption />} />
        <Route path="/products-variation/*" element={<RouteVariation />} />
        <Route path="/shop-promotion/*" element={<RouteShopPromotion/>} />
      </Routes>
    </div>
  )
}
export default ContentAdmin;