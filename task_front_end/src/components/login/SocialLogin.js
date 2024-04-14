import logo_google from "../../img/google-logo.png"
import logo_facebook from "../../img/fb-logo.png"
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, ACCESS_TOKEN } from '../../constants/login';
import { Link } from "react-router-dom";
function SocialLogin() {
    return (
        <div className="login__left-input-name login__left-input-name-logo">
            <Link to={GOOGLE_AUTH_URL}><img src={logo_google} /></Link>
            <Link to={FACEBOOK_AUTH_URL}><img src={logo_facebook} /></Link>
        </div>
    )
}
export default SocialLogin;