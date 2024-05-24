import logo_google from "../../img/header/logo_google.png"
import logo_facebook from "../../img/header/logo_facebook.png"
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, ACCESS_TOKEN } from '../../constants/login';
import { Link } from "react-router-dom";
function SocialLogin() {
    return (
        <div className="submit-social d-flex align-items-center justify-content-center">
            <Link to={GOOGLE_AUTH_URL}><img src={logo_google} className="mr-2" /></Link>
            <Link to={FACEBOOK_AUTH_URL}><img src={logo_facebook} className="ml-2" /></Link>
        </div>
    )
}
export default SocialLogin;