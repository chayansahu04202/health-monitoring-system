// // lib/firebase-config.js
// import firebase from 'firebase/app';
// import 'firebase/database';

// const firebaseConfig = {
//     apiKey: "AIzaSyD1zegtA2RlOBVQ_7W1qaBsAYordvoW9XE",
//     authDomain: "majortesting-fad3a.firebaseapp.com",
//     databaseURL: "https://majortesting-fad3a-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "majortesting-fad3a",
//     storageBucket: "majortesting-fad3a.appspot.com",
//     messagingSenderId: "687314039080",
//     appId: "1:687314039080:web:af261c13b45c953946e01d"
// };



// const db = firebase.database();

// export default db;




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1zegtA2RlOBVQ_7W1qaBsAYordvoW9XE",
  authDomain: "majortesting-fad3a.firebaseapp.com",
  databaseURL: "https://majortesting-fad3a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "majortesting-fad3a",
  storageBucket: "majortesting-fad3a.appspot.com",
  messagingSenderId: "687314039080",
  appId: "1:687314039080:web:af261c13b45c953946e01d",
  measurementId: "G-3VG8MJMY4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database} 