// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXG7RAxkRriFe6BKroLvD-Dd0uu7ZcDTM",
  authDomain: "ecommerce-site-47107.firebaseapp.com",
  projectId: "ecommerce-site-47107",
  storageBucket: "ecommerce-site-47107.appspot.com",
  messagingSenderId: "1021301465928",
  appId: "1:1021301465928:web:6ae0282a62fd95c96d897d"
};

console.log('::Iam In Fire Base app File ::');

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);