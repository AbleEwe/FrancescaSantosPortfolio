// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUOid30PXHXD7pgZelXmaB39W14Olots8",
  authDomain: "francesca-santos.firebaseapp.com",
  projectId: "francesca-santos",
  storageBucket: "francesca-santos.appspot.com",
  messagingSenderId: "845732853732",
  appId: "1:845732853732:web:7b0b307a0f8522f1e7f9f1",
  measurementId: "G-LZ44R64LHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);