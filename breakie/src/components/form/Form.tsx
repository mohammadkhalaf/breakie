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
  const [type, setType] = useState(new Array());

  const [time, setTime] = useState('');
  const [timesArray, setTimesArray] = useState(new Array());

  const [istoggle, setIsToggle] = useState(false);

  const { getData } = useContext(AppContext);

  /////////////////////Firebase ////////////////////
  const getbreakie = async () => {
    if (type.length) {
      const q1 = query(collection(db, 'Breakies'), where('type', 'in', type));
      const breakieSnapshot = await getDocs(q1);
      const typelist: DocumentData[] = breakieSnapshot.docs.map((doc) =>
        doc.data()
      );
      console.log(typelist);
      getData(typelist);
    } else if (timesArray.length) {
      const q2 = query(
        collection(db, 'Breakies'),
        where('time', 'in', timesArray)
      );
      const timeSnapshot = await getDocs(q2);
      const timelist: DocumentData[] = timeSnapshot.docs.map((doc) =>
        doc.data()
      );
      getData(timelist);
    }
  };
  /////////////////////////////////////////////////////////////77
  const navigate = useNavigate();
  const submitHandler = (e: any) => {
    e.preventDefault();
    if (activity || time) {
      getbreakie();
      navigate('/breakie');
    } else {
      navigate('/manuall');
    }
  };
  //////////////////////////////////////////////////////////////////7
  const activChoose = (choose: any) => {
    let y = type.find((item) => item === choose);
    if (y) {
      setActivity(choose);
    }
    let t = timesArray.find((item) => item === choose);
    if (t) {
      setTime(choose);
    }
  };

  const Toggle = (x: any) => {
    if (!type.includes(x)) {
      type.push(x);
      activChoose(x);
    } else {
      let A: any = [...type];
      let idx: number = A.findIndex((i: any) => i === x);
      type.splice(idx);
      setIsToggle(!istoggle);
    }
  };

  const Toggletime = (x: any) => {
    if (!timesArray.includes(x)) {
      timesArray.push(x);
      activChoose(x);
    } else {
      let B: any = [...timesArray];
      let idx: number = B.findIndex((i: any) => i === x);
      timesArray.splice(idx);
      setIsToggle(!istoggle);
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
            // className={
            //   activity === 'fysisk'
            //     ? `${classes.formcontrol} ${classes.active} `
            //     : classes.formcontrol
            // }
            className={
              type.find((item) => item === 'fysisk')
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => Toggle('fysisk')}
          >
            <img src={fysisk} alt='fysisk' />
            <span>fysisk</span>
          </div>
          <div
            // className={
            //   activity === 'mental'
            //     ? `${classes.formcontrol} ${classes.active} `
            //     : classes.formcontrol
            // }
            className={
              type.find((item) => item === 'mental')
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => Toggle('mental')}
          >
            <img src={mental} alt='mental' />
            <span>mental</span>
          </div>
          <div
            // className={
            //   activity === 'social'
            //     ? `${classes.formcontrol} ${classes.active} `
            //     : classes.formcontrol
            // }
            className={
              type.find((item) => item === 'social')
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => Toggle('social')}
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
              timesArray.find((item) => item === '1')
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => Toggletime('1')}
          >
            <div className={classes.tidinfo}>
              <p> &#60; 1</p>
              <span>minut</span>
            </div>
          </div>
          <div
            className={
              timesArray.find((item) => item === '2')
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => Toggletime('2')}
          >
            <div className={classes.tidinfo}>
              <p> 1-2</p>
              <span>minuter</span>
            </div>
          </div>
          <div
            className={
              timesArray.find((item) => item === '3')
                ? `${classes.formcontrol} ${classes.active} `
                : classes.formcontrol
            }
            onClick={() => Toggletime('3')}
          >
            <div className={classes.tidinfo}>
              <p>3+</p>
              <span>minuter</span>
            </div>
          </div>
        </div>

        <button className={classes.button}>
          {type.length || timesArray.length
            ? 'Slumpa fram en breakie'
            : 'Välj specifik Breakie'}
        </button>
      </form>
    </>
  );
};

export default Form;
