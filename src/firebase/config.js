// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPdqmAqRrzPzJ9LZOoUTWO5i5usDeriZY",
  authDomain: "talento-tech-a5563.firebaseapp.com",
  projectId: "talento-tech-a5563",
  storageBucket: "talento-tech-a5563.firebasestorage.app",
  messagingSenderId: "1064600114965",
  appId: "1:1064600114965:web:19b6d9adfbbc6aecc1fb1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para login 
const auth = getAuth(app);

export { db, auth};