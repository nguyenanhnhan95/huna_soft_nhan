import { useDispatch, useSelector } from "react-redux";
import "../../css/common/tableManage.css"
import ActionDropdown from "../common/ActionDropdown";
import axios from "axios";
import { choicePage, searchDataAdmin, selectSize } from "../../slice/main/actionAdmin";
import { useEffect } from "react";
function TableManage(props) {
  const{queryParameter,list,httpApi,loading,rerenderView} = useSelector((state)=>state.actionAdmin)
  const dispatch= useDispatch();
  const { nameColumn, dataActions } = props;
  useEffect(()=>{
    getListResult();
  },[queryParameter,rerenderView])
  const getListResult=async()=>{
    try{
      const encodedQuery = encodeURIComponent(JSON.stringify(queryParameter));
      const response = await dispatch(searchDataAdmin({ http: httpApi+'/search', data: encodedQuery })).unwrap();
    }catch(error){
      console.log(error)
    }
  }
  const handleSelectSize=(size)=>{
    dispatch(selectSize(size))
  }
  const handleChoicePage=(page)=>{
    dispatch(choicePage(page))
  }
  const listPage = [];
  for (let i = 0; i < list.total/queryParameter.size; ++i) {
    listPage.push(
      <li onClick={() => handleChoicePage(i)} key={i}>{i}</li>
    );
  }
  return (
    <div className="main-content-data pb-3">
      <div className="container-fluid container-content-data table-responsive">
        <table className="table table-hover ">
          <thead className="table-thead">
            <tr >
              {nameColumn.map((each, index) => (
                <th scope="col" style={{ width: each.style.width }} key={index}>{each.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list && list.result.map((each,index)=>(
              <tr key={index}>
              <th scope="row">{index+1+(queryParameter.size*queryParameter.page)}</th>
              <td>{each.name}</td>
              <td className="table-action">
                <ActionDropdown dataActions={dataActions} id={each.id} http={http} />
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between row container-content-data-page ">
        <div className="col-12 d-flex justify-content-end align-items-center">
          <div className="dataTables_info  container-content-data-page-item">
            [
            <span>{(queryParameter.page)*queryParameter.size+1}</span>-
            <span>{((queryParameter.page+1)*queryParameter.size)>list.total? list.total:((queryParameter.page+1)*queryParameter.size)}</span>/
            <span>{list.total}</span>]
          </div>
          <div className="table-selection-page container-content-data-page-item">
            <label>
              <select defaultValue={queryParameter.size} onChange={(event) => handleSelectSize(event.target.value*1)}>
                <option >5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
            </label>
          </div>
          <div className="table-items-page container-content-data-page-item">
            <ul>
            {listPage.length===1 ? '' : listPage}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TableManage;