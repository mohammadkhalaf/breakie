import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/activityContext';
// import { DocumentData } from 'firebase/firestore';
import classes from './breakie.module.css';
import fysisk from '../../assets/fysisk.svg';
import social from '../../assets/social.svg';
import mental from '../../assets/mental.svg';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import End from '../../components/Breakieend/End';

const Breakie = () => {
  const { activities } = useContext(AppContext);
  const [random, setRandom] = useState(Object);
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [img, setImg] = useState('');
  const [activ, setActiv]=useState(false)
  const [showModal, setShowModal] = useState(false);
  const [breakiestart,setBreakiestart]=useState(false)
  const navigate = useNavigate();

  const getRandom = async () => {
    console.log(showModal)
    setShowModal(true)
    //Random Breakie
    setLoading(true);
    const randomElement =
      activities[Math.floor(Math.random() * activities.length)];
    setRandom(randomElement);
    if (randomElement ) {
      setMinutes(randomElement.time);
      setSeconds(0);
    }

    setLoading(false);
  };

  console.log(random);

 //close modal 
 const closeModal = () => {
  setShowModal(false);
  
};
const breakie=()=>{
  setBreakiestart(true)
}
const breakieend=()=>{
 navigate('/')
}


  const updateRemainingTime = (s, m) => {
    setSeconds(s);
    setMinutes(m);
  };

  useEffect(() => {
    //Timer countdown
    let s = seconds;
    let m = minutes;
    const int = setInterval(() => {
      s--;
      if (s < 0) {
        m--;
        s = 59;
        if (m < 0) {
          m=0;
          if(s=0){
            s=0;
            
          }
        }
      }
      updateRemainingTime(s, m);
    }, 1000);
    return () => {
      clearInterval(int);
    };
  } , [random]);

  useEffect(() => {
    getRandom();
  }, [activities]);
  let randomUrl;
  if (random && random.URL) {
    //Ändra URL till new URl som replace embed istället watch?= då funkar youtube video
    const newURL = random.URL.replace('watch?v=', 'embed/');

    randomUrl =
      random && random.URL.includes('youtube') ? (
        <embed
          src={`${newURL}?autoplay=1&mute=1`}
          width='100%'
          type='video/mp4'
          height='100%'
        ></embed>
      ) : (
        //"https://www.youtube.com/embed/i8n1gSw_o_8"
        <img src={random.URL} alt='breakie-image' />
      );
  }
  else {

    if (random && random.type === "fysisk") {
      randomUrl =
        <img src={fysisk} alt='fysisk' />
    }
    else if (random && random.type === "social") {
      randomUrl =
        <img src={social} alt='social' />
    }
    else {
      randomUrl =

        <img src={mental} alt='social' />
    }

  }

  //Type icon in breakie header
  let imgtype;
  if (random && random.type === 'fysisk') {
    imgtype = <img src={fysisk} alt='fysisk' />;
  } else if (random && random.type === 'social') {
    imgtype = <img src={social} alt='social' />;
  } else {
    imgtype = <img src={mental} alt='social' />;
  }
  console.log(mental);

  return (
    <>
     
      {random ? (
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.header}>
              <h1>{random.name}</h1>

              <div className={classes.info}>
                <div className={classes.type}>
                  {imgtype}
                  <span>{random.type}</span>
                </div>
                <div>
                  <span className={classes.time}>
                    0{minutes}:{seconds < 10 ? 0 : null}
                    {seconds}
                  </span>
                  <span>minuter</span>
                </div>
              </div>
            </div>

            <div className={classes.image}>{randomUrl}
            {showModal &&   <Modal    closeModal={closeModal} breakie={breakie} breakieend={breakieend}  />}
            </div>
            <div className={classes.description}>
              <p>{random.desc}</p>
            </div>

            <div>
              <button className={activ ? `${classes.activ}`: classes.avsluta} onClick={()=>navigate('/end')}>Avsluta breakien</button>
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
