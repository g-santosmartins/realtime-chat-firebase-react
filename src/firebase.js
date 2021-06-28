// Your web app's Firebase configuration

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"; /*to setup the realtime database*/
import "firebase/storage";


var firebaseConfig = {
    // paste your Auth from https://firebase.google.com/?hl=pt-br here. ;D
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

//   module, making it avaliable
  export default firebase;