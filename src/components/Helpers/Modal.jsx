import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import "./modal.scss";

const modalRoot = document.querySelector("#modals");

const ModalContent = ({ children, isActive, setIsActive, title }) => {
  return (
    <div
      className={isActive ? "modal modal_active" : "modal"}
      onClick={() => setIsActive(false)}
    >
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="title title_sm">{title}</h3>
        {children}
      </div>
    </div>
  );
};

const Modal = (props) => {
  const { modal, children, isActive, setIsActive, title } = props;
  const element = useMemo(() => {
    const element = document.createElement("div");
    element.dataset.modal = modal;
    return element;
  }, [modal]);

  useEffect(() => {
    if (isActive) {
      modalRoot.appendChild(element);
      return () => {
        modalRoot.removeChild(element);
      };
    }
  });

  return createPortal(
    <ModalContent
      children={children}
      isActive={isActive}
      setIsActive={setIsActive}
      title={title}
    />,
    element
  );
};

export default Modal;
