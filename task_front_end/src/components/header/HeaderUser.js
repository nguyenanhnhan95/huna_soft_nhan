import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findByUser, userSlice } from "../../slice/user";
import { ACCESS_TOKEN, PROVIDER_ID, PROVIDER_LOCAL, USER_LOGIN } from "../../constants/login";
import { useLocation, useNavigate } from "react-router-dom";
import "../../css/headerUser.css"
import { createHeader } from "../../config/common";
import { getRefreshToken } from "../../services/token";
import store from "../../store/store";
function HeaderUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [person, setPerson] = useState(null)
    const { authenticate, user, status, loading, error } = useSelector((state) => state.user)
    const [isModalUserVisible, setIsModalUserVisible] = useState(false);
    const headerUserRef = useRef(null);
    const headerUserModalRef = useRef(null);
    const http = "http://localhost:8080/user/me";
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
    useEffect(() => {
        if (localStorage.getItem(ACCESS_TOKEN) !== null) {
            getUserData(localStorage.getItem(ACCESS_TOKEN));
        }
    }, [])
    const getUserData = async (access) => {
        try {
            const response = await dispatch(findByUser(http, createHeader(access))).unwrap();
            setPerson(response)
        } catch (error) {
            if (error.status) {
                switch (error.status) {
                    case 4007:
                        localStorage.removeItem(ACCESS_TOKEN);
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
    }
    const handleRefreshToken = async () => {
        try {
            const response = await getRefreshToken(localStorage.getItem(ACCESS_TOKEN))
            localStorage.setItem(ACCESS_TOKEN,response.accessToken)
            getUserData(response.accessToken)

        } catch (error) {
            localStorage.removeItem(ACCESS_TOKEN);
            navigate("/login");
        }

    }
    const handleLogout = () => {
        let token = localStorage.getItem(ACCESS_TOKEN);
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(PROVIDER_ID);
        localStorage.removeItem(USER_LOGIN);
        window.location.href = `http://localhost:8080/logout?token=${token}`;
    }
    console.log(person)
    return (
        <>
            <>
                {person ?
                    <div className="header-user dropdown d-flex justify-content-center" ref={headerUserRef} onClick={handleHeaderUserClick}>
                        <div className="header-user-item"><span>{person.name.toLowerCase().substr(0, 1)}</span></div>
                        <div className={`dropdown-menu dropdown-menu-user ${isModalUserVisible ? 'show' : 'close'}`} ref={headerUserModalRef}>
                            <div className="dropdown-item"><i className="fa-solid fa-user-gear mr-1"></i>Cập nhập tài khoản</div>
                            <div className="dropdown-item" onClick={() => handleLogout()}><i className="fa-solid fa-power-off mr-2"></i>Đăng xuất</div>
                        </div>
                    </div>
                    : <div className="header-user-login" onClick={() => navigate("/login")}>Đăng nhập</div>
                }
            </>

        </>
    )
}
export default memo(HeaderUser);