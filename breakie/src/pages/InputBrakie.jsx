import React, { useState } from 'react';
import mental from '../assets/mental.svg';
import fysisk from '../assets/fysisk.svg';
import social from '../assets/social.svg';
import classes from './InputBrakie.module.css';
import { db } from '../backend/firebase';
import { collection, addDoc } from 'firebase/firestore';
const InputBrakie = () => {
  const [activity, setActivity] = useState('');

  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [URL, setURL] = useState('');
  const [instruction, setInstruction] = useState('');
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  // const changeHandler = (e) => {
  //   setActivity(e.target.value);
  // };
  // const timeHandler = (e) => {
  //   setTime(e.target.value);
  // };
  const urlHandler = (e) => {
    setURL(e.target.value);
  };
  const instrctionHandler = (e) => {
    setInstruction(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (activity && time && URL && instruction && name) {
        const docRef = await addDoc(collection(db, 'Breakies'), {
          type: activity,
          desc: instruction,
          time,
          name,
          URL,
        });
        console.log('added');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className={classes.form}>
        <form onSubmit={submitHandler}>
          <div className={classes.header}>
            <h2>Skapa en breakie</h2>
          </div>
          <div className={classes['input-fields']}>
            <div>
              <label className={classes.nameLabel}>
                <span>Title</span>
                <input type='text' value={name} onChange={nameHandler} />
              </label>
            </div>
            <div className={classes.typeContainer}>
              <div className={classes.nameLabel}>
                <span>Typ av breakie</span>
              </div>

              <div className={classes.activities}>
                {/* <div
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
                    <img
                      src={activity === 'fysisk' ? picactive : fysisk}
                      alt=''
                    />
                    <span>fysisk</span>
                  </label>
                </div> */}
                {/* <div
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
                    <img
                      src={activity === 'mental' ? mentalactive : mental}
                      alt=''
                    />
                    <span>mental</span>
                  </label>
                </div> */}
                {/* <div
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
                    <img
                      src={activity === 'social' ? socialactive : social}
                      alt=''
                    />
                    <span>social</span>
                  </label>
                </div> */}
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
            </div>
            <div>
              <div className={classes.nameLabel}>
                <span>Tidsåtgång</span>
              </div>
              {/* <div className={classes.activities}>
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
                    </div>
                    <span>minut</span>
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
                    </div>
                    <span>minuter</span>
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
                    </div>
                    <span>minuter</span>
                  </label>
                </div>
              </div> */}
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
            </div>
          </div>
          <div className={classes.mediaContainer}>
            <h2>Media</h2>
            <label className={classes.nameLabel}>
              <span>URL</span>
              <input type='url' value={URL} onChange={urlHandler} />
            </label>
          </div>
          <div className={classes.instructionContainer}>
            <h2>Instructioner</h2>
            <textarea
              value={instruction}
              onChange={instrctionHandler}
            ></textarea>
          </div>
        </form>
        <button onClick={submitHandler} type='submit'>
          Skapa breakien
        </button>
      </div>
    </>
  );
};

export default InputBrakie;
