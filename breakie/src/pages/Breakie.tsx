import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/activityContext';
import useFetch from '../hooks/useFetch';

const Breakie = () => {
  
  const { data } = useFetch();

  
 

  return (
    <>
      {data.map((item: any, index) => {
        return <li key={index}>{item.name}</li>;
      })}
      <>hello</>
    </>
  );
};

export default Breakie;
