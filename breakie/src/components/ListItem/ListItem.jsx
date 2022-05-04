
import React, { useState } from 'react';
import classes from './listitem.module.css';

 
const ListItem = ({ item, saveData, removeItem}) => {

  const changeHandler = (e, item) => {
    saveData(item);
    /*
    if (!item.isChecked) {
      saveData(item);
      setChecked(!item.isChecked)
  
    } else {
      removeItem(item);
      
    }
    */
  };
  return (
    <>
      <li className={classes.list__item} key={item.id} >
        <label className={classes.label__checkbox} onClick={e => changeHandler(e, item)}>
          <input
            onChange={e => changeHandler(e, item)}
            checked={item.isChecked}
            type='checkbox'
          />
          {item.name}
        </label>
        <span>{item.time} minuter</span>
      </li>
    </>
  );
};

export default ListItem;
