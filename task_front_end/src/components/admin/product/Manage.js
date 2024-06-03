import { columnAllProduct } from "../../../constants/product/columnAllProduct";
import SearchContentAdmin from "../SearchContentAdmin";
import MainSectionAction from "../SectionActionAdmin";
import TableManage from "./TableManage";

function Manage() {
    
    return (
        <>
            <MainSectionAction />
            <SearchContentAdmin/>
            <TableManage nameColumn={columnAllProduct} />
        </>
    )
}
export default Manage;