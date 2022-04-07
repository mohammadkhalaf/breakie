import classes from './breakie.module.css';
import pic from '../assets/pic.svg';

const Breakie = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.header}>
            <h1>Macarena</h1>
            <div className={classes.info}>
              <div className={classes.type}>
                <img src={pic} alt='' />
                <span>fysisk</span>
              </div>
              <div>
                <span className={classes.time}>3+</span>
                <span>minuter</span>
              </div>
            </div>
          </div>
          <div className={classes.image}></div>
          <div className={classes.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              aperiam doloremque quisquam magnam facilis nulla sequi, non cumque
              aut ut. quisquam magnam facilis nulla sequi, non cumque
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breakie;
