import { useEffect, useState } from 'react';
import {collection,getDocs} from 'firebase/firestore';
import { db } from '../backend/firebase';

const useCollection = (col) => {
  const [allBreakies, setAll] = useState(Array);
  const getAllbreakie = async () => {
  let all=[];
  const querySnapshot = await getDocs(collection(db, 'Breakies'));
  querySnapshot.forEach((doc) => {
    all.push({ ...doc.data(), id: doc.id, isChecked: false });
  });
  setAll(all);
}
  useEffect(() => {
    getAllbreakie();
  }, [col]);

  return { allBreakies,setAll };
};

export default useCollection;
