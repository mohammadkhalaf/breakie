import React from 'react'

const Filter = () => {
  return (
    <section className='filter-box'>
      <article className="flex-item" >
        <h3 className='filterTitle'>fysik</h3>
        <ul className='filterlist'>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />dansa <span>1 minuter</span> </label></li>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />dansa <span>30 seconder</span></label></li>
          <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />dansa <span>3 minuter</span> </label></li>
        </ul>
        </article>
      <article className='flex-item'>
        <h3 className='filterTitle'>mental</h3>
        <ul className='filterlist'>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />meditation<span>3 minuter</span> </label></li>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />meditation<span>1 minuter</span> </label> </li>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />meditation  <span>4 minuter</span>  </label>
      </li>
        </ul></article>
      <article className='flex-item'>
        <h3 className='filterTitle'>social</h3>
        <ul className='filterlist'>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />spela <span>2 minuter</span> </label></li>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />spela  <span>2 minuter</span></label></li>
        
        </ul></article>
    </section>
  )
}

export default Filter