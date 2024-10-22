import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app"
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat/app"
import "firebase/compat/firestore";
import "firebase/compat/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Wgq6109Nzs1JjzhiuN6aSt1iZxuYT3E",
  authDomain: "clone-8ad58.firebaseapp.com",
  projectId: "clone-8ad58",
  storageBucket: "clone-8ad58.appspot.com",
  messagingSenderId: "393562581795",
  appId: "1:393562581795:web:2e14b2d4e7e295d45e7a96",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Initialize Auth and Firestore
export const auth = getAuth(app);
export const db = app.firestore(); 