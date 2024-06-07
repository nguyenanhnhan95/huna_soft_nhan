import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../css/common/componentModal.css"
function ComponentModal(props) {
    const { handleAction, show, informationModal, setShow } = props;

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận</Modal.Title>
            </Modal.Header>
            <Modal.Body>{informationModal.title}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => handleAction()}>
                    Đồng ý
                </Button>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ComponentModal;