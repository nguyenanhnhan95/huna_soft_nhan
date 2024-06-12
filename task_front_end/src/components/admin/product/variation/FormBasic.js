import { memo } from "react";
import { variationHttp } from "../../../../constants/htttp";
import SaveAction from "../../common/SaveAction";
import ContentForm from "./ContentForm";
import FormManage from "../../common/FormManage";

function FormBasic() {
    return (
        <>
            <SaveAction />
            {/* <ContentForm /> */}
            <FormManage Form={ContentForm} />
        </>
    )
}
export default memo(FormBasic);