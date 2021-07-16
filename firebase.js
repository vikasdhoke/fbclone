import firebase from "firebase";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAxJaz6_8xMhdu5w9jMUDhvUFfPU1Hpq04",
    authDomain: "fbclone-6eaaa.firebaseapp.com",
    projectId: "fbclone-6eaaa",
    storageBucket: "fbclone-6eaaa.appspot.com",
    messagingSenderId: "293757769746",
    appId: "1:293757769746:web:53d6e441aa491d5be6e0cb"
  };

  const app =!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage};