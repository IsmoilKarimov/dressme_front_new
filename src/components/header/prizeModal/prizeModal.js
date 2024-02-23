import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}> Open Modal </button>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <div className="close">
              <span className="close-btn" onClick={() => setShowModal(false)}>
                &times;
              </span>
            </div>
            <h1>Modal</h1>
            <p>Modal content</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
