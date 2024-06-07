import { columnVariationOption, dataActions, variationOptionAction, variationOptionSearch } from "../../../constants/product/variationOption";
import TableManage from "../../common/TableManage";
import SearchContentAdmin from "../common/SearchContentAdmin";
import SectionActionAdmin from "../common/SectionActionAdmin";


function Manage() {
    return (
        <>
            <SectionActionAdmin itemAction={variationOptionAction} />
            <SearchContentAdmin itemSearch={variationOptionSearch} />
            <TableManage nameColumn={columnVariationOption} dataActions={dataActions} />
        </>
    )
}
export default Manage;