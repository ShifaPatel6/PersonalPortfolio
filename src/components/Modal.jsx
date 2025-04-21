import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "../Css/Modal.css";

function ModalDiv({ title, body, technologies }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn  buttonStyled "
        onClick={() => setShow(true)}
      >
        View
        <IoEyeOutline className="StyledEye" />
      </button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static" // Prevents closing when clicking outside
        keyboard={false}
        centered
        // Prevents closing with ESC key
      >
        <Modal.Header closeButton>
          <Modal.Title className="StyledTitle">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body}

          <div className="tech"> Tech Stack : {technologies}</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalDiv;
