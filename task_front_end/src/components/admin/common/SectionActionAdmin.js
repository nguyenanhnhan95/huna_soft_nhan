import { useSelector } from "react-redux";
import "../../../css/admin/common/sectionActionAdmin.css"
import { Link } from "react-router-dom";
function SectionActionAdmin(props) {
  const {itemAction} = props;
  const {menu} = useSelector((state) => state.menuContentMain)
  return (
    <>
      <div className="row main-content-title">
        <div className="col-12">
          {menu!==null? menu.title:""}
        </div>
      </div>
      <div className="main-content-action">
        <div className="container-fluid container-content-action">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-start">
              <Link to={`${window.location.href}/add`} style={{display:itemAction.add.style.display}}><button type="button"><i className={itemAction.add.icon} />{itemAction.add.name}</button>
              </Link>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end">
              <button type="button" style={{display:itemAction.excel.style.display}}><i className={itemAction.excel.icon} />{itemAction.excel.name}</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default SectionActionAdmin;