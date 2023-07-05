// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_7xZBV3sihaWxW_S3Pv7oTG8tVbV5gA0",
  authDomain: "reciclamais-a8d22.firebaseapp.com",
  projectId: "reciclamais-a8d22",
  storageBucket: "reciclamais-a8d22.appspot.com",
  messagingSenderId: "239139070113",
  appId: "1:239139070113:web:505570b0bb37431c5d50e0",
  measurementId: "G-K1YBXVZLST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {app, db}


console.log(db)