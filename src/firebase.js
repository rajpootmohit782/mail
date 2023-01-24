// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKuii5jQ9psdb1jFTey9xuU_Mj1E3PeLo",
  authDomain: "mail-box-3ce4d.firebaseapp.com",
  projectId: "mail-box-3ce4d",
  storageBucket: "mail-box-3ce4d.appspot.com",
  messagingSenderId: "554249428469",
  appId: "1:554249428469:web:86a6ee5d7a2ee1da6a54bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
