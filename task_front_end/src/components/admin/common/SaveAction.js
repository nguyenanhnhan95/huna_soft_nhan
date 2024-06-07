import { useLocation, useNavigate } from "react-router-dom";
import "../../../css/admin/common/saveAction.css"
import { useDispatch, useSelector } from "react-redux";
import { actionSave } from "../../../slice/main/actionAdmin";
function SaveAction() {
  const {onClickAction, http} = useSelector((state)=>state.actionAdmin)
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSaveClose = (close) => {
    dispatch(actionSave({close: close }))
    onClickAction.buttonSave.click()
  }
  return (
    <>
      <div className="main-content-action-save">
        <div className="container-fluid container-content-action-save">
          <div className="d-flex justify-content-start align-items-center">
            <button type="button" className="content-action-save-button"
              onClick={() => handleSaveClose(false)}><i className="fa-solid fa-floppy-disk" />Lưu</button>
            <button type="button" className="content-action-save-button" onClick={() => handleSaveClose(true)}>
              <i className="fa-solid fa-floppy-disk" />Lưu và Đóng</button>
            <button type="button" className="content-action-save-button" onClick={() => navigate(http)}>
              <i className="fa-solid fa-xmark" />Đóng</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default SaveAction;