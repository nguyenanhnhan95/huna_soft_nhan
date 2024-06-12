import { useDispatch, useSelector } from "react-redux";
import "../../css/composite/tableManage.css"
import { searchDataAdmin } from "../../slice/main/actionAdmin";
import { memo, useCallback, useEffect } from "react";
import PageManage from "./PageManage";
function TableManage() {
  const{queryParameter,nameColumn,list,httpApi,TBodyTable} = useSelector((state)=>state.actionAdmin)
  const dispatch= useDispatch();
  useEffect(()=>{
    getListResult();
  },[queryParameter,httpApi])
  const getListResult=useCallback(async()=>{
    try{
      const encodedQuery = encodeURIComponent(JSON.stringify(queryParameter));
      const response = await dispatch(searchDataAdmin({ http: httpApi+'/search', data: encodedQuery })).unwrap();
      
    }catch(error){
      console.log(error)
    }
  },[httpApi,queryParameter])
  return (
    <div className="main-content-data pb-3">
      <div className="container-fluid container-content-data table-responsive">
        <table className="table table-hover ">
          <thead className="table-thead">
            <tr >
              {nameColumn.map((each, index) => (
                <th scope="col" style={{ minWidth: each.style.width }} key={index}>{each.name}</th>
              ))}
            </tr>
          </thead>
         <TBodyTable list={list} queryParameter={queryParameter}/>
        </table>
      </div>
      <PageManage/>
    </div>
  )
}
export default memo(TableManage);