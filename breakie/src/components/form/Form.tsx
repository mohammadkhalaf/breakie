import React, { useContext, useState } from 'react';
import mental from '../../assets/mental.svg';
import fysisk from '../../assets/fysisk.svg';
import social from '../../assets/social.svg';
import classes from './form.module.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/activityContext';
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
} from 'firebase/firestore';
import { db } from '../../backend/firebase';
const Form = () => {
  const [activity, setActivity] = useState('');
  const [time, setTime] = useState('');
  const { getData } = useContext(AppContext);
  const getbreakie = async () => {
    if (activity.length) {
      const q1 = query( collection(db, 'Breakies'),   where('type', '==', activity)  );
      const breakieSnapshot = await getDocs(q1);
      const breakielist: DocumentData[] = breakieSnapshot.docs
        .map((doc) => doc.data())
        .filter((doc) => doc.time == time);
      getData(breakielist);
    }
  };
  const navigate = useNavigate();
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (activity && time) {
      getbreakie();
      navigate('/breakie');
    } else {
      navigate('/manuall');
    }
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.formHeader}>
          <h2>Typ av breakie</h2>
        </div>
        <div className={classes.activities}>
          <div
            className={
              activity === 'fysisk'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => setActivity('fysisk')}
          >
            <img src={fysisk} alt='fysisk' />
            <span>fysisk</span>
          </div>
          <div
            className={
              activity === 'mental'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => setActivity('mental')}
          >
            <img src={mental} alt='mental' />
            <span>mental</span>
          </div>
          <div
            className={
              activity === 'social'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => setActivity('social')}
          >
            <img src={social} alt='social' />
            <span>social</span>
          </div>
        </div>
        <div className={classes.formHeader}>
          <h2>Tidsåtgång</h2>
        </div>
        <div className={classes.activities}>
          <div
            className={
              time === '1'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => setTime('1')}
          >
            <div className={classes.tidinfo}>
              <p> &#60; 1</p>
              <span>minut</span>
            </div>
          </div>
          <div
            className={
              time === '2'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => setTime('2')}
          >
            <div className={classes.tidinfo}>
              <p> 1-2</p>
              <span>minuter</span>
            </div>
          </div>
          <div
            className={
              time === '3'
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => setTime('3')}
          >
            <div className={classes.tidinfo}>
              <p>3+</p>
              <span>minuter</span>
            </div>
          </div>
        </div>

        <button className={classes.button}>
          {activity ? 'Slumpa fram en breakie' : 'Välj specifik Breakie'}
        </button>
      </form>
    </>
  );
};

export default Form;
