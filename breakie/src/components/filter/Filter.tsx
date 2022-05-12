import React, { useState, useContext, useEffect } from 'react';
import classes from './filter.module.css';
import useCollection from '../../hooks/useCollection';
import { AppContext } from '../../context/activityContext';
import { useNavigate } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import Overlay from '../overlay/Overlay';
import search from '../../assets/search.svg';

const Filter = () => {
  const [searchField, setSearchField] = useState('');
  const { mental, setMental, social, setSocial, fysisk, setFysisk } =
    useCollection('Breakies');
  const [choseList, setChoseList] = useState(new Array());
  const { chooseData, show } = useContext(AppContext);
  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const RandomEl = () => {
    chooseData(choseList);
    navigate('/breakie');
  };

  const saveData = (item: any) => {
    //save data in state for slump breakir from manuall

    setChoseList([...choseList, { ...item, isChecked: !item.isChecked }]);
    console.log(choseList.length);

    console.log(choseList.length);

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
  console.log(choseList);
  const activeBar = () => {
    setActive(!active);
  };

  return (
    <>
      {show && <Overlay choseList={choseList} />}
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

        <button className={classes.choose} onClick={RandomEl}>
          Choose breakie
        </button>
      </div>
    </>
  );
};

export default Filter;
