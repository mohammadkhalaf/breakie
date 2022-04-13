import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/activityContext';
import { db } from '../backend/firebase';
import { collection, getDocs, doc, DocumentData, query, where } from 'firebase/firestore';
import classes from './breakie.module.css';
import pic from '../assets/pic.svg';
  

const Breakie = () => {
const {activities,chosen} =useContext(AppContext)
  const [data, setData] = useState<DocumentData[] | null>(Array);
  const [random,setRandom]=useState(Object)
  
  const getRandom = async () => {
  
  switch(Array){
   case activities:{
   //Random Breakie
   const randomElement = chosen[Math.floor(Math.random() * chosen.length)] 
   setData(chosen);
   setRandom(randomElement);
   console.log(randomElement);
  
  }
  break;
  default : {
   const randomElement:DocumentData = activities[Math.floor(Math.random() * activities.length)] 
   setData(activities);
   setRandom(randomElement);
   console.log(randomElement);
 
   
  }

}
  

   
  
  };



  useEffect(() => {
    getRandom();
  }, [activities,chosen]);
  return (
    <>
    {random?
   
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.header}>
            <h1>{random.name}</h1>
            <div className={classes.info}>
              <div className={classes.type}>
                <img src={pic} alt='' />
                <span>{random.type}</span>
              </div>
              <div>
                <span className={classes.time}>{random.time}</span>
                <span>minuter</span>
              </div>
            </div>
          </div>
          <div className={classes.image}>
           <iframe src={random.URL} width="100%" height="100%" >
          </iframe> 
            {/* <img src={random.URL} alt="" /> */}
          </div>
          <div className={classes.description}>
            <p>
              {random.desc}
            </p>
          </div>
        </div>
      </div>
      :"loading"
    
}

    </>
  )
}

export default Breakie;
