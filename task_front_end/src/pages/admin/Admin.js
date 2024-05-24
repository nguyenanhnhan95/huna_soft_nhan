import { useMemo } from "react";
import MainMenu from "../../components/admin/MainMenu";
import LoginForm from "../../components/login/LoginForm";
import { ctx } from "../../constants/common";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainContent from "../../components/admin/MainContent";
import "../../css/main/main.css"
function Admin() {
    const location = useLocation()
    return (
        <div className="container-fluid container-main">
            <MainMenu resource={window.location.href.replace(ctx, "")} />
            <MainContent/>
        </div>

    )
}
export default Admin;