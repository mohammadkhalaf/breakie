import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './end.module.css';

const End = () => {

const navigate=useNavigate();
const end=()=>{
navigate('/')
}
  return (
    <>
      <div className={classes.end}>
      <ul>
            
      <li className={classes.circle}></li>  
      <li className={classes.circle}></li>  
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
      <div className={classes.circle}></div>  </ul>  
             
     <h1 className={classes.title}>Heja!</h1>
     <button className={classes.btn} onClick={()=>end()}>Tillbaka till lektionen</button>
      </div>
    </>
  );
};

export default End;
