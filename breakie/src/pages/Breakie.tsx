import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/activityContext';
import useFetch from '../hooks/useFetch';

const Breakie = () => {
  const { activities } = useContext(AppContext);
  const { isPending, err } = useFetch();

  return (
    <>
      {activities.map((item: any) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </>
  );
};

export default Breakie;
