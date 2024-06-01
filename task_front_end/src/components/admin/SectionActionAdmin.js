import { useSelector } from "react-redux";
import "../../css/admin/sectionActionAdmin.css"
import { Link } from "react-router-dom";
function MainSectionAction() {
  const {menu} = useSelector((state) => state.menuContentMain)
  console.log(menu)

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
              <Link to={`${window.location.href}/add`}><button type="button"><i className="fa-solid fa-plus fa-sm pr-1" />Thêm mới</button>
              </Link>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end">
              <button type="button"><i className="fa-solid fa-file-export fa-sm pr-1" />Xuất Excel</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default MainSectionAction;