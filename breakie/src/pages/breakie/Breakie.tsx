import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/activityContext';
import { DocumentData } from 'firebase/firestore';
import classes from './breakie.module.css';
import pic from '../../assets/pic.svg';

const Breakie = () => {
  const { activities } = useContext(AppContext);
  const [data, setData] = useState<DocumentData[] | null>(Array);
  const [random, setRandom] = useState(Object);
  const [loading, setLoading] = useState(false);

  const getRandom = async () => {
    //Random Breakie
    setLoading(true);
    const randomElement: DocumentData =
      activities[Math.floor(Math.random() * activities.length)];
    setData(activities);
    setRandom(randomElement);
    setLoading(false);
  };

  useEffect(() => {
    getRandom();
  }, [activities]);

  let randomUrl;
  if (random && random.URL) {
    console.log(`${random.URL}`);
    //Ändra URL till new URl som replace embed istället watch?= då funkar youtube video
    const newURL = random.URL.replace('watch?v=', 'embed/');

    randomUrl =
      random && random.URL.includes('youtube') ? (
        <embed src={newURL} width='100%' type='video/mp4' height='100%'  ></embed>
      ) : (
        //"https://www.youtube.com/embed/i8n1gSw_o_8"
        <img src={random.URL} alt='breakie-image' />
      );
  }

  
  return (
    <>
      {random ? (
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.header}>
              <h1>{random.name}</h1>
              <div className={classes.info}>
                <div className={classes.type}>
                  <img src={pic} alt='breakie' />
                  <span>{random.type}</span>
                </div>
                <div>
                  <span className={classes.time}>{random.time}</span>
                  <span>minuter</span>
                </div>
              </div>
            </div>

            <div className={classes.image}>{randomUrl}</div>
            <div className={classes.description}>
              <p>{random.desc}</p>
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default Breakie;
