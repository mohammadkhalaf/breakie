import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import classes from './overlay.module.css';
import { AppContext } from '../../context/activityContext';
import { useContext } from 'react';






const Overlay = ({ choseList}) => {
    const { openOverlay } = useContext(AppContext);
    //  const [name, setName] = useState(String);
  

   let name;
   const addTolocal = () => {
   const x=prompt("enter name")
   if(x!=""){
    localStorage.setItem(`${x}`, JSON.stringify(choseList));
    
   }

   console.log(x)
   

    }
      
      

    const saveItems = () => {
        openOverlay();

    };
    console.log(name);
    console.log(choseList);
    return createPortal(

        <div className={classes.overlay}>
            <button onClick={saveItems} className={classes.close}>close</button>
            <div className={classes.modal}>
                <button className={classes.favo} onClick={addTolocal}> Spara favoriter</button>

                 <p className={classes.list}>   Name </p>
                 <span className={classes.list__span}>{choseList.length}</span>
             
            </div>

        </div>
        ,

        document.getElementById('modal')

    );

};



export default Overlay;