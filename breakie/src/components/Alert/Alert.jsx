import React from 'react';

import classes from '../../pages/breakie/breakie.module.css';

const Alert = ({ startBreakie }) => {
  return (
    <>
      <div className={classes.overlay}>
        <div className={classes.content}>
          <p>Läs instruktionerna noggrannt och notera tidsgången</p>
          <h1>Är ni redo?</h1>
          <button onClick={() => startBreakie()}>Nu kör vi!</button>
        </div>
      </div>
    </>
  );
};

export default Alert;
