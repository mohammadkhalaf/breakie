import React, { useState } from 'react';
import classes from './listitem.module.css';

const ListItem = ({ item, saveData, removeItem }) => {
  const [ischecked, setischecked] = useState(false);
  const changeHandler = (e, item) => {
    setischecked(!ischecked);
    if (!ischecked) {
      saveData(item);
    } else {
      removeItem(item);
    }
  };
  return (
    <>
      <li className={classes.list__item} key={item.id}>
        <label className={classes.label__checkbox}>
          <input
            type='checkbox'
            checked={ischecked}
            onChange={(e) => changeHandler(e, item)}
          />
          {item.name}
        </label>
        <span>{item.time} minuter</span>
      </li>
    </>
  );
};

export default ListItem;
