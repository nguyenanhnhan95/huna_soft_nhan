import { useEffect, useState, memo, useRef } from "react";
import "../../css/main/mainMenu.css"
import { getListMainMenu } from "../../services/mainMenu";
import { ACCESS_TOKEN } from "../../constants/login";
import { createHeader } from "../../config/common";
import React from 'react';
import { ctx } from "../../constants/common";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onClickHandleOverPlay } from "../../slice/main/overPlayMenu";
import logoBrand from "../../img/header/logo-sky.png"
function MainMenu({ resource }) {
  const isOpen = useSelector((state) => state.overPlayMenuMain.open)
  const [menus, setMenus] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getListMenu()
  }, [])
  const getListMenu = async () => {
    const header = createHeader(localStorage.getItem(ACCESS_TOKEN));
    try{
      let data = await getListMainMenu(header);
      checkedMainMenu(data)
    }catch(error){
      
    }
  }
  useEffect(() => {
    checkedMainMenu(menus)
  }, [resource])
  function checkedMainMenu(arrays) {
    let newArray = [...arrays];
    let size = newArray.length;
    for (let i = 0; i < size; ++i) {
      if (newArray[i].href === resource) {
        newArray[i].active = !newArray[i].active;
      } else {
        newArray[i].active = false;
      }
      if (newArray[i].subMenus !== undefined) {
        let sizeSub = newArray[i].subMenus.length;
        for (let j = 0; j < sizeSub; ++j) {
          if (newArray[i].subMenus[j].href === resource) {
            newArray[i].active = true;
            newArray[i].subMenus[j].active = true;
          } else {
            newArray[i].subMenus[j].active = false;
          }
        }
      }
    }
    setMenus(newArray)
  }
  const checkResourceSame = (checkResource) => {
    console.log(checkResource)
    if (checkResource === resource) {
      checkedMainMenu(menus);
    }
  }
  return (
    <div className={`main-menu  menu-fixed menu-light menu-accordion menu-shadow expanded ${isOpen?`open`:``}`}   data-scroll-to-active="true">
      <div className="row">
        <div className="col-8">
          <div className="menu-logo">
            <img src={logoBrand} style={{ width: '130', height: '50px' }}  />
          </div>
        </div>
        <div className="col-4 close-overPlay">
        <i class="fa-solid fa-xmark fa-2x" onClick={()=>dispatch(onClickHandleOverPlay(false))}></i>
        </div>
      </div>
      <div className="main-menu-content ps ps--active-y">
        <ul id="main-menu-navigation" className="navigation navigation-main" data-menu="menu-navigation">
          {menus.length != 0 && (
            <li className={`nav-item ${menus[0].active ? 'active' : ''}`}>
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
                <li className={`nav-item  ${menu.active ? 'open menu-item-animating active' : ''} ${menu.subMenus.length !== 0 ? 'has-sub ' : ''}  `}>
                  <NavLink className="d-flex align-items-center" to={`${ctx}${menu.href}`} onClick={() => checkResourceSame(menu.href)} >
                    <i className={menu.iconClass} />
                    <span className="menu-title text-truncate">{menu.title}</span>
                  </NavLink>
                  {menu.subMenus && menu.subMenus.map((subMenu, zIndex) => (
                    <ul className="menu-content" key={zIndex}>
                      <li >
                        <NavLink className={`d-flex align-items-center ${subMenu.active ? 'active' : ''}`} to={`${ctx}${subMenu.href}`} onClick={() => checkResourceSame(`${ctx}${menu.href}`)}>
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
export default MainMenu;