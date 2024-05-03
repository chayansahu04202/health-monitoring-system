// import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getDatabase,getFirestore ,  ref } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD1zegtA2RlOBVQ_7W1qaBsAYordvoW9XE",
  authDomain: "majortesting-fad3a.firebaseapp.com",
  databaseURL: "https://majortesting-fad3a-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "majortesting-fad3a",
  storageBucket: "majortesting-fad3a.appspot.com",
  messagingSenderId: "687314039080",
  appId: "1:687314039080:web:af261c13b45c953946e01d",
  measurementId: "G-3VG8MJMY4K"
};
// const app = initializeApp(firebaseConfig);

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore(app);
// export default {db};
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default firebase;