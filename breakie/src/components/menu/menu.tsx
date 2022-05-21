import React, { useContext, useState } from 'react';
import classes from "./menu.module.css"
import { Link, useLocation } from 'react-router-dom';
import close from '../../assets/close.png'
import add from '../../assets/add.png'
import save from '../../assets/save.png'
import { AppContext } from '../../context/activityContext';



const Menu = () => {

    const { openOverlay } = useContext(AppContext);

    const saveItems = () => {
        openOverlay();

    };
    const x = useLocation();
    if (x.pathname == "/manuall") {
        return (
            <div className={classes.menu}>
                <Link to="/"><img className={classes.menu_icon} src={close} alt="close" /></Link>
                <img className={classes.menu_icon} onClick={saveItems} src={save} alt="save" />

            </div>
        )
    }
    else if (x.pathname == "/breakie") {
        return (
            <div className={classes.menu}>
                <Link to="/" className={classes.menu_link} ><img className={classes.menu_icon} src={close} alt="close" /></Link>
            </div>
        )
    }
    else {
        return (
            <div className={classes.menu}>
                <Link to="/" className={classes.menu_link}><img className={classes.menu_icon} src={close} alt="close" /></Link>
                <Link to="/input" className={classes.menu_link}><img className={classes.menu_icon} src={add} alt="add-breakie" /></Link>
            </div>
        )


    }
}

export default Menu


