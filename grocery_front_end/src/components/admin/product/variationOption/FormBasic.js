import { memo } from "react";
import SaveAction from "../../common/SaveAction";
import FormManage from "../../common/FormManage";
import ContentForm from "../variationOption/ContentForm"
function FormBasic() {
    return (
        <>
            <SaveAction  />
            {/* <ContentForm /> */}
            <FormManage Form={ContentForm} />
        </>
    )
}
export default memo(FormBasic);