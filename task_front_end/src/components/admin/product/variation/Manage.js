import { memo } from "react";
import SearchContentAdmin from "../../common/SearchContentAdmin";
import SectionActionAdmin from "../../common/SectionActionAdmin";
function Manage() {
    return (
        <>
            <SectionActionAdmin />
            <SearchContentAdmin />
            <TableManage />
        </>
    )
}
export default memo(Manage);