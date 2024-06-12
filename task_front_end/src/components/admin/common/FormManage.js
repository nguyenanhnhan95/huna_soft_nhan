import { memo, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createDataEdit, editDataAdmin, getDataByIdAdmin, onClickSaveAction, saveDataAdmin } from "../../../slice/main/actionAdmin";
import { toastError, toastSuccess } from "../../../config/toast";
import { validation } from "../../../utils/validation";

function FormManage({Form}){
    const { loading,editForm,httpApi,httpNavigate,close,itemSearch} = useSelector((state) => state.actionAdmin)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const buttonRef=useRef(null);
    const {id} = useParams();
    useEffect(()=>{
        console.log(id)
        dispatch(onClickSaveAction({buttonSave:buttonRef.current}))
        if(id!=undefined && validation.isNumber(id)){
            console.log(id)
            getDataEdit()
        }else{
            // dispatch(createDataEdit(initialForm))
        }  
    },[id])
    const getDataEdit=useCallback(async()=>{
        try{
            console.log(id)
            const response = await dispatch(getDataByIdAdmin({http:httpApi,data:id*1})).unwrap();
            if(response.code===200){
                dispatch(createDataEdit(response.result))
            }
        }catch(error){
            toastError("Dữ liệu đang lỗi!")
        }
        
    },[httpApi,id])
    const handleSave = useCallback(async (value, setErrors) => {
        try {
  
            if(id!=undefined && validation.isNumber(id)){
                const response = await dispatch(editDataAdmin({ http: httpApi,id:id, data: value })).unwrap()
            }else{
                const response = await dispatch(saveDataAdmin({ http: httpApi, data: value })).unwrap()
            }
            toastSuccess("Bạn đã lưu dữ liệu thành công")
            if (close) {
                
                navigate(httpNavigate)
            }

           
        } catch (error) {
            setErrors(error.result)
        }
    },[id,httpApi,close])
    return(
        <Form buttonRef={buttonRef} initialForm={editForm} handleSave={handleSave}/>
    )
}
export default memo(FormManage);