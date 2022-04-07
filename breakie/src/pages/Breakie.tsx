import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/activityContext';
// import useFetch from '../hooks/useFetch';
import { db } from "../backend/firebase"
import { collection, getDocs, doc, DocumentData } from "firebase/firestore"
import { breakiemodule } from '../models/breakie';


const Breakie = () => {



  const [data, setData] = useState<DocumentData[] | null>(Array);
  // 
  const getAllData = async () => {
    const breakisSnapshot = await getDocs(collection(db, "Breakies"))
    const breakieslist: DocumentData[] = breakisSnapshot.docs.map((doc) => doc.data());

    setData(breakieslist);

    console.log(breakieslist)

  }

  useEffect(() => {

    getAllData();
  }, [])

  


  return (
    <>
     {data&& data.map((item)=>{
       return <li>{item.name}  {item.type}</li>
     }) }
  
    </>
  )
};

export default Breakie;
