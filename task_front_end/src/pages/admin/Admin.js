import "../../css/admin/admin.css";
import ContentAdmin from "../../components/admin/ContentAdmin"
import AdminMenu from "../../components/admin/AdminMenu";
import { useLocation } from "react-router-dom";
import store from "../../store/store";
import { actionReducerStore, reducerSliceKey } from "../../constants/reducerSlice";
import menuContentMainSlice from "../../slice/main/menuContentMain";
import overPlayMenuMainSlice from "../../slice/main/overPlayMenu";
store.injectReducer(actionReducerStore.clear,'','')
store.injectReducer(actionReducerStore.add,reducerSliceKey.menuContentMain,menuContentMainSlice.reducer)
store.injectReducer(actionReducerStore.add,reducerSliceKey.overPlayMenuMain,overPlayMenuMainSlice.reducer)
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