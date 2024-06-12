import { memo } from "react";
import { variationHttp } from "../../../../constants/htttp";
import { columnVariation, dataActions, queryParameter, variationAction, variationSearch } from "../../../../constants/product/variation";
import TableManage from "../../../composite/TableManage";
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