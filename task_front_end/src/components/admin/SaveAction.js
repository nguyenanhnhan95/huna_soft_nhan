import "../../css/admin/saveAction.css"
function SaveAction(){
    return(
        <div className="main-content-action-save">
        <div className="container-fluid container-content-action-save">
          <div className="d-flex justify-content-start align-items-center">
            <button type="button" className="content-action-save-button"><i className="fa-solid fa-floppy-disk" />Lưu</button>
            <button type="button" className="content-action-save-button"><i className="fa-solid fa-floppy-disk" />Lưu và Đóng</button>
            <button type="button" className="content-action-save-button"><i className="fa-solid fa-xmark" />Đóng</button>
          </div>
        </div>
      </div>
    )
}
export default SaveAction;