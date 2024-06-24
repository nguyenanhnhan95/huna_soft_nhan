import { Formik, Form, ErrorMessage, Field } from "formik";
import "../../../../css/admin/shop/promotion/contentForm.css"
import { memo } from "react";
import * as yup from "yup";
import { DatePickerField } from "../../../composite/formik/DatePickerField";
function ContentForm(props) {
    const { handleSave, buttonRef, initialForm } = props;
    console.log(initialForm)
    return (
        <div className="main-content-form-promotion" >
            <div className="card card-form-promotion">
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        name: initialForm.name,
                        code: initialForm.code,
                        description: initialForm.description,
                        discountRate: initialForm.discountRate,
                        startDate: new Date(initialForm.startDate),
                        endDate:initialForm.endDate===null? null: new Date(initialForm.endDate),
                    }}
                    validationSchema={yup.object({
                        name: yup.string().required("Chưa nhập tên :"),
                        code: yup.string().required("Chưa nhập mã code :")
                            .matches(/^\d+\.?\d*$/, "Nhập mã code không phù hợp: ex :012345678"),
                        discountRate: yup.number().required("Chưa nhập mã giảm giá")
                            .min(1, "Gía trị nhỏ nhất 1"),
                        startDate: yup.date()
                            .nullable()  // Cho phép để trống
                            .notRequired(),
                            // .when('endDate', {
                            //     is: null,
                            //     then: yup.date().min(new Date(), "Nhập ngày không phù hợp: ")
                            // }),
                        endDate: yup.date()
                            .nullable()  // Cho phép để trống
                            .notRequired()
                            .min(yup.ref('startDate'), "Ngày kết thúc phải sau ngày bắt đầu")
                    })}
                    onSubmit={(data, { setErrors }) =>
                        handleSave(data, setErrors)
                    }
                >
                    <Form>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <label htmlFor="name">Tên</label>
                                    <Field name="name" className="form-control" type="text" />
                                    <ErrorMessage className="form-text form-error" name='name' component='div' />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label htmlFor="code">Mã code</label>
                                    <Field name="code" className="form-control" type="text" />
                                    <ErrorMessage className="form-text form-error" name='code' component='div' />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label htmlFor="discountRate">Phần trăm giảm giá</label>
                                    <Field name="discountRate" className="form-control" type="number" />
                                    <ErrorMessage className="form-text form-error" name='discountRate' component='div' />
                                </div>
                                <div className="col-12 col-md-4  mt-2">
                                    <label htmlFor="description">Mô tả</label>
                                    <Field name="description" className="form-control" as="textarea" />
                                </div>
                                <div className="col-12 col-md-4  mt-2">
                                    <label htmlFor="startDate">Ngày bắt đầu</label>
                                    <Field name="startDate" component={DatePickerField} className="form-control" type="date" />
                                    <ErrorMessage className="form-text form-error" name='startDate' component='div' />
                                </div>
                                <div className="col-12 col-md-4  mt-2">
                                    <label htmlFor="endDate">Ngày kết thúc</label>
                                    <Field name="endDate" component={DatePickerField} className="form-control" type="date" />
                                    <ErrorMessage className="form-text form-error" name='endDate' component='div' />
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
export default memo(ContentForm);