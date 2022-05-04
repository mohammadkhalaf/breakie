import React,{useContext, useState} from 'react';
import classes from "./menu.module.css"
import { Link,useLocation } from 'react-router-dom';
import Overlay from '../overlay/Overlay';
import Filter from '../filter/Filter';
import MyFavo from '../overlay/Overlay';
import { AppContext } from '../../context/activityContext';



const Menu=()=>{
    //  const [showOverlay, setShowOverlay] = useState<boolean>(false);
    //  let addOverlay = null
    //  if (showOverlay==true) {
    //      const closeOverlay = () => setShowOverlay(false)
    //      addOverlay = <Overlay close={closeOverlay}  />
    
    //  }
   
    //  const ShowOverlay = () => {
    //      // visa overlay
    //      setShowOverlay(true)
         
   
    //  }
   
    const { openOverlay } = useContext(AppContext);

    const saveItems = () => {
    
    openOverlay();
    
    };
const x=useLocation();
if(x.pathname=="/manuall"){
    return(
        <div className={classes.menu}>
        <Link to="/">close</Link>
        <button onClick={saveItems}>save</button>
        
        </div>
    )
}

else{
return( 
<div className={classes.menu}>
<Link to="/" className={classes.menu_link}>close</Link>
<Link to="/input" className={classes.menu_link}>+</Link>
</div>
)


}}

export default Menu


