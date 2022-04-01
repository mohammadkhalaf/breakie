import React from 'react';
import Filter from '../componets/Filter';
import Search from '../componets/Search';
import Choosebutton from '../componets/Choosebutton';

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
