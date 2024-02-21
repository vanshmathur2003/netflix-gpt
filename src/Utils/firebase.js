/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRU3LFG1KLIWyesnn7KkglZpAq3RKa8e0",
  authDomain: "netflixgpt69.firebaseapp.com",
  projectId: "netflixgpt69",
  storageBucket: "netflixgpt69.appspot.com",
  messagingSenderId: "813575783063",
  appId: "1:813575783063:web:805f713497bd4abe05dfd2",
  measurementId: "G-CCYGQVESDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
