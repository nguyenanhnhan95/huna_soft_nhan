import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findByUser } from "../../slice/user";
import { ACCESS_TOKEN, PROVIDER_ID, PROVIDER_LOCAL, USER_LOGIN } from "../../constants/login";
import { useLocation, useNavigate } from "react-router-dom";
import "../../css/headerUser.css"
function getUserLogin() {
    let user = localStorage.getItem(USER_LOGIN);
    console.log(user)
    if (user) {
        user = JSON.parse(user);
    } else {
        user = null;
    }
    return user;
}
function HeaderUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [person,setPerson]=useState(getUserLogin())
    const { authenticate, user, status, loading, error } = useSelector((state) => state.user)
    const [isModalUserVisible, setIsModalUserVisible] = useState(false);
    const headerUserRef = useRef(null);
    const headerUserModalRef = useRef(null);

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
    useEffect(()=>{
        if(localStorage.getItem(USER_LOGIN)!==null){
            setPerson(JSON.parse(localStorage.getItem(USER_LOGIN)))
        }else{
            if(user!==null){
                console.log(user)
                setPerson(user)
            }else{
                console.log(user)
                setPerson(null);
            }           
        }
    },[status])
    console.log(user)
    console.log(status)
    console.log(error)
    const handleLogout = () => {
        let token = localStorage.getItem(ACCESS_TOKEN);
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(PROVIDER_ID);
        localStorage.removeItem(USER_LOGIN);
        window.location.href = `http://localhost:8080/logout?token=${token}`;
    }
    return (
        <>
             <>
             {person ?
            <div className="header-user dropdown d-flex justify-content-center" ref={headerUserRef} onClick={handleHeaderUserClick}>
                <div className="header-user-item"><span>{person.name.toLowerCase().substr(0,1)}</span></div>
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