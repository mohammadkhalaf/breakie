import React from 'react';
import Filter from '../components/Filter';
import Search from '../components/Search';
import Choosebutton from '../components/Choosebutton';

const Manuall = () => {
  return (
    <div className='manuall'>
      <header>
        <Search />
       </header>
       <Filter />
      <Choosebutton />
    </div>
  );
};

export default Manuall;
