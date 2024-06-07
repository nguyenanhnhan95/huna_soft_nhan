import { memo } from "react";
import { variationHttp } from "../../../constants/htttp";
import SaveAction from "../common/SaveAction";
import ContentForm from "./ContentForm";

function FormBasic() {
    return (
        <>
            <SaveAction  />
            <ContentForm />
        </>
    )
}
export default memo(FormBasic);