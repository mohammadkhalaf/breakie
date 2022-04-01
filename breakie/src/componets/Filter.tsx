import React from 'react'
import classes from './css/filter.module.css'


const Filter = () => {
  return (
    <section className={classes.filter_box}>
      <article className={classes.flex_item} >
        <h3 className={classes.filterTitle}>fysik</h3>
        <ul className={classes.filterlist}>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />dansa <span>1 minuter</span> </label></li>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />dansa <span>30 seconder</span></label></li>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />dansa <span>3 minuter</span> </label></li>
        </ul>
      </article>
      <article className={classes.flex_item}>
        <h3 className={classes.filterTitle}>mental</h3>
        <ul className={classes.filterlist}>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />medita<span>3 minuter</span> </label></li>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />meditation<span>1 minuter</span> </label> </li>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />meditation  <span>4 minuter</span>  </label>
          </li>
        </ul></article>
      <article className={classes.flex_item}>
        <h3 className={classes.filterTitle}>social</h3>
        <ul className={classes.filterlist}>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />spela <span>2 minuter</span> </label></li>
          <li className={classes.list__item}>  <label className={classes.label__checkbox}><input type="checkbox" />spela  <span>2 minuter</span></label></li>

        </ul></article>
    </section>
  )
}

export default Filter