import React from 'react'
import Filter from '../componets/Filter'
import Search from '../componets/Search'
import Slumpbutton from '../componets/Slumpbutton'

const Manuall = () => {
  return (
    <div className='manuall'>
   <header>
   <Search />
    </header>
    <body>
    
    <Filter />
    <Slumpbutton/>
    </body>
    </div>
    
  )
}

export default Manuall