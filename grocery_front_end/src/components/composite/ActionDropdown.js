import { useNavigate } from "react-router-dom";
import "../../css/composite/actionDropdown.css"
import ComponentModal from "./ComponentModal";
import { useCallback, useState } from "react";
import { informationModalDelete } from "../../constants/common";
import { useDispatch, useSelector } from "react-redux";
import { deleteDataAdmin, resetPage } from "../../slice/main/actionAdmin";
import { toastSuccess } from "../../config/toast";

function ActionDropdown(props) {
    const { dataActions, httpApi, httpNavigate } = useSelector((state) => state.actionAdmin);
    const { id } = props;
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleShowModal = useCallback((show) => {
        setShowModal(show)
    }, [])
    const handleAction = useCallback((action) => {
        switch (action.action) {
            case 'edit':
                setShowModal(false)
                navigate(`${httpNavigate}/edit/${id}`);
                break;
            case 'delete':
                console.log('sdad')
                handleShowModal(true)
                break;
            default:
                return;
        }
    }, [httpNavigate, id])
    
    const handleDelete = useCallback(async () => {
        try {

            const response = await dispatch(deleteDataAdmin({ http: httpApi, data: id })).unwrap();
            handleShowModal(false);
            dispatch(resetPage())
            toastSuccess(response.message)
        } catch (error) {
            console.log(error);
        }
        setShowModal(false)
    }, [httpApi, id])
    return (
        <div className="dropdown">
            <i className="fa-solid fa-ellipsis-vertical" data-bs-toggle="dropdown" aria-expanded="false" />
            <ul className="dropdown-menu dropdown-menu-action">
                {dataActions.map((action, aIndex) => (
                    <div onClick={() => handleAction(action)} key={aIndex}><li className="dropdown-item"><i className={action.icon}></i>{action.name}</li></div>
                ))}

            </ul>
            <ComponentModal handleAction={handleDelete} show={showModal} informationModal={informationModalDelete} handleShow={handleShowModal} />
        </div>

    )
}
export default ActionDropdown;