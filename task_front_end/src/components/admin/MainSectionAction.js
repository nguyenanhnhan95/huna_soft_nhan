import { useSelector } from "react-redux";
import "../../css/main/mainSectionAction.css"
function MainSectionAction() {
  const menu = useSelector((state) => state.menuContentMain.menu)
  console.log(menu)
  return (
    <div className="main-content-action">
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid container-content-action d-flex justify-content-between">
          <div className=" navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <button type="button"><i className="fa-solid fa-plus fa-sm pr-1" />Thêm mới</button>
              </li>
            </ul>
          </div>
          <div className=" navbar-collapse d-flex justify-content-end">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <button type="button"><i className="fa-solid fa-file-export fa-sm pr-1" />Xuất Excel</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainSectionAction;