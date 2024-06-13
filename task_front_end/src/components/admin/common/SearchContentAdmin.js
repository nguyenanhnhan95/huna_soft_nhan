import React, { memo, useCallback, useState } from "react";
import "../../../css/admin/common/searchContentAdmin.css"
import { useDispatch, useSelector } from "react-redux";
import { createQueryParameter } from "../../../slice/main/actionAdmin";
import { debounce } from "../../../constants/common";
import { componentsAdvanced } from "../../../utils/common";
import SearchNameAdmin from "./SearchNameAdmin";
function SearchContentAdmin() {
  const { itemSearch, queryParameter } = useSelector((state) => state.actionAdmin)

  const [query, setQuery] = useState(queryParameter)

  const [show, setShow] = useState(false);

  const handleShowAdvanced = useCallback(() => {
    setShow(show => !show)
  }, [])
  const handleSetQuery = useCallback((value) => {
    setQuery(value)
  }, [])
  
  return (
    <div className="search-content-admin">
      <form role="search">
        <div className={`container-fluid container-content-search ${show ? 'show' : ''}`} >
          <SearchNameAdmin  handleShowAdvanced={handleShowAdvanced} />
          <div className="row container-content-search-advanced">
            {itemSearch.items.map((each, index) => {
              const Component = componentsAdvanced[each.component];
              if (!Component) {
                return null; // Skip rendering if the component is not defined
              }
              return (
                <Component
                  handleSetQuery={handleSetQuery}
                  query={queryParameter}
                  item={each}
                  key={index}
                />
              );
            })}

          </div>
        </div>
      </form>
    </div>
  )
}
export default memo(SearchContentAdmin);