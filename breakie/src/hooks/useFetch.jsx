import { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/activityContext';

const useFetch = () => {
  const [err, setErr] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState([]);
  const { dispatch } = useContext(AppContext);
  const fetchData = useCallback(async () => {
    setIsPending(true);
    try {
      const res = await fetch('http://localhost:3000/data');
      const data = await res.json();
      setData(data);

      dispatch({ type: 'SET_DATA', payload: data });
      setIsPending(false);
    } catch (error) {
      setErr(error.message);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return { data, isPending, err };
};

export default useFetch;
