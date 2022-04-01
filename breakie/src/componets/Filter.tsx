import React from 'react'
import classes from './css/filter.module.css'


const Filter = () => {
  return (
    <section className={classes.filter_box}>
      <article className={classes.flex_item} >
        <h3 className={classes.filterTitle}>fysik</h3>
        <ul className={classes.filterlist}>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />dansa </label>  <span>1 minuter</span></li>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />dansa </label><span>30 seconder</span></li>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />dansa </label> <span>3 minuter</span></li>
        </ul>
      </article>
      <article className={classes.flex_item}>
        <h3 className={classes.filterTitle}>mental</h3>
        <ul className={classes.filterlist}>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />medita </label> <span>3 minuter</span></li>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />meditation </label> <span>1 minuter</span></li>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />meditation   </label><span>4 minuter</span> 
          </li>
        </ul></article>
      <article className={classes.flex_item}>
        <h3 className={classes.filterTitle}>social</h3>
        <ul className={classes.filterlist}>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />spela  </label><span>2 minuter</span></li>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />spela  </label><span>2 minuter</span></li>

        </ul></article>
    </section>
  )
}

export default Filter