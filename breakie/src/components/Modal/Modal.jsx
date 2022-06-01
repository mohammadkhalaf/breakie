import React, { useRef } from 'react';
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
  breakie,
  breakieend,
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
    if(breakie){
      return <p className={classes.start}>Läs instruktionerna noggrannt och notera tidsåtgången. </p>;
    }
    // if(breakieend){
    //   return <p className={classes.end}>Heja! </p>;
    // }
  };

 
  return createPortal(
    <div className={breakie?  `${classes.overlay} ${classes.breakie} `:    classes.overlay}>
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
        <div className={breakie?  `${classes.breakiee} `: classes.overlayBtnBox}>
          {remove &&
          <button className={classes.closebtn} onClick={() => closeModal()}>
            {name ? 'Okej' : 'Avbryt!'}
          </button>}

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
          
       
        {breakie&& (
          <>
           <h1 className={classes.starttitle}>Är ni redo ? </h1>
         <button className={classes.closebtn} onClick={() => closeModal()}>
         Nu kör vi!
       </button></>)
       }
       {/* {breakieend && (
         <button className={classes.closebtn} onClick={() => breakieend() }>
         tillbaka till lektionen
       </button>)} */}

        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
