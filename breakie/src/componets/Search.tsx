import React, { useEffect, useState } from 'react'
import data from '../data.json';
import { FaSearch } from "react-icons/fa";



const Search = () => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(""); 

  const handleChange = (event:any) => {
    setSearchField(event.target.value);
  };


  return (
      <div className='searchBar' >
      <FaSearch/>
    <input className='search' placeholder=''  type="text" value={searchField}
        onChange={handleChange} />  

   
    </div>
  )
}

export default Search


