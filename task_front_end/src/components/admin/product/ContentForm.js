import "../../../css/admin/products/contentForm.css"
import UploadImg from "../../common/UploadImg";
function ContentForm() {
    return (
        <div className="main-content-form-product">
            <div className="card card-form-product">
                <div className="card-header">
                    Thông tin sản phẩm
                </div>
                <div className="card-body">
                    <div className="row">
                        <UploadImg/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContentForm;