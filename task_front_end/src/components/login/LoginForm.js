import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { loginAuth } from "../../services/login";
import axios from "axios";
import { ACCESS_TOKEN, PROVIDER_ID, PROVIDER_LOCAL } from "../../constants/login";
import { useNavigate } from "react-router-dom";
function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const handleLogin = async (loginRequest, setErrors) => {
        // setErrors({ name: "Tên đăng nhập hoặc mật khẩu không đúng." });
        try {
            const response = await loginAuth(loginRequest)
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            localStorage.setItem(PROVIDER_ID, PROVIDER_LOCAL);
            navigate("/home")
        } catch (error) {
            setErrors(error.response.data.result);
        }
        // try {
        //     console.log(loginRequest)
        //     const response = await axios.post("http://localhost:8080/auth/login", loginRequest)
        //     console.log(response);
        // } catch (error) {
        //     setErrors(error.response.data.result);
        // }

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
                    <div className="login__left-input-name">
                        <div className="login__left-title-name">
                            <label htmlFor="name">Tên đăng nhập</label>
                        </div>
                        <div className="login__left-title-input">
                            <Field name="name" id="name" type="text" placeholder="join" />
                            <ErrorMessage className="login__left-title-error" name='name' component='div' />
                        </div>
                    </div>
                    <div className="login__left-input-name">
                        <div className="login__left-title-name">
                            <label htmlFor="password">Mật khẩu</label>
                        </div>
                        <div className="login__left-title-input login__left-title-input-password">
                            <Field name='password' id="password" type={showPassword ? "text" : "password"} placeholder="........" />
                            <ErrorMessage name='password' className="login__left-title-error" component='div' />
                            {showPassword ?
                                <i className="fa-solid fa-eye-slash" onClick={() => setShowPassword(false)} />
                                :
                                <i className="fa-solid fa-eye" onClick={() => setShowPassword(true)}></i>
                            }
                        </div>
                    </div>
                    <div className="login__left-input-name login__left-input-name-checkbox">
                        <input type="checkbox" defaultChecked="true" />
                        <span>Duy trì đăng nhập</span>
                    </div>
                    <div className="login__left-input-name login__left-input-name-button">
                        <button type='submit'>Đăng nhập</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default LoginForm;