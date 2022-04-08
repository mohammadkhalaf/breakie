import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/activityContext';
// import useFetch from '../hooks/useFetch';
import { db } from '../backend/firebase';
import { collection, getDocs, doc, DocumentData } from 'firebase/firestore';
import { breakiemodule } from '../models/breakie';
import classes from './breakie.module.css';
import pic from '../assets/pic.svg';


const Breakie = () => {
  const [data, setData] = useState<DocumentData[] | null>(Array);
  const [random,setRandom]=useState(Object)
  //
  const getAllData = async () => {
    const breakisSnapshot = await getDocs(collection(db, 'Breakies'));
    const breakieslist: DocumentData[] = breakisSnapshot.docs.map((doc) =>
      doc.data()
     
    );

    //Random Breakie
    const randomElement:DocumentData = breakieslist[Math.floor(Math.random() * breakieslist.length)]

    setData(breakieslist);
    setRandom(randomElement);

    console.log(randomElement);
    
    console.log(breakieslist);
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
    {random?
   
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.header}>
            <h1>Macarena</h1>
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
          <div className={classes.image}></div>
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
  );
};

export default Breakie;
