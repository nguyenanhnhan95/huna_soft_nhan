import { useDispatch, useSelector } from "react-redux";
import LogoSky from "../../img/header/logo-sky.png"
function HeaderMenusPc() {
    const dispatch = useDispatch()
    const { loading, productCategories, error } = useSelector((state) => state.productCategoryMenus)
    return (
        <>
            <div className="header-logo header-item">
                <img src={LogoSky} />
            </div>
            <div className="drop-menu header-item ">
                <ul className="nav" >
                    {productCategories && productCategories.map((category, index) => (
                        <li className="nav-item category-item d-flex align-items-center dropdown" key={index}>
                            {category.name}
                            <ul className="dropdown-menu">
                                {category.children.map((children, zIndex) => (
                                    <li key={zIndex}>
                                        <div className="dropdown-item"><i className="fa-solid fa-caret-right" />{children.name}</div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
export default HeaderMenusPc;