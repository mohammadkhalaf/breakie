import { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/activityContext';
import {db} from "../backend/firebase"
import{collection ,getDocs, doc} from "firebase/firestore"


const useFetch = () => {
  const [err, setErr] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState([] || null);
  // const { dispatch } = useContext(AppContext);

  
  const getAllData=async()=>{
    const breakisSnapshot =await getDocs(collection(db, "Brakies"))
    console.log("in firestore")
      const breakiesList= breakisSnapshot.docs.map((doc) => doc.data());
      console.log("in firestore 2")
      setData(breakiesList);
      console.log(breakiesList)
  
  }


  useEffect(()=>{
    getAllData();
  },[])

  
  // const fetchData = useCallback(async () => {
  //   setIsPending(true);
  //   try {
  // const getAllBreakie = async () => {
  // const querySnapshot = await getDocs(collection(db, "Breakies"));
  //querySnapshot.forEach((doc) => { 
      
  //   console.log(`${doc.id} => ${doc.data()}`);});
  //   setData(querySnapshot)
  // }
  // console.log(data);
  //    getAllBreakie();
  //   //   
  //   //   const res = await fetch('http://localhost:3000/data');
  //   //
  //   //   const data = await res.json();
  //   //   setData(data);
  //   //  console.log(1)
  //    dispatch({ type: 'SET_DATA', payload: data });
  //     setIsPending(false);
  //   } catch (error) {
  //     setErr(error.message);
  //   }
  // }, []);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return { data, isPending, err };
};

export default useFetch;
