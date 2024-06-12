import { memo } from "react";
import SectionActionAdmin from "../../common/SectionActionAdmin";
import SearchContentAdmin from "../../common/SearchContentAdmin";
import TableManage from "../../../composite/TableManage";
function Manage() {
    return (
        <>
            <SectionActionAdmin />
            <SearchContentAdmin  />
            <TableManage  />
        </>
    )
}
export default memo(Manage);