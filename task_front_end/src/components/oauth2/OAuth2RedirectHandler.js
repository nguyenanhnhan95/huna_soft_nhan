import { useNavigate, useSearchParams } from "react-router-dom";
import { ACCESS_TOKEN, PROVIDER_ID, PROVIDER_SOCIAL } from "../../constants/login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { findByUser } from "../../slice/user";
import { createHeader } from "../../config/common";
const http = "http://localhost:8080/user/me";
function OAuth2RedirectHandle() {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const token = searchParams.get('token');
        const error = searchParams.get('error');
        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            dispatch(findByUser(http, createHeader(token))).then((user) => {
                navigate("/home")
        })
        } else {
            console.log(error)
            navigate("/login")
        }
    }, [])
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
export default OAuth2RedirectHandle;