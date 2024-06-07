import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../css/common/actionDropdown.css"
import ComponentModal from "./ComponentModal";
import { useState } from "react";
import { informationModalDelete } from "../../constants/common";
import { useDispatch } from "react-redux";
import { deleteDataAdmin} from "../../slice/main/actionAdmin";
import {  toastSuccess } from "../../config/toast";

function ActionDropdown(props) {
    const { dataActions, http, id } = props;
    const [showModal,setShowModal]=useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const handleAction = (action) => {
        switch (action.action) {
            case 'edit':                        
                navigate(`${location.pathname}/edit/${id}`);
                break;
            case 'delete':
                setShowModal(true)
                break;
        }
    }
    
    const handleDelete=async()=>{
        try{
            
            const response = await dispatch(deleteDataAdmin({http:http,data:id})).unwrap();
            toastSuccess(response.message)
        }catch(error){
            console.log(error);
        }
        setShowModal(false)
    }
    return (
        <div className="dropdown">
            <i className="fa-solid fa-ellipsis-vertical" data-bs-toggle="dropdown" aria-expanded="false" />
            <ul className="dropdown-menu dropdown-menu-action">
                {dataActions.map((action, aIndex) => (
                    <div onClick={() => handleAction(action)} key={aIndex}><li className="dropdown-item"><i className={action.icon}></i>{action.name}</li></div>
                ))}

            </ul>
            <ComponentModal handleAction={handleDelete}  show={showModal} informationModal={informationModalDelete}  setShow={setShowModal}/>
        </div>
        
    )
}
export default ActionDropdown;