import "../../css/login.css"
import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";
function Login(){
    return (
        <div className="login__wrap">
        <div className="login__pc login__all__screen">
          <div className="login__right">
          </div>
          <div className="login__left">
            <div className="login__left-title">
              Đăng Nhập
            </div>
            <LoginForm/>
            <div className="login__left-input-name login__left-input-name-separator">
              Hoặc
            </div>
            <SocialLogin/>
          </div>
        </div>
      </div>
    );
}
export default Login;