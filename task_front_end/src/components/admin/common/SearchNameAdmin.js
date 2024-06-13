import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQueryParameter } from "../../../slice/main/actionAdmin";
import { debounce } from "../../../constants/common";
function SearchNameAdmin(props) {
    const {  handleShowAdvanced } = props;
    const { itemSearch, queryParameter } = useSelector((state) => state.actionAdmin)
    const [query, setQuery] = useState(queryParameter)
    const dispatch = useDispatch();
    const handleSearch = useCallback(() => {
        dispatch(createQueryParameter(query))
    }, [query, dispatch])
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
    const debouncedHandleEnterData = useCallback(debounce(handelEnterData, 500), []);
    return (
        <div className="row container-content-search-head">
            <div className={itemSearch.searchAdvanced.style.display === 'none' ? 'col-12 col-md-9 col-xl-10 container-content-search-name' : 'col-12 col-md-9 col-xl-10 container-content-search-name'} >
                <input type="text" placeholder="Nhập tên " onChange={(event) => debouncedHandleEnterData({ name: event.target.value })} />
                <button type="button" onClick={handleSearch}>
                    <i className="fa-solid fa-magnifying-glass" />
                </button>
            </div>
            <div className="col-12 col-md-3 col-xl-2 container-content-option-advanced" style={{ display: itemSearch.searchAdvanced.style.display }} onClick={handleShowAdvanced} >
                <button type="button" >
                    Lọc nâng cao<i className="fa-solid fa-chevron-down " />
                </button>
            </div>
        </div>
    )
}
export default memo(SearchNameAdmin);