import React, { useEffect, useState, useRef } from 'react'
import classes from './css/filter.module.css'
import { collection, query, where, getDocs, DocumentData } from "firebase/firestore";
import { db } from '../backend/firebase';
import { FaSearch } from 'react-icons/fa';


const Filter = () => {
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(Array);
  const [fysisk, setFysisk] = useState<DocumentData[] | null>(Array);
  const [mental, setMental] = useState<DocumentData[] | null>(Array);
  const [social, setSocial] = useState<DocumentData[] | null>(Array);

  //sort fysisk
  const getFysisk = async () => {
    const q1 = query(collection(db, "Breakies"), where("type", "==", "fysisk"));
    const fysiskSnapshot = await getDocs(q1);
    const fysisklist: DocumentData[] = fysiskSnapshot.docs.map((doc) =>
      doc.data()
    );
    setFysisk(fysisklist);
  }
  //sort mental
  const getMental = async () => {
    const q2 = query(collection(db, "Breakies"), where("type", "==", "mental"));
    const mentalSnapshot = await getDocs(q2);
    const mentallist: DocumentData[] = mentalSnapshot.docs.map((doc) =>
      doc.data()
    );
    setMental(mentallist);
  }
  //sort Social
  const getSocial = async () => {
    const q2 = query(collection(db, "Breakies"), where("type", "==", "social"));
    const socialSnapshot = await getDocs(q2);
    const sociallist: DocumentData[] = socialSnapshot.docs.map((doc) =>
      doc.data()
    );
    setSocial(sociallist);
  }


  const handleChange = (event: any) => {
    setName(event.target.value);


  }
  // Add/Remove checked item from list
  const handleCheck = (event: any) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    console.log(updatedList)
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
      return total + ", " + item;
    })
    : "";




  useEffect(() => {
    getFysisk()
    getMental()
    getSocial()

  }, [])
  return (
    <>
      <div className='searchBar'>
        <FaSearch />
        <input
          className='search'
          placeholder=''
          type='text'
          value={name}
          onChange={handleChange}
        />
      </div>
      <section className={classes.filter_box}>
        <article className={classes.flex_item} >
          <h3 className={classes.filterTitle}>fysisk</h3>
          <ul className={classes.filterlist}>
            {fysisk && fysisk.filter((item: any) => item.name.includes(name))
              .map((item) => {
                return (

                  <li className={classes.list__item} key={item.id} ><label className={classes.label__checkbox}><input type="checkbox" onChange={handleCheck} />{item.name}</label>  <span>{item.time} minuter</span></li>
                )
              })}

          </ul>
        </article>
        <article className={classes.flex_item}>
          <h3 className={classes.filterTitle}>mental</h3>
          <ul className={classes.filterlist}>
            {mental && mental.filter((item: any) => item.name.includes(name)).map((item) => {
              return (

                <li className={classes.list__item} key={item.id} ><label className={classes.label__checkbox}><input type="checkbox" onChange={handleCheck} />{item.name}</label>  <span>{item.time} minuter</span></li>
              )
            })}

          </ul></article>
        <article className={classes.flex_item}>
          <h3 className={classes.filterTitle}>social</h3>
          <ul className={classes.filterlist}>
            {social && social.filter((item: any) => item.name.includes(name)).map((item) => {
              return (

                <li className={classes.list__item} key={item.id} ><label className={classes.label__checkbox}><input type="checkbox" onChange={handleCheck} />{item.name}</label>  <span>{item.time} minuter</span></li>
              )
            })}
          </ul></article>
      </section>
    </>
  )
}

export default Filter