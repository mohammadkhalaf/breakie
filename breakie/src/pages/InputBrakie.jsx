import React, { useState } from 'react';
import classes from './InputBrakie.module.css';

const InputBrakie = () => {
  const [test, setTest] = useState('');
  const changeHandler = (e) => {
    setTest(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('s');
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes['form-container']}>
            <input type='text' onChange={changeHandler} value={test} />
          </div>
          <button type='submit'>Create brakie</button>
        </form>
      </div>
    </>
  );
};

export default InputBrakie;
