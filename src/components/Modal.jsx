import React from "react";
import "../style/Modal.css";

function Modal({ characters, modalOpen, toggleModal }) {
  if (modalOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-module");
  }
  return (
    <>
      {modalOpen && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="modal-title">{characters.name}</h2>
          </div>
          <button className="close-modal" onClick={toggleModal}>
            x
          </button>
        </div>
      )}
    </>
  );
}

export default Modal;
