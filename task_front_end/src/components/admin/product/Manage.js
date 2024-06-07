
import { columnAllProduct, dataActions, manageSearch, manageSectionAction } from "../../../constants/product/manage";
import TableManage from "../../common/TableManage";
import SearchContentAdmin from "../common/SearchContentAdmin";
import SectionActionAdmin from "../common/SectionActionAdmin";


function Manage() {
    return (
        <>
            <SectionActionAdmin itemAction={manageSectionAction}/>
            <SearchContentAdmin itemSearch={manageSearch}/>
            <TableManage nameColumn={columnAllProduct} dataActions={dataActions}/>
        </>
    )
}
export default Manage;