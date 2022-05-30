import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyBod0ksrldUidtAYJh5i7gSjz0KAYVVr1g',
  authDomain: 'breakie-f3639.firebaseapp.com',
  projectId: 'breakie-f3639',
  storageBucket: 'breakie-f3639.appspot.com',
  messagingSenderId: '208652442340',
  appId: '1:208652442340:web:08393cdb7294d930cb6af1',
});

export const db = getFirestore(app);

// const items=JSON.stringify(data).map((item)=>{console.log(item)})

// const addData=async()=>{
//    console.log(3)
// try{

//      const breakiesRef = await addDoc(collection(db, "Breakies") ,{items})

//            }
//             catch(error){  console.error("Error adding document: ", error);}
//          }

//          addData();
