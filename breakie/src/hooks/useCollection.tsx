import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  DocumentData,
  where,
  query,
} from 'firebase/firestore';
import { db } from '../backend/firebase';

const useCollection = (col: string) => {
  const [fysisk, setFysisk] = useState<DocumentData[] | null>(Array);
  const [mental, setMental] = useState<DocumentData[] | null>(Array);
  const [social, setSocial] = useState<DocumentData[] | null>(Array);

  const getFysisk = async () => {
    const q1 = query(collection(db, 'Breakies'), where('type', '==', 'fysisk'));
    const fysiskSnapshot = await getDocs(q1);
    const fysisklist: DocumentData[] = fysiskSnapshot.docs.map((doc) =>
      doc.data()
    );
    setFysisk(fysisklist);
  };
  //sort mental
  const getMental = async () => {
    const q2 = query(collection(db, 'Breakies'), where('type', '==', 'mental'));
    const mentalSnapshot = await getDocs(q2);
    const mentallist: DocumentData[] = mentalSnapshot.docs.map((doc) =>
      doc.data()
    );
    setMental(mentallist);
  };
  //sort Social
  const getSocial = async () => {
    const q2 = query(collection(db, 'Breakies'), where('type', '==', 'social'));
    const socialSnapshot = await getDocs(q2);
    const sociallist: DocumentData[] = socialSnapshot.docs.map((doc) =>
      doc.data()
     
    );
    setSocial(sociallist);
  };

  useEffect(() => {
    getSocial();
    getMental();
    getFysisk();
  }, [col]);

  return { mental, social, fysisk };
};

export default useCollection;
