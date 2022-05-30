import React, { useState } from 'react';
import mental from '../../assets/mental.svg';
import fysisk from '../../assets/fysisk.svg';
import social from '../../assets/social.svg';
import classes from './InputBrakie.module.css';
import { db } from '../../backend/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Modal from '../../components/Modal/Modal';
const InputBrakie = () => {
  const [activity, setActivity] = useState('');

  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [URL, setURL] = useState('');
  const [instruction, setInstruction] = useState('');
  const [showModal, setShowModal] = useState(false);
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const urlHandler = (e) => {
    setURL(e.target.value);
  };
  const instrctionHandler = (e) => {
    setInstruction(e.target.value);
  };
  const closeModal = () => {
    setShowModal(false);
    setName('');
    setTime('');
    setURL('');
    setInstruction('');
    setActivity('');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!activity || !time || !instruction || !name) {
      console.log('please provide all value');
    }

    try {
      if (activity && time && instruction && name) {
        await addDoc(collection(db, 'Breakies'), {
          type: activity,
          desc: instruction,
          time,
          name,
          URL,
        });
        setShowModal(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {showModal && <Modal closeModal={closeModal} name={name} />}
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
        <button
          onClick={submitHandler}
          className={classes.button}
          type='submit'
        >
          Skapa breakien
        </button>
      </div>
    </>
  );
};

export default InputBrakie;
