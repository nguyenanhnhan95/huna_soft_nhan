import { memo } from "react";
import FormManage from "../../common/FormManage";
import SaveAction from "../../common/SaveAction";
import ContentForm from "./ContentForm";

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