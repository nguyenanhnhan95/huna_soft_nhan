import { useCallback, useEffect, useState } from "react";
import "../../../css/admin/menus/menuAdmin.css"
import { getListMainMenu } from "../../../services/mainMenu";
import { createHeader } from "../../../config/common";
import React from 'react';
import { ctx } from "../../../constants/common";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onClickHandleOverPlay } from "../../../slice/main/overPlayMenu";
import logoBrand from "../../../img/header/logo-sky.png"
import { transferMenuToContentMain } from "../../../slice/main/menuContentMain";
import { commonResource } from "../../../common/menuAdmin";
import { constLogin } from "../../../constants/login";

function AdminMenu() {
  const isOpen = useSelector((state) => state.overPlayMenuMain.open)
  const [menus, setMenus] = useState([]);
  const [menuActive, setMenuActive] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let pathName = commonResource(location.pathname)
  const getListMenu = useCallback(async () => {
    const header = createHeader(localStorage.getItem(constLogin.ACCESS_TOKEN));
    try {
      let data = await getListMainMenu(header);
      setMenus(data)
    } catch (error) {
      console.log(error)
      // alert("nhan")
      if (error.response.data) {
        switch (error.response.status) {
          case 403:
            alert("không có quyền")
            navigate("/home")
            break;
          case 4006:
            navigate("/login")
            break;
          default:
            
        }
      } else {
        
      }
    }
  },[])
  useEffect(() => {
    getListMenu()
  }, [getListMenu])
  const handleChangeOpenMenu = (menu, flagMenu) => {
    if (flagMenu) {
      if (menuActive === null || menuActive !== menu) {
        setMenuActive(menu)
      } else {
        setMenuActive(null)
      }
    } else {
      dispatch(transferMenuToContentMain(menu))
    }
  }
  return (
    <div className={`main-menu  menu-fixed menu-light menu-accordion menu-shadow menu-native-scroll expanded ${isOpen ? `open` : ``}`} data-scroll-to-active="true">
      <div className="row">
        <div className="col-8">
          <div className="menu-logo">
            <img src={logoBrand} style={{ width: '130', height: '50px' }} />
          </div>
        </div>
        <div className="col-4 close-overPlay">
          <i className="fa-solid fa-xmark fa-2x" onClick={() => dispatch(onClickHandleOverPlay(false))}></i>
        </div>
      </div>
      <div className="main-menu-content ps ps--active-y">
        <ul id="main-menu-navigation" className="navigation navigation-main" data-menu="menu-navigation">
          {menus.length !== 0 && (
            <li className={`nav-item ${menus[0].href === pathName || pathName === '/admin' ? 'active' : ''}`}>
              <NavLink className="d-flex align-items-center" to={menus[0].href} >
                <i className="fa-solid fa-house" />
                <span className="menu-item text-truncate">Tổng quan</span>
              </NavLink>
            </li>
          )}
          {menus && menus.map((menu, index) => (
            <React.Fragment key={index}>
              {!menu.visible && menu.header && (
                <li className="navigation-header">
                  <span>{menu.title}</span>
                </li>
              )}
              {!menu.visible && !menu.header && index !== 0 && (
                <li className={`nav-item   menu-item-animating ${menu === menuActive ? 'open' : ''} ${menu.subMenus.length !== 0 ? 'has-sub ' : ''} `}   >
                  <div className={`d-flex align-items-center menu-head ${menu === menuActive ? 'active' : ''}`} onClick={() => handleChangeOpenMenu(menu, true)} >
                    <i className={menu.iconClass} />
                    <span className="menu-title text-truncate">{menu.title}</span>
                  </div>
                  {menu.subMenus && menu.subMenus.map((subMenu, zIndex) => (
                    <ul className="menu-content" key={zIndex}>
                      <li >
                        <NavLink className={`d-flex align-items-center ${subMenu.href === pathName ? 'active' : ''}`} to={`${ctx}${subMenu.href}`} onClick={() => handleChangeOpenMenu(subMenu, false)}>
                          <i className={subMenu.iconClass} />
                          <span className="menu-item text-truncate">{subMenu.title}</span>
                        </NavLink>
                      </li>
                    </ul>
                  ))}
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>

      </div>
    </div>
  )
}
export default AdminMenu;