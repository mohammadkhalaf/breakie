import React from 'react'

const Filter = () => {
  return (
    <section className='filter-box'>
      <article className="flex-item" >
        <h3 className='filterTitle'>fysik</h3>
        <ul className='filterlist'>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />dansa </label><span>1 minuter</span></li>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />dansa </label><span>30 seconder</span></li>
          <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />dansa </label><span>3 minuter</span></li>
        </ul>
        </article>
      <article className='flex-item'>
        <h3 className='filterTitle'>mental</h3>
        <ul className='filterlist'>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />meditation </label><span>3 minuter</span></li>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />meditation </label> <span>1 minuter</span></li>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />meditation   </label><span>4 minuter</span>
      </li>
        </ul></article>
      <article className='flex-item'>
        <h3 className='filterTitle'>social</h3>
        <ul className='filterlist'>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />spela </label><span>2 minuter</span></li>
        <li className="list__item">  <label className='label--checkbox'><input type="checkbox" />spela </label><span>2 minuter</span></li>
        
        </ul></article>
    </section>
  )
}

export default Filter