import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import classes from './end.module.css';

const End = () => {
  const navigate = useNavigate();
  const end = () => {
    navigate('/');
  };

  return createPortal(
    <>
      <div className={classes.end}>
        <section className={classes.colorparty}>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          {/* <div className={classes.circle}></div> */}
        </section>

        <h1 className={classes.title}>Heja!</h1>
        <button className={classes.btn} onClick={() => end()}>
          Tillbaka till lektionen
        </button>
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default End;
