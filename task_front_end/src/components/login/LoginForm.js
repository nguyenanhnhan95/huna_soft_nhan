import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { loginAuth } from "../../services/login";
import axios from "axios";
import Cookies from 'js-cookie'
import { ACCESS_TOKEN, PROVIDER_ID, PROVIDER_LOCAL } from "../../constants/login";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginForm, loginFormAuth } from "../../slice/login";
import { findByUser } from "../../slice/user";
import { createHeader } from "../../config/common";
import { current } from "@reduxjs/toolkit";
import store, { createReducer } from "../../store/store";
const http = "http://localhost:8080/user/me";
function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [keepLogin,setKeepLogin] = useState(false)
    console.log(store.getState())
    const { loading, error,accessToken } = useSelector((state) => state.loginForm)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async (loginRequest, setErrors) => {
        try{
            const token= await dispatch(loginFormAuth({...loginRequest,flagKeep:keepLogin})).unwrap();
            localStorage.setItem(ACCESS_TOKEN,token.accessToken);
            Cookies.remove('keepLogin', { domain: 'localhost', path: '/' });
            navigate("/admin")
        } catch(error){
            console.log(error)
            setErrors(error.result)
        }
    }
    const handleKeepLogin=(currentKeepLogin)=>{
        if(currentKeepLogin){
            setKeepLogin(false);
            Cookies.remove('keepLogin', { domain: 'localhost', path: '/' });
            Cookies.set('keepLogin',false,{ domain: 'localhost', path: ''  })
        }else{
            Cookies.remove('keepLogin', { domain: 'localhost', path: '/' });
            Cookies.set('keepLogin',true,{ domain: 'localhost', path: '' })
            setKeepLogin(true);
        }
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
                            <Field type={showPassword ? 'text':'password'} name="password" className="form-control " id="password" placeholder="············" />
                            <ErrorMessage name='password' className="form-text form-error" component='div' />
                            {showPassword ?
                                <i className="fa-solid fa-eye" onClick={() => setShowPassword(false)} />
                                :
                                <i className="fa-solid fa-eye-slash" onClick={() => setShowPassword(true)}></i>
                            }
                        </div>
                        <div className="mb-3 form-check d-flex align-items-center">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" defaultChecked={keepLogin} 
                            onChange={()=>handleKeepLogin(keepLogin)} />
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