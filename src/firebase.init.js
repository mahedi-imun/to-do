// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKmRgvlBJjn1iLEb55XsTuElmjxTnplVM",
  authDomain: "to-do-73a36.firebaseapp.com",
  projectId: "to-do-73a36",
  storageBucket: "to-do-73a36.appspot.com",
  messagingSenderId: "1093297109938",
  appId: "1:1093297109938:web:150eeda4e55e3a5f1e02ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 