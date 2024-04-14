import { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findByUser } from "../../slice/user";
import { ACCESS_TOKEN, PROVIDER_ID, PROVIDER_LOCAL } from "../../constants/login";
import { useNavigate } from "react-router-dom";
const httpCustomer = "http://localhost:8080/user";
const httpAdmin = "http://localhost:8080/admin";
function HeaderUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Authenticate, user, status, error } = useSelector((state) => state.user)
    useEffect(() => {
        if (localStorage.getItem(ACCESS_TOKEN) !== null) {
            if (localStorage.getItem(PROVIDER_ID)) {
                if (localStorage.getItem(PROVIDER_ID) === PROVIDER_LOCAL) {
                    dispatch(findByUser(httpAdmin));
                } else {
                    dispatch(findByUser(httpCustomer));
                }
            }
        }
    }, [])
    console.log(error)
    console.log(Authenticate)
    console.log(user)
    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(PROVIDER_ID);
        window.location.href = "http://localhost:8080/logout";
    }
    return (
        <>
            {Authenticate ?
                <div className="header__information__user-item "><span>{user.name}</span><i className="fa-solid fa-user fa-sm" />
                    <div className="header__information__user-option-items">
                        <div className="header__information__user-option-item"><i className="fa-solid fa-gear" />Thông Tin
                            Tài
                            Khoản
                        </div>
                        <div className="header__information__user-option-item" onClick={() => handleLogout()} ><i className="fa-solid fa-right-from-bracket" />Đăng xuất
                        </div>
                    </div>
                </div>
                :
                <div class="header__information__user-item" onClick={() => navigate("/login")}>Đăng Nhập</div>
            }


        </>
    )
}
export default memo(HeaderUser);