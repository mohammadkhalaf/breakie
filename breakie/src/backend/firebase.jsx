import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {doc, collection} from "firebase/firestore"



 
 // Initialize Firebase
 const app = initializeApp({
   apiKey: "AIzaSyBod0ksrldUidtAYJh5i7gSjz0KAYVVr1g",
   authDomain: "breakie-f3639.firebaseapp.com",
   projectId: "breakie-f3639",
   storageBucket: "breakie-f3639.appspot.com",
   messagingSenderId: "208652442340",
   appId: "1:208652442340:web:08393cdb7294d930cb6af1"
 });




export  const db = getFirestore(app);


 const breakiesRef   = collection(db, "Breakies"); 

         // var breakie= require('../../data/data.json')
        

         //   breakie.forEach(function(obj) {
         
         //    db.collection("Breakies").add({
            
         //       name :obj.name,
         //       type :obj.type,
         //       time:obj.time,
         //       desc:obj.desc
     
         //    })
           
            
            
      //        .catch(function(error) {
      //         console.error("Error adding document: ", error);
      //      });
         // });
      
 

