
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



// const db = admin.firestore();
    
  //  var breakie= require('../data.json')
    
  //       breakie.forEach(function(obj) {
         
  //          db.collection("Breakie").add({
            
  //             name : obj.name,
  //             type:obj.type,
  //             time:obj.time,
  //             desc:obj.desc

  //           })
           
            
            
  //           .catch(function(error) {
  //            console.error("Error adding document: ", error);
  //         });
  //       });
      