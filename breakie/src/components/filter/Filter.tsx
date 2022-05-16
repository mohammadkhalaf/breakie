import React, { useState, useContext, useEffect } from 'react';
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
  const { mental, setMental, social, setSocial, fysisk, setFysisk } =
    useCollection('Breakies');
  const [choseList, setChoseList] = useState(new Array());
  const { chooseData, show } = useContext(AppContext);
  const [active, setActive] = useState(false);

  const [localitems, setLocalItems] = useState(Object);

  const navigate = useNavigate();

  //hämta list from localStorge with checked item
  const storedItems = (items: any) => {
    console.log('clicked');

    const arr: any = items.item.choseList;

    arr.map((item: any) => {
      if (item.type === 'fysisk') {
        let f: any = [...fysisk];
        let idx: number = f.findIndex((i: any) => i.id === item.id);
        f[idx].isChecked = !f[idx].isChecked;

        setFysisk(f);
      } else if (item.type === 'mental') {
        let m: any = [...mental];
        let idx: number = m.findIndex((i: any) => i.id === item.id);
        m[idx].isChecked = !m[idx].isChecked;
        setMental(m);
      } else {
        let s: any = [...social];
        let idx: number = s.findIndex((i: any) => i.id === item.id);
        s[idx].isChecked = !s[idx].isChecked;
        setSocial(s);
      }
    });

    setLocalItems(items.item);
    setChoseList([...items.item.choseList]);
  };

  const closeStoredName = () => {
    setChoseList([]);
    let s = [...social];

    setSocial(
      s.map((item: any) => {
        return { ...item, isChecked: false };
      })
    );
    let f = [...fysisk];

    setFysisk(
      f.map((item: any) => {
        return { ...item, isChecked: false };
      })
    );

    let m = [...mental];

    setMental(
      m.map((item: any) => {
        return { ...item, isChecked: false };
      })
    );

    setLocalItems({});
  };

  const RandomEl = () => {
    chooseData(choseList);
    navigate('/breakie');
  };
  console.log('clicked 2');

  const saveData = (item: any) => {
    //save data in state for slump breakir from manuall

    setChoseList([...choseList, { ...item, isChecked: !item.isChecked }]);

    //uppdate data with isChecked  in usecollection for localstorge then
    if (item.type === 'mental') {
      let m: any = [...mental];
      let idx: number = m.findIndex((i: any) => i.id === item.id);
      m[idx].isChecked = !m[idx].isChecked;
      setMental(m);
    } else if (item.type === 'fysisk') {
      let f: any = [...fysisk];
      let idx: number = f.findIndex((i: any) => i.id === item.id);
      f[idx].isChecked = !f[idx].isChecked;
      setFysisk(f);
    } else {
      let s: any = [...social];
      let idx: number = s.findIndex((i: any) => i.id === item.id);
      s[idx].isChecked = !s[idx].isChecked;
      setSocial(s);
    }
  };

  console.log(choseList);

  const removeItem = (item: any) => {
    //uppdate data with isChecked  in usecollection for localstorge then
    if (item.type === 'mental') {
      let m: any = [...mental];
      let idx: number = m.findIndex((i: any) => i.id === item.id);
      m[idx].isChecked = !m[idx].isChecked;
      setMental(m);
    } else if (item.type === 'fysisk') {
      let f: any = [...fysisk];
      let idx: number = f.findIndex((i: any) => i.id === item.id);
      f[idx].isChecked = !f[idx].isChecked;
      setFysisk(f);
    } else {
      let s: any = [...social];
      let idx: number = s.findIndex((i: any) => i.id === item.id);
      s[idx].isChecked = !s[idx].isChecked;
      setSocial(s);
    }

    setChoseList(choseList.filter((x: any) => x.id !== item.id));
  };

  const activeBar = () => {
    setActive(!active);
  };

  return (
    <>
      {show && <Overlay choseList={choseList} storedItems={storedItems} />}
      <div className={classes.wrapper}>
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
            onClick={activeBar}
          />
          <input
            className={classes.search}
            placeholder=''
            type='text'
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
        </div>

        {localitems.name ? (
          <span className={classes.storedLocal}>
            <img src={close} alt='close' onClick={() => closeStoredName()} />
            <span>{localitems.name}</span>
          </span>
        ) : null}
        <section className={classes.filter_box}>
          <article className={classes.flex_item}>
            <h3 className={classes.filterTitle}>fysisk</h3>
            <ul className={classes.filterlist}>
              {fysisk &&
                fysisk
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
              {mental &&
                mental
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
              {social &&
                social
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
          {choseList.length > 0 ? 'slumpa fram en breakie' : 'välj breakie'}
        </button>
      </div>
    </>
  );
};

export default Filter;
