import React, { useState } from 'react'
import { Breakie } from '../models/breakie';

const Search = () => {
  const [search,setSearch]=useState < Breakie[] | null>(null);



  return (
      <div  >
    <input className='search' placeholder='skriv här' type="text"/>
   
    </div>
  )
}

export default Search

function keywoed(keywoed: any) {
  throw new Error('Function not implemented.');
}
