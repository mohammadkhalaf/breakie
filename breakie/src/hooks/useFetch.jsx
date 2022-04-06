import { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/activityContext';

const useFetch = () => {
  const [err, setErr] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { getData } = useContext(AppContext);
  let cancel = false;
  const fetchData = useCallback(async () => {
    setIsPending(true);
    try {
      const res = await fetch('http://localhost:3000/data');
      const data = await res.json();
      console.log(data);
      getData(data);
      if (!cancel) {
        setIsPending(false);
        setErr(null);
      }
    } catch (error) {
      if (!cancel) {
        setErr(error.message);
        setIsPending(false);
      }
    }
  }, []);
  useEffect(() => {
    fetchData();

    return () => {
      cancel = true;
    };
  }, [fetchData]);
  return { isPending, err };
};

export default useFetch;
