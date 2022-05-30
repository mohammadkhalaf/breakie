import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import classes from './modal.module.css';

const Modal = ({
  closeModal,
  localStorage,
  name,
  addTolocal,
  remove,
  itemname,

  removeFromLocalStroate,
}) => {
  const inputBreakie = useRef(null);
  const add = () => {
    if (inputBreakie.current.value) {
      addTolocal(inputBreakie.current.value);
    }
  };
  const removeItem = () => {
    removeFromLocalStroate();
    closeModal();
  };

  const msg = () => {
    if (localStorage) {
      return (
        <p className={classes.msg}>
          Nu är du på väg att spara en lista av favoritbreakies
        </p>
      );
    }
    if (remove) {
      return (
        <p className={classes.msg}>
          Nu är du påväg att ta bort listan {itemname}
        </p>
      );
    }
    if (name) {
      return <p className={classes.msg}>Du har nu skapat breakien </p>;
    }
  };

  return createPortal(
    <div className={classes.overlay}>
      <div className={classes.modal}>
        {msg()}
        <h1>{name}</h1>
        {localStorage && <h1>Döp listan !</h1>}
        {localStorage && (
          <input
            type='text'
            placeholder='Ny favoritlista'
            className={classes.inputsavedname}
            ref={inputBreakie}
          />
        )}

        {remove && <h2>Är du säker på det? </h2>}
        <div className={classes.overlayBtnBox}>
          <button className={classes.closebtn} onClick={() => closeModal()}>
            {name ? 'Okej' : 'Avbryt!'}
          </button>

          {localStorage && (
            <button className={classes.closebtn} onClick={() => add()}>
              Spara listan
            </button>
          )}
          {remove && (
            <button className={classes.closebtn} onClick={() => removeItem()}>
              jadå!
            </button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
