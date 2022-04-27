import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  DocumentData,
  where,
  query,
} from 'firebase/firestore';
import { db } from '../backend/firebase';

const useCollection = (col) => {
  const [fysisk, setFysisk] = useState(Array);
  const [mental, setMental] = useState(Array);
  const [social, setSocial] = useState(Array);

  const getFysisk = async () => {
    const q1 = query(collection(db, 'Breakies'), where('type', '==', 'fysisk'));
    let fysiskResults = [];
    const fysiskSnapshot = await getDocs(q1);
    fysiskSnapshot.docs.map((doc) => {
      fysiskResults.push({ ...doc.data(), id: doc.id, isChecked: false });
    });
    setFysisk(fysiskResults);
  };
  //sort mental
  const getMental = async () => {
    const q2 = query(collection(db, 'Breakies'), where('type', '==', 'mental'));
    let mentalResults = [];
    const mentalSnapshot = await getDocs(q2);
    mentalSnapshot.docs.map((doc) => {
      mentalResults.push({ ...doc.data(), id: doc.id, isChecked: false });
    });
    setMental(mentalResults);
  };
  //sort Social
  const getSocial = async () => {
    const q2 = query(collection(db, 'Breakies'), where('type', '==', 'social'));
    let socialResults = [];
    const socialSnapshot = await getDocs(q2);
    socialSnapshot.docs.map((doc) => {
      socialResults.push({ ...doc.data(), id: doc.id });
    });
    setSocial(socialResults);
  };

  useEffect(() => {
    getSocial();
    getMental();
    getFysisk();
  }, [col]);

  return { mental, social, fysisk };
};

export default useCollection;
