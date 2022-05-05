import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import classes from './overlay.module.css';
import { AppContext } from '../../context/activityContext';
import { useContext } from 'react';



const Overlay = ({ choseList}) => {
    const { openOverlay } = useContext(AppContext);
    const [localList,setLocalList]=useState([])
  

   const addTolocal = () => {
   const x=prompt("enter name")
   if(x!=""){
    localStorage.setItem(`${x}`, JSON.stringify(choseList));
    
   }
      

let key;
   for ( var i = 0; i < localStorage.length ; ++i ) {
     key = localStorage.key(i);  
    localList.push(key);
     console.log(localStorage.key(i)+ localStorage.key(i).length);
     setLocalList([...localList])
     
    }
   }
    const saveItems = () => {
        openOverlay();

    };
    console.log(choseList);
    return createPortal(

        <div className={classes.overlay}>
            <button onClick={saveItems} className={classes.close}>close</button>
            <div className={classes.modal}>
                <button className={classes.favo} onClick={addTolocal}> Spara favoriter</button>
                <ul className={classes.locallist} >
               {localList.map((item)=>{
                   return(
                 <li className={classes.listItem} >
                 <p className={classes.list}> {item} </p>
                 <span className={classes.list__span}>{item.length} breakies</span>
                 </li>
               )})
}
        </ul>
            </div>

        </div>
        ,

        document.getElementById('modal')

    );

};



export default Overlay;