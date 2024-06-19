// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC3fEaBSTQ360htxwyQeLd7-bpeODSYvY",
  authDomain: "kiwi-8fdac.firebaseapp.com",
  projectId: "kiwi-8fdac",
  storageBucket: "kiwi-8fdac.appspot.com",
  messagingSenderId: "775860639085",
  appId: "1:775860639085:web:715307d75f1dd07ac6f664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}
