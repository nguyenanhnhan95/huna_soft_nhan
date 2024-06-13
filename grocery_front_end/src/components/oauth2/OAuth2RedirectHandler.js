import { useNavigate, useSearchParams } from "react-router-dom";
import {  constLogin } from "../../constants/login";
import { memo, useEffect } from "react";
import Cookies from 'js-cookie'
function OAuth2RedirectHandle() {
    const navigate = useNavigate();
    const searchParams = useSearchParams();
    useEffect(() => {
        const keepLogin=Cookies.get('keepLogin')
        console.log(keepLogin)
        const token = searchParams.get('token');
        const error = searchParams.get('error');
        if (token) {
            localStorage.setItem(constLogin.ACCESS_TOKEN, token);
            Cookies.remove('keepLogin', { domain: 'localhost', path: '/' });
            navigate("/home")
        } else {
            console.log(error)
            navigate("/login")
        }
    }, [navigate,searchParams])
    // const getUrlParameter=(name)=>{
    //     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    //     var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    //     var results = regex.exec(searchParams);
    //     return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));

    // };


    return (
        <>

        </>
    )
}
export default memo(OAuth2RedirectHandle);