import React from "react";

import { ModalContent, ModalWrapper } from "./Modal.style";

const Modal = ({ onClose, children }) => {
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
