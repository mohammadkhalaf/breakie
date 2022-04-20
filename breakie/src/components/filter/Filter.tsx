import React, { useState } from 'react';
import classes from './filter.module.css';
import { FaSearch } from 'react-icons/fa';
import useCollection from '../../hooks/useCollection';

const Filter = () => {
  const [searchField, setSearchField] = useState('');
  const { mental, social, fysisk } = useCollection('Breakies');
  const [checked, setChecked]=useState<boolean>(false);
  const [choseList, setChoseList]=useState(Array);

  const handleSearch = (event: any) => {
    setSearchField(event.target.value);
  };
  const changeHandler = () => {
    
      
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
                    <li className={classes.list__item} key={item.name} onChange={()=>{choseList.push(item);
                      setChoseList(choseList)
                      console.log(choseList)
                      console.log(`${item.name}`)}} >
                      <label className={classes.label__checkbox}>
                        <input type='checkbox' />
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
                    <li className={classes.list__item} key={item.name} onChange={()=>{choseList.push(item);
                      setChoseList(choseList)
                      console.log(choseList)
                      console.log(`${item.name}`)}} >
                      <label className={classes.label__checkbox}>
                        <input type='checkbox' />
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
                    <li className={classes.list__item} key={item.name}  onClick={()=>{choseList.push(item);
                      setChoseList(choseList)
                      console.log(choseList)
                      console.log(`${item.name}`)}}>
                      <label className={classes.label__checkbox}>
                        <input type='checkbox' />
                        {item.name}
                      </label>
                      <span>{item.time} minuter</span>
                    </li>
                  );
                })}
          </ul>
        </article>
      </section>
  
     <button  className={classes.choose}  onClick={()=>console.log( choseList[Math.floor(Math.random() * choseList.length)])}>Choose breakie</button>
     </>
  );
};

export default Filter;
