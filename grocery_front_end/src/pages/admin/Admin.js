import "../../css/admin/admin.css";
import ContentAdmin from "../../components/admin/content/ContentAdmin"
import { memo } from "react";
import AdminMenu from "../../components/admin/menus/AdminMenu";

function Admin() {
    return (
            <div className="container-fluid container-main">
            <AdminMenu />
            <ContentAdmin />
        </div>    
    )
}
export default memo(Admin);