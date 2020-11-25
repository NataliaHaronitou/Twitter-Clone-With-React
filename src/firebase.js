import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCaBb0CYDOkr0R3k-L-mH9pByQrMDVclrI",
    authDomain: "twitter-5dead.firebaseapp.com",
    databaseURL: "https://twitter-5dead.firebaseio.com",
    projectId: "twitter-5dead",
    storageBucket: "twitter-5dead.appspot.com",
    messagingSenderId: "223206160409",
    appId: "1:223206160409:web:ce67bea0d5eaeba4101288",
    measurementId: "G-D297RMP5C7",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  
  export default db;
