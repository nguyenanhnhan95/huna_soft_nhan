import "../../../../css/admin/product/productManages/contentForm.css"
import UploadImg from "../../../composite/UploadImg";
function ContentForm() {
    return (
        <div className="main-content-form-product main-content-form">
            <div className="card card-form-product">
                <div className="card-header">
                    Thông tin sản phẩm
                </div>
                <div className="card-body">
                    <div className="row">
                        <UploadImg />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContentForm;