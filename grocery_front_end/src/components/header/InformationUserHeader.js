import { memo } from "react";
import { useSelector } from "react-redux";

function InformationUserHeader(){
    const {  user } = useSelector((state) => state.user)
    return(
        <div className="header-user-item"><span>{user.name.toLowerCase().substr(0, 1)}</span></div>
    )
}
export default  memo(InformationUserHeader);