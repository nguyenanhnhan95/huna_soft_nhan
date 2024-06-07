import { Formik, Form, Field, ErrorMessage, } from "formik";
import * as yup from "yup";
import "../../../css/admin/variationOption/contentForm.css"
import { useDispatch, useSelector } from "react-redux";
import { handleSave, saveDataAdmin, transferHandleAction } from "../../../slice/main/actionAdmin";
import { linkHttp, linkHttpAdmin, variationOptionHttp } from "../../../constants/htttp";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
function ContentForm() {
    const { loading, data, save, edit, close, success, error } = useSelector((state) => state.actionAdmin)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const buttonRef = useRef(null)
    useEffect(() => {
        if (save) {
            buttonRef.current.click();
        }
    }, [save])
    const handleSave = async (value, setErrors) => {
        try {
            const response = await dispatch(saveDataAdmin(variationOptionHttp.variationOptionSave, value)).unWrap()
        } catch (error) {
            console.log(save)
            console.log(error)
        }
    }
    return (
        <div className="main-content-form-variation-option">
            <div className="card card-form-variation-option">
                <Formik initialValues={{
                    name: "",
                    description: "",
                }}
                    validationSchema={yup.object({
                        name: yup.string().required("Chưa nhập tên :")
                    })}
                    onSubmit={(data, { setErrors }) =>
                        handleSave()
                    }
                >
                    <Form>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="name">Tên</label>
                                    <Field name="name" className="form-control" type="text" />
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