import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classes from './overlay.module.css';
import { AppContext } from '../../context/activityContext';
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import close from '../../assets/close.png';


const Overlay = ({ choseList, showFavoriteItems, removeItem }) => {
  const { openOverlay } = useContext(AppContext);
  const savedItems = localStorage.getItem('Breakies')
    ? JSON.parse(localStorage.getItem('Breakies'))
    : [];

  const [list, setList] = useState(savedItems);

  const oldData = JSON.parse(localStorage.getItem('Breakies')) || [];

  const addTolocal = () => {
    const name = prompt('enter name');
    if (!name) {
      return;
    }

    localStorage.setItem(
      'Breakies',
      JSON.stringify([...oldData, { name, choseList }])
    );
    setList(JSON.parse(localStorage.getItem('Breakies')));
  };

  const closeOverlay = () => {
    openOverlay();
  };

  const showFavorit = (items) => {
    choseList.map((item)=>{removeItem(item);})
    showFavoriteItems(items);
    openOverlay();
  };
  const removFromLocalStorage = (item, index) => {
    let newBreakies = JSON.parse(localStorage.getItem('Breakies'));
    newBreakies.splice(index, 1);
    setList(newBreakies);
    localStorage.setItem('Breakies', JSON.stringify(newBreakies));
  };

  return createPortal(
    <div className={classes.overlay}>
      <span onClick={closeOverlay} className={classes.closeoverlay}>
        <img src={close} alt='' className={classes.closebtn} />
      </span>
      <div className={classes.modal}>
        <button className={classes.favo} onClick={addTolocal}>
          Spara favoriter
        </button>
        <ul className={classes.locallist}>
          {list.length > 0 &&
            list.map((item, index) => {
              return (
                <li className={classes.listItem} key={index}>
                  <FaTimes
                    className={classes.closeicon}
                    onClick={() => removFromLocalStorage(item, index)}
                  />
                  <div  className={classes.listInfo} onClick={() => {
                      showFavorit({ item });
                    }}>
                  <p
                    className={classes.listname}
                   
                  >
                    {item.name}
                  </p>
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
