import { memo,  useCallback,  useEffect,useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findByUser } from "../../slice/user";
import {  PROVIDER_ID,  USER_LOGIN, constLogin } from "../../constants/login";
import {useNavigate } from "react-router-dom";
import "../../css/header/headerUser.css"
import { createHeader } from "../../config/common";
import { getRefreshToken } from "../../services/token";
import { linkHttp } from "../../constants/htttp";
function HeaderUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {  user, } = useSelector((state) => state.user)
    const [isModalUserVisible, setIsModalUserVisible] = useState(false);
    const headerUserRef = useRef(null);
    const headerUserModalRef = useRef(null);
    
    const handleRefreshToken =useCallback( async () => {
        try {
            const response = await getRefreshToken(localStorage.getItem(constLogin.ACCESS_TOKEN))
            localStorage.setItem(constLogin.ACCESS_TOKEN, response.accessToken)
            getUserData()

        } catch (error) {
            localStorage.removeItem(constLogin.ACCESS_TOKEN);
            navigate("/login");
        }
    },[navigate])
    const getUserData =useCallback( async () => {
        try {
            await dispatch(findByUser(linkHttp.getUserHeader, createHeader())).unwrap();
        } catch (error) {
            if (error.status) {
                switch (error.status) {
                    case 4007:
                        localStorage.removeItem(constLogin.ACCESS_TOKEN);
                        navigate("/login");
                        break;
                    case 4008:
                        handleRefreshToken()
                        break;
                    default:
                        navigate("/login");
                }
            }
        }
    },[dispatch,navigate,handleRefreshToken])
    useEffect(() => {
        if (localStorage.getItem(constLogin.ACCESS_TOKEN) !== null) {
            getUserData(localStorage.getItem(constLogin.ACCESS_TOKEN));
        }
    },[getUserData])
  
    
    useEffect(() => {
        function handleClickOutside(event) {
            if (headerUserRef.current && !headerUserRef.current.contains(event.target)) {
                setIsModalUserVisible(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleHeaderUserClick = () => {
        setIsModalUserVisible(!isModalUserVisible);
    };
    
    const handleLogout = () => {
        let token = localStorage.getItem(constLogin.ACCESS_TOKEN);
        localStorage.removeItem(constLogin.ACCESS_TOKEN);
        localStorage.removeItem(PROVIDER_ID);
        localStorage.removeItem(USER_LOGIN);
        window.location.href = `http://localhost:8080/logout?token=${token}`;
    }
    return (
        <>

            { user ?
                <div className="header-user dropdown d-flex justify-content-center" ref={headerUserRef} onClick={handleHeaderUserClick}>
                    <div className="header-user-item"><span>{user.name.toLowerCase().substr(0, 1)}</span></div>
                    <div className={`dropdown-menu dropdown-menu-user ${isModalUserVisible ? 'show' : 'close'}`} ref={headerUserModalRef}>
                        <div className="dropdown-item"><i className="fa-solid fa-user-gear mr-1"></i>Cập nhập tài khoản</div>
                        <div className="dropdown-item" onClick={() => handleLogout()}><i className="fa-solid fa-power-off mr-2"></i>Đăng xuất</div>
                    </div>
                </div>
                : <div className="header-user-login" onClick={() => navigate("/login")}>Đăng nhập</div>
            }


        </>
    )
}
export default memo(HeaderUser);