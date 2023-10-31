import styled from "@emotion/styled";
import React from "react";
import ReactDOM from "react-dom";
import {
  BUTTON_CANCEL,
  BUTTON_YES,
  MODAL_STYLES,
  OVERLAY_STYLES,
} from "../styles/components/Modal/modal";

const ModalDelete = ({ dataModal, children, onClose, onDelete }) => {
  const { active, food_id } = dataModal;
  if (!active) return;

  function handleDelete(event) {
    event.preventDefault();
    onDelete(food_id);
    onClose();
  }

  return ReactDOM.createPortal(
    <>
      <OVERLAY_STYLES />
      <MODAL_STYLES>
        <strong>Are you sure?</strong>
        <BUTTON_YES onClick={handleDelete}>Yes, delete it!</BUTTON_YES>
        <BUTTON_CANCEL onClick={onClose}>No cancel</BUTTON_CANCEL>
        {children}
      </MODAL_STYLES>
    </>,
    document.getElementById("portal")
  );
};

export default ModalDelete;
