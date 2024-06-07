import { memo } from "react";
import { variationHttp } from "../../../constants/htttp";
import { columnVariation, dataActions, queryParameter, variationAction, variationSearch } from "../../../constants/product/variation";
import TableManage from "../../common/TableManage";
import SearchContentAdmin from "../common/SearchContentAdmin";
import SectionActionAdmin from "../common/SectionActionAdmin";
function Manage(){
    return (
        <>
            <SectionActionAdmin itemAction={variationAction} />
            <SearchContentAdmin itemSearch={variationSearch} queryParameter={queryParameter} />
            <TableManage nameColumn={columnVariation}  dataActions={dataActions} />
        </>
    )
}
export default memo(Manage);