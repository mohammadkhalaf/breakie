import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/activityContext';
import useFetch from '../hooks/useFetch';

const Breakie = () => {
  const { state } = useContext(AppContext);
  const { data, isPending, err } = useFetch();

  return (
    <>
      {data.map((item: any, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </>
  );
};

export default Breakie;
