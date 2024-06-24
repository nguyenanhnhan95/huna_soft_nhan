import { memo } from "react"
import { useSelector } from "react-redux";
import { roles } from "../../constants/common/security";
import { useLocation, useNavigate } from "react-router-dom";

function RedirectAdminHeader() {
    const {  user } = useSelector((state) => state.user)
    const location = useLocation();
    const navigate = useNavigate()
    const handleCheckLocation=()=>{
        let size= user.roles.length;
        for(let i=0;i<size;++i){
            if(user.roles[i]===roles.ROLE_USER || location.pathname.substring(0,6)==="/admin"){
                return false;
            }
        }
        return true;
    }
    return (
        <div className="dropdown-item" style={{display:handleCheckLocation()?'block':'none'}} onClick={()=>navigate("/admin")}>
            <i class="fa-solid fa-users mr-2"></i>Quản lý nhân sự</div>
    )
}
export default memo(RedirectAdminHeader)