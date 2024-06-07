import { Formik, Form, Field, ErrorMessage, } from "formik";
import * as yup from "yup";
import "../../../css/admin/variation/contentForm.css"
import { useDispatch, useSelector } from "react-redux";
import { createDataEdit, editDataAdmin, getDataByIdAdmin, handleSave, onClickSaveAction, saveDataAdmin, transferHandleAction } from "../../../slice/main/actionAdmin";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { variationHttp } from "../../../constants/htttp";
import { toastDefault, toastError, toastInformation, toastSuccess, toastWarning } from "../../../config/toast";
import { validation } from "../../../regex/common";

function ContentForm() {
    const { loading,dataEdit,httpApi,httpNavigate,close} = useSelector((state) => state.actionAdmin)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const buttonRef=useRef(null);
    const {id} = useParams();
    useEffect(()=>{
        window.scrollTo(0, 0,'smooth')
        dispatch(onClickSaveAction({buttonSave:buttonRef.current}))
        if(id!=undefined && validation.isNumber(id)){
            getDataEdit()
        }else{
            dispatch(createDataEdit({name:"",description:""}))
        }  
    },[])
    const getDataEdit=async()=>{
        try{
            const response = await dispatch(getDataByIdAdmin({http:httpApi,data:id*1})).unwrap();
        }catch(error){
            toastError("Dữ liệu đang lỗi!")
        }
        
    }
    const handleSave = async (value, setErrors) => {
        console.log(http)
        try {
            if(id!=undefined && validation.isNumber(id)){
                const response = await dispatch(editDataAdmin({ http: httpApi,id:id, data: value })).unwrap()
            }else{
                const response = await dispatch(saveDataAdmin({ http: httpApi.variation, data: value })).unwrap()
            }
            toastSuccess("Bạn đã lưu dữ liệu thành công")
            if (close) {
                console.log(close)
                navigate(httpNavigate)
            }
        } catch (error) {
            setErrors(error.result)
        }
    }

    return (
        <div className="main-content-form-variation" >
            <div className="card card-form-variation">
                <Formik
                enableReinitialize={true}
                initialValues={{
                    name:dataEdit===null?'': dataEdit.name,
                    description:dataEdit===null?'': dataEdit.description,
                }}
                    validationSchema={yup.object({
                        name: yup.string().required("Chưa nhập tên :")
                    })}
                    onSubmit={(data, { setErrors }) =>
                        handleSave(data, setErrors)
                    }
                >
                    <Form>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="name">Tên</label>
                                    <Field name="name"  className="form-control" type="text" />
                                    <ErrorMessage className="form-text form-error" name='name' component='div' />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="description">Mô tả</label>
                                    <Field name="description" className="form-control" as="textarea" />
                                </div>
                            </div>
                            <button type="submit" style={{ display: 'none' }} ref={buttonRef}></button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default ContentForm;