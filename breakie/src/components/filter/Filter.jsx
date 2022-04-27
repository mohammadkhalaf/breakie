import React, { useState, useContext } from 'react';
import classes from './filter.module.css';
import { FaSearch } from 'react-icons/fa';
import useCollection from '../../hooks/useCollection';
import { AppContext } from '../../context/activityContext';
import { useNavigate } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';

const Filter = () => {
  const [searchField, setSearchField] = useState('');
  const { mental, social, fysisk } = useCollection('Breakies');

  const [choseList, setChoseList] = useState([]);
  const { chooseData } = useContext(AppContext);
  const navigate = useNavigate();

  const RandomEl = () => {
    chooseData(choseList);
    navigate('/breakie');
  };

  const removeItem = (item) => {
    setChoseList(choseList.filter((x) => x.id !== item.id));
  };
  const saveData = (item) => {
    setChoseList([...choseList, item]);
  };
  console.log(choseList);

  return (
    <>
      <div className='searchBar'>
        <FaSearch />
        <input
          className='search'
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
                .filter((item) => item.name.includes(searchField))
                .map((item) => {
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
                .filter((item) => item.name.includes(searchField))
                .map((item) => {
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
                .filter((item) => item.name.includes(searchField))
                .map((item) => {
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
    </>
  );
};

export default Filter;
