import "../../css/admin/admin.css";
import ContentAdmin from "../../components/admin/content/ContentAdmin"
import store from "../../store/store";
import { actionReducerStore, reducerSliceKey } from "../../constants/reducerSlice";
import menuContentMainSlice from "../../slice/main/menuContentMain";
import overPlayMenuMainSlice from "../../slice/main/overPlayMenu";
import { actionAdminSlice} from "../../slice/main/actionAdmin";
import { memo } from "react";
import AdminMenu from "../../components/admin/menus/AdminMenu";
store.injectReducer(actionReducerStore.clear, '', '')
store.injectReducer(actionReducerStore.add, reducerSliceKey.menuContentMain, menuContentMainSlice.reducer)
store.injectReducer(actionReducerStore.add, reducerSliceKey.overPlayMenuMain, overPlayMenuMainSlice.reducer)
store.injectReducer(actionReducerStore.add, reducerSliceKey.actionAdmin, actionAdminSlice.reducer)
function Admin() {
    return (
        <div className="container-fluid container-main">
            <AdminMenu />
            <ContentAdmin />
        </div>

    )
}
export default memo(Admin);