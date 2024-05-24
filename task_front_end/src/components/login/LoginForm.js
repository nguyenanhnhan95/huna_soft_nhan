import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { loginAuth } from "../../services/login";
import axios from "axios";
import { ACCESS_TOKEN, PROVIDER_ID, PROVIDER_LOCAL } from "../../constants/login";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFormAuth } from "../../slice/login";
import { findByUser } from "../../slice/user";
import { createHeader } from "../../config/common";
const http = "http://localhost:8080/user/me";
function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const { loading, error } = useSelector((state) => state.loginForm)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (loginRequest, setErrors) => {
        dispatch(loginFormAuth(loginRequest)).then((result) => {
            dispatch(findByUser(http, createHeader(result.payload.accessToken))).then((user) => {
                navigate("/admin")
            })
        })
            .catch((error) => {
                setErrors(error);
            })
    }
    return (
        <>
            <Formik initialValues={{
                name: "",
                password: "",
            }}
                validationSchema={yup.object({
                    name: yup.string().required("Chưa nhập email :"),
                    password: yup.string().required("Chưa nhập mật khẩu")
                })}
                onSubmit={(value, { setErrors }) =>
                    handleLogin(value, setErrors)
                }
            >
                <Form>
                    <div className="form-login">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Tên đăng nhập</label>
                            <Field type="text" name="name" className="form-control" id="name" placeholder="join" />
                            <ErrorMessage className="form-text form-error" name='name' component='div' />
                        </div>
                        <div className="mb-3 form-password">
                            <label htmlFor="password" className="form-label">Mật khẩu</label>
                            <Field type="password" name="password" className="form-control " id="password" placeholder="············" />
                            <ErrorMessage name='password' className="form-text form-error" component='div' />
                            {showPassword ?
                                <i className="fa-solid fa-eye-slash" onClick={() => setShowPassword(false)} />
                                :
                                <i className="fa-solid fa-eye" onClick={() => setShowPassword(true)}></i>
                            }
                        </div>
                        <div className="mb-3 form-check d-flex align-items-center">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Duy trì đăng nhập</label>
                        </div>
                        <button type="submit" className="form-submit mb-3">{loading ? 'Loading....' : 'Đăng nhập'}</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default LoginForm;