import React, { useState, useContext, useEffect } from 'react';
import classes from './filter.module.css';
import useCollection from '../../hooks/useCollection';
import { AppContext } from '../../context/activityContext';
import { useNavigate } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import Overlay from '../overlay/Overlay';
import search from '../../assets/search.svg';
import close from '../../assets/close.png'


const Filter = () => {
  const [searchField, setSearchField] = useState('');
  const { mental, setMental, social, setSocial, fysisk, setFysisk } =
    useCollection('Breakies');
  const [choseList, setChoseList] = useState(new Array());
  const { chooseData, show } = useContext(AppContext);

const [localitems, setLocalItems]=useState(Object)


  const navigate = useNavigate();

//hämta list from localStorge with checked item
  const storedItems=(items:any) =>{
    
    setLocalItems(items.item);
      const arr:any=items.item.choseList;  
  
   setChoseList(arr)
  
  arr.map((item:any)=>{
    if(item.type==="fysisk"){
      let f: any = [...fysisk];
      let idx: number = f.findIndex((i: any) => i.id === item.id);
      f[idx].isChecked = !f[idx].isChecked;
      console.log( f[idx].isChecked)
      setFysisk(f);
    
    }
  else  if (item.type === 'mental') {
      let m: any = [...mental];
      let idx: number = m.findIndex((i: any) => i.id === item.id);
      m[idx].isChecked = !m[idx].isChecked;
      setMental(m);
    
  } 
  else {
    let s: any = [...social];
    let idx: number = s.findIndex((i: any) => i.id === item.id);
    s[idx].isChecked = !s[idx].isChecked;
    setSocial(s);
  } })
 
  }
console.log(localitems);


const closeStoredName=()=>{
  setLocalItems({});
  setChoseList([])
  console.log([...choseList] )
  // let f: any = [...fysisk,];
  // let m: any = [...mental];
  // let s: any = [...social];
  // setFysisk(f);
  // setMental(m);
  // setSocial(s);
  
}

  const RandomEl = () => {
    chooseData(choseList);
    navigate('/breakie');
  };

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
  return (
    <>
      {show && <Overlay choseList={choseList} storedItems={storedItems} />}
      <div className={classes.wrapper}>
        <div className={classes.searchBar}  >
          {/* <FaSearch className={classes.searchicon} /> */}
          <img src={search} alt='search' className={classes.searchicon}  />
          {/* `classes${isActive?".search":".search__close"}` */}
          <div>
          <input
            className={classes.search}
            placeholder=''
            type='text'
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
          </div>
         
        </div>
         
        {localitems.name?<span className={classes.storedLocal}>
            <img src={close} alt="close"  onClick={()=>closeStoredName()}/>
            <span>{localitems.name}</span>

        </span>:null}
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

        <button className={classes.choose} onClick={RandomEl} disabled={choseList.length<1}>
        {choseList.length>0?"slumpa from en breakie":"välj breakie" }
        </button>
      </div>
    </>
  );
};

export default Filter;
