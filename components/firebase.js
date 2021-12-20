// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcfie63-woYQC7cyFocC3pUL8L30zOk68",
  authDomain: "fir-taxi-app-6f7a7.firebaseapp.com",
  projectId: "fir-taxi-app-6f7a7",
  storageBucket: "fir-taxi-app-6f7a7.appspot.com",
  messagingSenderId: "1040664910042",
  appId: "1:1040664910042:web:0e21edab6cec88ed6cede3",
  measurementId: "G-36SNNY31YY",
  databaseURL: 'https://fir-taxi-app-6f7a7-default-rtdb.europe-west1.firebasedatabase.app/'
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
const db = getFirestore();
export default db