import { useRef, useState } from "react";
import "../../css/admin/searchContentAdmin.css"
function SearchContentAdmin() {
  const [show,setShow] = useState(false);
  const handleShowAdvanced = () => {
    setShow(!show)
  }
  return (
    <div className="search-content-admin">
      <div className={`container-fluid container-content-search ${show ? 'show':''}`} >
        <div className="row container-content-search-head">
          <div className="col-12 col-md-10 container-content-search-name ">
            <input type="text" placeholder="Nhập tên " />
            <button type="button">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>
          <div className="col-12 col-md-2 container-content-option-advanced" onClick={()=>setShow(!show)} >
            <button type="button">
              Lọc nâng cao<i className="fa-solid fa-chevron-down " />
            </button>
          </div>
        </div>
        <div className="row container-content-search-advanced">
          <div className="col-12 col-md-3 container-content-search-advanced-item">
            <select>
              <option value selected disabled hidden>Choose here</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={4}>Four</option>
              <option value={5}>Five</option>
            </select>
          </div>
          <div className="col-12 col-md-3 container-content-search-advanced-item">
            <select>
              <option value selected disabled hidden>Choose here</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={4}>Four</option>
              <option value={5}>Five</option>
            </select>
          </div>
          <div className="col-12 col-md-3 container-content-search-advanced-item">
            <select>
              <option value selected disabled hidden>Choose here</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={4}>Four</option>
              <option value={5}>Five</option>
            </select>
          </div>
          <div className="col-12 col-md-3 container-content-search-advanced-item">
            <select>
              <option value selected disabled hidden>Choose here</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={4}>Four</option>
              <option value={5}>Five</option>
            </select>
          </div>
          <div className="col-12 col-md-3 container-content-search-advanced-item">
            <select>
              <option value selected disabled hidden>Choose here</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={4}>Four</option>
              <option value={5}>Five</option>
            </select>
          </div>
          <div className="col-12 col-md-3 container-content-search-advanced-item">
            <select>
              <option value selected disabled hidden>Choose here</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={4}>Four</option>
              <option value={5}>Five</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SearchContentAdmin;