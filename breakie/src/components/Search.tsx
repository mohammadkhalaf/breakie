import React, { useEffect, useState } from 'react';
// import data from '../data.json';
import { FaSearch } from 'react-icons/fa';
import { db } from '../backend/firebase';
import { collection, getDocs, doc, DocumentData, query, where } from 'firebase/firestore';

const Search = () => {
  const [searchField, setSearchField] = useState('');
  const [searchShow, setSearchShow] = useState('');

  const getAllData = async () => {
    const breakisSnapshot = await getDocs(collection(db, 'Breakies'));
    const breakieslist: DocumentData[] = breakisSnapshot.docs.map((doc) =>
      doc.data(),
     
    );
    
  }
  const handleChange = (event: any) => {
    setSearchField(event.target.value);
  };
   
  return (
    <div className='searchBar'>
      <FaSearch />
      <input
        className='search'
        placeholder=''
        type='text'
        value={searchField}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
