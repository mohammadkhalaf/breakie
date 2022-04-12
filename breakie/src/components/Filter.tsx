import React, { useEffect, useState } from 'react'
import classes from './css/filter.module.css'
import { collection, query, where,getDocs, DocumentData } from "firebase/firestore";
import { db } from '../backend/firebase';


const Filter =  () => {
  const [fysik, setFysik] = useState<DocumentData[] | null>(Array);
  const [mental, setMental] = useState<DocumentData[] | null>(Array);
  const [social, setSocial] = useState<DocumentData[] | null>(Array);
 //sort fysik
  const  getFysik= async ()=>{
  const   q1 = query(collection( db,"Breakies"), where("type", "==", "fysik"));
  const fysikSnapshot = await  getDocs(q1);
  const fysiklist: DocumentData[] = fysikSnapshot.docs.map((doc) =>
  doc.data() 
  );
  console.log(fysiklist)
  setFysik(fysiklist);  
 }
 //sort mental
   const getMental = async()=>{
    const q2 = query(collection( db,"Breakies"), where("type", "==", "mental"));
    const mentalSnapshot = await  getDocs(q2);
    const mentallist: DocumentData[] = mentalSnapshot.docs.map((doc) =>
    doc.data() 
    );
    console.log(mentallist)
    setMental(mentallist);  
   }
   //sort Social
   const getSocial = async()=>{
    const q2 = query(collection( db,"Breakies"), where("type", "==", "social"));
    const socialSnapshot = await  getDocs(q2);
    const sociallist: DocumentData[] = socialSnapshot.docs.map((doc) =>
    doc.data() 
    );
    console.log(sociallist)
    setSocial(sociallist);  
   }

 useEffect(()=>{
   getFysik(),
   getMental(),
   getSocial()
 },[])
  return (
    <section className={classes.filter_box}>
      <article className={classes.flex_item} >
        <h3 className={classes.filterTitle}>fysik</h3>
        <ul className={classes.filterlist}>
          {fysik && fysik.map(item=>{
            return (

              <li className={classes.list__item}><label className={classes.label__checkbox}><input type="checkbox" />{item.name}</label>  <span>{item.time} minuter</span></li> 
            )
          })} 
  
        </ul>
      </article>
      <article className={classes.flex_item}>
        <h3 className={classes.filterTitle}>mental</h3>
        <ul className={classes.filterlist}>
        {mental && mental.map(item=>{
            return (

              <li className={classes.list__item}><label className={classes.label__checkbox}><input type="checkbox" />{item.name}</label>  <span>{item.time} minuter</span></li> 
            )
          })} 
       
        </ul></article>
      <article className={classes.flex_item}>
        <h3 className={classes.filterTitle}>social</h3>
        <ul className={classes.filterlist}>
        {social && social.map(item=>{
            return (

              <li className={classes.list__item}><label className={classes.label__checkbox}><input type="checkbox" />{item.name}</label>  <span>{item.time} minuter</span></li> 
            )
          })} 
        </ul></article>
    </section>
  )
}

export default Filter