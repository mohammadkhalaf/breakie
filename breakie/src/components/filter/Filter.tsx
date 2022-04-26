import React, { useState, useContext } from 'react';
import classes from './filter.module.css';
import { FaSearch } from 'react-icons/fa';
import useCollection from '../../hooks/useCollection';
import { AppContext } from '../.././context/activityContext';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
  const [searchField, setSearchField] = useState('');
  const { mental, social, fysisk } = useCollection('Breakies');
  const [ischecked, setChecked] = useState(false);
  const [choseList, setChoseList] = useState(Array);
  const { chooseData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSearch = (event: any) => {
    setSearchField(event.target.value);
  };
  const changeHandler = (event: any) => {
    setChecked(event.target.checked);

    console.log(event.target.checked);
  };

  const RandomEl = () => {
    chooseData(choseList);
    navigate('/breakie');
  };

  const SearchItem = () => {
    console.log('activites.filter');
  };
  return (
    <>
      <div className='searchBar'>
        <FaSearch />
        <input
          className='search'
          placeholder=''
          type='text'
          value={searchField}
          onChange={handleSearch}
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
                    <li
                      className={classes.list__item}
                      key={item.name}
                      onChange={() => {
                        choseList.push(item);
                        setChoseList(choseList);
                      }}
                    >
                      <label className={classes.label__checkbox}>
                        <input type='checkbox' onChange={changeHandler} />
                        {item.name}
                      </label>
                      <span>{item.time} minuter</span>
                    </li>
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
                    <li
                      className={classes.list__item}
                      key={item.name}
                      onChange={() => {
                        choseList.push(item);
                        setChoseList(choseList);
                      }}
                    >
                      <label className={classes.label__checkbox}>
                        <input type='checkbox' onChange={changeHandler} />
                        {item.name}
                      </label>
                      <span>{item.time} minuter</span>
                    </li>
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
                    <li
                      className={classes.list__item}
                      key={item.name}
                      onClick={() => {
                        choseList.push(item);
                        setChoseList(choseList);
                      }}
                    >
                      <label className={classes.label__checkbox}>
                        <input type='checkbox' onChange={changeHandler} />
                        {item.name}
                      </label>
                      <span>{item.time} minuter</span>
                    </li>
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
