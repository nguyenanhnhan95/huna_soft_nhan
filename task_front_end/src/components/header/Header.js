import logo_header from "../../img/header/logo_header.png"
import logo_menu from "../../img/header/logo_menu.png"
import "../../css/header.css"
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
import HeaderNotification from "./HeaderNotification";
import HeaderUser from "./HeaderUser";
import HeaderCart from "./HeaderCart";
import SlideShow from "./SlideShow";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function Header() {
    return (
        <>
            <header>
                <div className="header__pc_wrap">
                    <div className="header__top-pc">
                        <div className="header__top header__information__contact">
                            <div className="header__information__contact-item"><img src={logo_header} alt="" /></div>
                            <div className="header__information__contact-item header__information__contact-item-phone screen_medium"><i className="fa-solid fa-phone " />0393554072
                            </div>
                        </div>
                        <HeaderSearch/>
                        <div className="header__top header__information__user">
                            <HeaderNotification/>
                            <div className="header__information__user-item"><i className="fa-regular fa-circle-question" />Trợ giúp</div>
                            <HeaderUser/>
                            <HeaderCart/>
                        </div>
                    </div>
                </div>
                <div className="header__mobile-wrap">
                    <div className="header__mobile">
                        <div className="header__top-mobile">
                            <div className="header__top-mb header__top-mb-menu">
                                <label htmlFor="menu-mobile-input">
                                    <i className="fa-solid fa-bars fa-xl" /> a
                                </label>
                                <input type="checkbox" hidden className="menu-mobile-input" id="menu-mobile-input" />
                                <label htmlFor="menu-mobile-input" className="header__top-mb-menu-overly" />
                                <label htmlFor="menu-mobile-input" className="header__top-mb-menu-overly" />
                                <div className="header__top-mb header__top-mb-menu-items">
                                    <label htmlFor="menu-mobile-input" className="header__top-mb-menu-item-close"><i className="fa-solid fa-xmark" /></label>
                                    <div className="header__top-mb-menu-item header__top-mb-menu-item-icon">
                                        <img src={logo_menu} />
                                    </div>
                                    <div className="header__top-mb-menu-item ">
                                        <div className="header__top-mb-menu-item-dropdown">
                                            <i className="fa-solid fa-house" />Home
                                            <i className="fas fa-angle-right dropdown" />
                                        </div>
                                    </div>
                                    <HeaderMenu/>
                                </div>
                            </div>
                            <HeaderSearch/>
                            <div className="header__top-mb header__information__user">
                                <HeaderCart/>
                               <HeaderUser/>
                            </div>
                        </div>
                    </div>
                </div>
               <SlideShow/>
            </header>
        </>
    )
}
export default Header;