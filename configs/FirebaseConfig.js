// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHVuvjy0lt536Pfco-O3ALJZm-p9nddk0",
  authDomain: "travel-planner-86e9f.firebaseapp.com",
  projectId: "travel-planner-86e9f",
  storageBucket: "travel-planner-86e9f.firebasestorage.app",
  messagingSenderId: "41392285014",
  appId: "1:41392285014:web:9ca9f5a4cd8cb94f8e62f7",
  measurementId: "G-V5YZT2XW7P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)