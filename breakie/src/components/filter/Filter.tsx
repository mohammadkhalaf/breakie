import React, { useState, useContext } from 'react';
import classes from './filter.module.css';
import { FaSearch } from 'react-icons/fa';
import useCollection from '../../hooks/useCollection';
import { AppContext } from '../../context/activityContext';
import { useNavigate } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import { breakie } from '../../models/breakie';
import Overlay from '../overlay/Overlay';

interface localStorageProps {
  addToLocal: [];
  addOverlay: () => void
}


const Filter = () => {
  const [searchField, setSearchField] = useState('');
  const { mental, setMental, social, fysisk } = useCollection("Breakies");
  const [choseList, setChoseList] = useState(new Array);
  const { chooseData, show } = useContext(AppContext);

  const navigate = useNavigate();

   const Search = () => {

  //   fysisk.filter((item: any) => item.name.includes(searchField))
   }

  const RandomEl = () => {
    chooseData(choseList);
    navigate('/breakie');
  };

  const removeItem = (item: any) => {
    setChoseList(choseList.filter((x: any) => x.id !== item.id));
  };


  const saveData = (item: any) => {
    //    setChoseList([...choseList, {...item,isChecked:!item.isChecked}]);
    if(item.type === 'mental') {

      let m: any = [...mental];
      let idx:number = m.findIndex((i:any) => i.id === item.id);
      m[idx].isChecked = !m[idx].isChecked;
  
      setMental(m)

    }
  }

  return (
    <>
      {show && <Overlay choseList={choseList} />}
      <div className={classes.searchBar}>
        <FaSearch />
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
    </>
  );
};

export default Filter;


