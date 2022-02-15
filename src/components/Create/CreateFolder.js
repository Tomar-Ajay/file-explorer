import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineLock } from 'react-icons/ai';
import Code from '../Code/Code';

function CreateFolder() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" style={{ width: "100%", bgcolor: "#445EE2", fontSize: "18px" }} onClick={handleShow}>
        <AiOutlineLock />
        &nbsp;
        Lock Now
      </Button>

      <div className="modal">
        <Modal show={show} onHide={handleClose} style={{ textAlign: "center", top: "23%" }}>
            <h1 style={{ fontSize: "20px", lineHeight: "28px", textAlign: "center", padding: "30px 10px" }}>Enter Account Pin</h1>
            <div style={{ fontSize: "20px", lineHeight: "28px", textAlign: "center", padding: "30px 10px" }}>
                <Code />
            </div>
            <div style={{ fontSize: "20px", lineHeight: "28px", textAlign: "center", padding: "30px 10px" }}>
                <Button variant="primary" style={{ width: "32%", bgcolor: "#142683", fontSize: "18px" }} onClick={handleClose}>
                    Enter
                </Button>
            </div>
        </Modal>
      </div>
    </>
  );
}

export default CreateFolder;