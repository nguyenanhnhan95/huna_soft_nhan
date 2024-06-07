import { useCallback, useEffect, useRef, useState } from "react";
import "../../../css/admin/common/searchContentAdmin.css"
import { useDispatch } from "react-redux";
import { createQueryParameter } from "../../../slice/main/actionAdmin";
import { debounce } from "../../../constants/common";
function SearchContentAdmin(props) {
  const { itemSearch, queryParameter } = props;
  const[query,setQuery]= useState(queryParameter)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  useEffect(() => {
    dispatch(createQueryParameter(queryParameter))
  }, [])
  const handleSearch = (value) => {
    dispatch(createQueryParameter(query))
  }
  
  const handelEnterData = (value) => {
    Object.keys(queryParameter.criterias).forEach(key => {
      if (value.hasOwnProperty(key)) {
        // Logs the key if it exists in both objects
        let copyQueryParameter = {
          ...queryParameter,
          criterias: {
            ...queryParameter.criterias,
            [key]: value[key]
          }
        };
        setQuery(copyQueryParameter)
        // Logs the updated queryParameter object
      }
    })
  }
  const debouncedHandleEnterData = useCallback(debounce(handelEnterData, 500), [query]);

  console.log(query)
  return (
    <div className="search-content-admin">
      <form role="search">
        <div className={`container-fluid container-content-search ${show ? 'show' : ''}`} >
          <div className="row container-content-search-head">
            <div className={itemSearch.searchAdvanced.style.display === 'none' ? 'col-12 col-md-12 container-content-search-name' : 'col-12 col-md-10 container-content-search-name'} >
              <input type="text" placeholder="Nhập tên " onChange={(event) => debouncedHandleEnterData({ name: event.target.value })} />
              <button type="button" onClick={() => handleSearch()}>
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
            <div className="col-12 col-md-2 container-content-option-advanced" style={{ display: itemSearch.searchAdvanced.style.display }} onClick={() => setShow(!show)} >
              <button type="button" >
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
      </form>
    </div>
  )
}
export default SearchContentAdmin;