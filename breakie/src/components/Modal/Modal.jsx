import React from 'react';
import { createPortal } from 'react-dom';
import classes from './modal.module.css';

const Modal = ({ closeOverlay, name }) => {
  return createPortal(
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <p className={classes.msg}>Du har nu skapat breakien </p>
        <h1>{name}</h1>
        <button className={classes.closebtn} onClick={() => closeOverlay()}>
          Okej!
        </button>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
