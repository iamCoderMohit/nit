// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZZ0xPfV_vPGUHMhES1Yz5Lqy5kqdo0gI",
  authDomain: "nit-ds.firebaseapp.com",
  projectId: "nit-ds",
  storageBucket: "nit-ds.firebasestorage.app",
  messagingSenderId: "302323435874",
  appId: "1:302323435874:web:504765aa54f6a4d4c3c43b",
  measurementId: "G-XB1W0LDQLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
const analytics = getAnalytics(app);