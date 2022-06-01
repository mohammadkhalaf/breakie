import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classes from './overlay.module.css';
import { AppContext } from '../../context/activityContext';
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import close from '../../assets/close.png';
import Modal from '../Modal/Modal';

const Overlay = ({ choseList, showFavoriteItems, removeItem }) => {
  const [showModal, setShowModal] = useState(false);
  const { toggleOverlay } = useContext(AppContext);
  const [msg, setMsg] = useState('');

  const [remove, setRemove] = useState(false);
  const [item, setItem] = useState('');
  const [local, setLocal] = useState(false);
  const [index, setIndex] = useState(null);
  const [cancel, setCancel] = useState(false);

  // to check if there are any saved items in the local storage, if not render an empty array

  const savedItems = localStorage.getItem('Breakies')
    ? JSON.parse(localStorage.getItem('Breakies'))
    : [];

  const [list, setList] = useState(savedItems);

  // add to local stoage

  //1- check if there are any  old array in the local storage

  const oldData = JSON.parse(localStorage.getItem('Breakies')) || [];

  // open the overlay to add the items to local storage
  const saveLocalStorage = () => {
    setShowModal(true);
    setLocal(true);
  };
  //save the array  in  the local storage
  const addTolocal = (name) => {
    localStorage.setItem(
      'Breakies',
      JSON.stringify([...oldData, { name, choseList }])
    );
    setList(JSON.parse(localStorage.getItem('Breakies')));
    closeModal();
    setMsg(name);
    setLocal(false);
  };
  //close modal after adding or deleting from local storage
  const closeModal = () => {
    setShowModal(false);
  };

  // unmount the msg after adding the item to the local storage

  useEffect(() => {
    setCancel(false);
    setTimeout(() => {
      setMsg('');
    }, 3000);
    return () => {
      setCancel(true);
    };
  }, [msg]);
  // close the overlay to go back to the manuel page
  const closeOverlay = () => {
    toggleOverlay();
  };
  // show the saved items in the manuel page and close the overlay
  const showFavorit = (items) => {
    choseList.map((item) => {
      removeItem(item);
    });
    showFavoriteItems(items);
    toggleOverlay();
  };

  //deleting from local storage

  //1- open overlay to deleting and passing the props throw the modal
  const removeB = (item, index) => {
    setRemove(true);
    setItem(item.name);
    setShowModal(true);
    setIndex(index);
  };
  //2- removing the item from local storage after clicking the button in the modal
  const removeFromLocalStroate = () => {
    let newBreakies = JSON.parse(localStorage.getItem('Breakies'));
    newBreakies.splice(index, 1);
    setList(newBreakies);
    localStorage.setItem('Breakies', JSON.stringify(newBreakies));
  };

  return createPortal(
    <div className={classes.overlay}>
      {showModal && (
        <Modal
          localStorage={local}
          closeModal={closeModal}
          addTolocal={addTolocal}
          remove={remove}
          itemname={item}
          removeB={removeB}
          removeFromLocalStroate={removeFromLocalStroate}
        />
      )}
      <span onClick={closeOverlay} className={classes.closeoverlay}>
        <img src={close} alt='' className={classes.closebtn} />
      </span>
      <div className={classes.modal}>
        <button
          disabled={choseList.length == 0}
          className={classes.favo}
          onClick={() => saveLocalStorage()}
        >
          Spara favoriter
        </button>

        {msg && (
          <span className={classes.msgalert}>
            Dina favoritbreakies {msg} är sparade!
          </span>
        )}

        <ul className={classes.locallist}>
          {list.length > 0 &&
            list.map((item, index) => {
              return (
                <li className={classes.listItem} key={index}>
                  <FaTimes
                    className={classes.closeicon}
                    onClick={() => removeB(item, index)}
                  />
                  <div
                    className={classes.listInfo}
                    onClick={() => {
                      showFavorit({ item });
                    }}
                  >
                    <p className={classes.listname}>{item.name}</p>
                    <span className={classes.list__span}>
                      {item.choseList.length} breakies
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Overlay;
