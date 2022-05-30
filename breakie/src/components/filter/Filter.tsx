import React, { useState, useContext } from 'react';
import classes from './filter.module.css';
import useCollection from '../../hooks/useCollection';
import { AppContext } from '../../context/activityContext';
import { useNavigate } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import Overlay from '../overlay/Overlay';
import search from '../../assets/search.svg';
import close from '../../assets/close.png';

const Filter = () => {
  const [searchField, setSearchField] = useState('');
  const { allBreakies, setAll } = useCollection('Breakies');
  const [choseList, setChoseList] = useState(new Array());
  const { chooseData, show } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [localitems, setLocalItems] = useState(Object);
  const navigate = useNavigate();

  //hämta list from localStorge with checked item
  const showFavoriteItems = (items: any) => {
    //ta bort checked from gamal favorit list
   
    console.log(3)
    setChoseList([...items.item.choseList]);
    console.log(4)
    setLocalItems(items.item)
    const arr: any = items.item.choseList;
    arr.map((item: any) => {
      let A: any = [...allBreakies];
      let idx: number = A.findIndex((i: any) => i.id === item.id);
      A[idx].isChecked = true;
      setAll([...A]);
    })
    
  };

  const closeFavoritList = () => {
    setChoseList([])
    let A = [...allBreakies];
    setAll(
      A.map((item: any) => {
        return { ...item, isChecked: false };
      })
    );

    setLocalItems({});
  };

  const RandomEl = () => {
    chooseData(choseList);
    navigate('/breakie');
  };


  const saveData = (item: any) => {
    //save data in state for slump breakir from manuall
    setChoseList([...choseList, { ...item, isChecked: !item.isChecked }]);
    let A: any = [...allBreakies];
    let idx: number = A.findIndex((i: any) => i.id === item.id);
    A[idx].isChecked = !A[idx].isChecked;
    setAll(A);
  };


  const removeItem = (item: any) => {
    let A: any = [...allBreakies];
    let idx: number = A.findIndex((i: any) => i.id === item.id);
    A[idx].isChecked = !A[idx].isChecked;
    setAll(A);
    setChoseList(choseList.filter((x: any) => x.id !== item.id));
  };

  const activeSearchBar = () => {
    setActive(!active);
  };
 console.log(choseList)
  return (
    <>
      {show && <Overlay choseList={choseList} showFavoriteItems={showFavoriteItems}  removeItem={removeItem}/>}
      <div className={classes.wrapper} >
        <div
          className={
            active
              ? `${classes.searchBar} ${classes.active}`
              : `${classes.searchBar}`
          }
        >
          <img
            src={search}
            alt=''
            className={classes.searchicon}
            onClick={activeSearchBar}
          />
          <input
            className={classes.search}
            placeholder=''
            type='text'
            value={searchField}
            onChange={(e) => { setSearchField(e.target.value) }}
          />
        </div>

        {localitems.name ? (
          <span className={classes.storedLocal} onClick={() => closeFavoritList()}>
            <img src={close} alt='close' onClick={() => closeFavoritList()} />
            <span>{localitems.name}</span>
          </span>
        ) : null}

        <section className={classes.filter_box}>

          <article className={classes.flex_item}>
            <h3 className={classes.filterTitle}>fysisk</h3>
            <ul className={classes.filterlist}>
              {allBreakies && allBreakies.filter((item: any) => item.type == "fysisk")
                .filter((item: any) => item.name.includes(searchField))
                .map((item: any) => {
                  return (
                    <ListItem
                      key={item.id}
                      item={item}
                      saveData={saveData}
                      removeItem={removeItem}
                    />
                  );
                })}
            </ul>
          </article>

          <article className={classes.flex_item}>
            <h3 className={classes.filterTitle}>mental</h3>
            <ul className={classes.filterlist}>
              {allBreakies && allBreakies.filter((item: any) => item.type == "mental")
                .filter((item: any) => item.name.includes(searchField))
                .map((item: any) => {
                  return (
                    <ListItem
                      key={item.id}
                      item={item}
                      saveData={saveData}
                      removeItem={removeItem}
                    />
                  );
                })}
            </ul>
          </article>

          <article className={classes.flex_item}>
            <h3 className={classes.filterTitle}>social</h3>
            <ul className={classes.filterlist}>
              {allBreakies && allBreakies.filter((item: any) => item.type == "social")
                .filter((item: any) => item.name.includes(searchField))
                .map((item: any) => {
                  return (
                    <ListItem
                      key={item.id}
                      item={item}
                      saveData={saveData}
                      removeItem={removeItem}
                    />
                  );
                })}
            </ul>
          </article>

        </section>

        <button
          className={classes.choose}
          onClick={RandomEl}
          disabled={choseList.length < 1}
        >
          {choseList.length > 0 ? 'slumpa from en breakie' : 'välj breakie'}
        </button>
      </div>
    </>
  );
};

export default Filter;