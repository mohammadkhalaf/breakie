
import React, { useState } from 'react';
import classes from './listitem.module.css';

 
const ListItem = ({ item, saveData, removeItem}) => {
const [checked,setChecked]=useState(item.isChecked)
  const changeHandler = (e, item) => {
    if (!item.isChecked) {
      saveData(item);
      setChecked(!item.isChecked)
  
    } else {
      removeItem(item);
      
    }
  };
  return (
    <>
      <li className={classes.list__item} key={item.id}>
        <label className={classes.label__checkbox}>
          <input
          checked={checked}
            value={item.isChecked}
            type='checkbox'
             onChange={(e) => {changeHandler(e, item); }}
          />
          {item.name}
        </label>
        <span>{item.time} minuter</span>
      </li>
    </>
  );
};

export default ListItem;
