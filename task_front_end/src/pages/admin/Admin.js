import "../../css/admin/admin.css";
import ContentAdmin from "../../components/admin/ContentAdmin"
import AdminMenu from "../../components/admin/AdminMenu";
import { useLocation } from "react-router-dom";
function Admin() {
    const location = useLocation()
    return (
        <div className="container-fluid container-main">
            <AdminMenu resource={location.pathname} />
            <ContentAdmin/>
        </div>

    )
}
export default Admin;