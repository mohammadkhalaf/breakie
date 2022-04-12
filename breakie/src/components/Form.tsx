import React, { useContext, useState } from 'react';

import mental from '../assets/mental.svg';
import mentalactive from '../assets/mentalactive.svg';
import pic from '../assets/pic.svg';
import picactive from '../assets/picactive.svg';
import social from '../assets/social.svg';
import socialactive from '../assets/socialactive.svg';
import classes from './form.module.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/activityContext';
import { collection, query, where,getDocs, DocumentData } from "firebase/firestore";
import { db } from '../backend/firebase';
const Form = (props:any) => {

  
  const [activity, setActivity] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [time, setTime] = useState('');

  const [breakie, setbreakie] = useState<DocumentData[] | null>(Array);
  const {getData}= useContext(AppContext)
  

  const getbreakie = async()=>{
    if(activity==="mental" || activity==="social"|| activity==="fysisk")
    {
     const q = query(collection( db,"Breakies"),where("type","==",activity),where("time","==",2));
  
    const breakieSnapshot = await  getDocs(q);
    const breakielist: DocumentData[] = breakieSnapshot.docs.map((doc) =>
    doc.data() 
    );

    console.log(breakielist)
    getData(breakielist);  
   }
  
}

  const navigate = useNavigate();


  const changeHandler = (e: any) => {
    setActivity(e.target.value);
  
  };
  const timeHandler = (e: any) => {
    setTime(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (activity && time) {
       getbreakie();
 
      navigate('/breakie');

      console.log(activity, time);
    } else {
      navigate('/manuall');
    }
  };
  const testClick = () => {
    console.log('s');
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formHeader}>
          <h2>Breakie-typ</h2>
        </div>
        <div className={classes.activities}>
          <div
            className={
              activity === 'fysisk'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
          >
            <label htmlFor='fysisk'>
              <input
                checked={isChecked}
                type='checkbox'
                id='fysisk'
                onChange={changeHandler}
                name='activity'
                value='fysisk'
              />
              <img src={activity === 'fysisk' ? picactive : pic} alt='' />
              <span>fysisk</span>
            </label>
          </div>
          <div
            className={
              activity === 'mental'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
          >
            <label htmlFor='mental'>
              <input
                checked={isChecked}
                type='checkbox'
                id='mental'
                onChange={changeHandler}
                name='activity'
                value='mental'
              />
              <img src={activity === 'mental' ? mentalactive : mental} alt='' />
              <span>mental</span>
            </label>
          </div>
          <div
            className={
              activity === 'social'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
          >
            <label htmlFor='social'>
              <input
                checked={isChecked}
                type='checkbox'
                id='social'
                onChange={changeHandler}
                value='social'
                name='social'
              />
              <img src={activity === 'social' ? socialactive : social} alt='' />
              <span>social</span>
            </label>
          </div>
        </div>
        <div className={classes.formHeader}>
          <h2>Breakie-tid</h2>
        </div>
        <div className={classes.activities}>
          <div
            className={
              time === '1'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
          >
            <label htmlFor='1' className={classes.tidinfo}>
              <input
                type='checkbox'
                checked={isChecked}
                id='1'
                onChange={timeHandler}
                value='1'
                name='1'
              />
              <div>
                <p> &#60; 1</p>
                <span>minut</span>
              </div>
            </label>
          </div>
          <div
            className={
              time === '2'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
          >
            <label htmlFor='2' className={classes.tidinfo}>
              <input
                type='checkbox'
                checked={isChecked}
                id='2'
                onChange={timeHandler}
                value='2'
                name='2'
              />
              <div>
                <p> 1-2</p>
                <span>minuter</span>
              </div>
            </label>
          </div>
          <div
            className={
              time === '3'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
          >
            <label htmlFor='3' className={classes.tidinfo}>
              <input
                type='checkbox'
                checked={isChecked}
                id='3'
                onChange={timeHandler}
                value='3'
                name='3'
              />
              <div>
                <p>3+</p>
                <span>minuter</span>
              </div>
            </label>
          </div>
        </div>

        <button className={classes.button}>
          {activity ? 'Random breakie' : 'Choose specific breakie'}
        </button>
      </form>
    </>
  );
};

export default Form;
