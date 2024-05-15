// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpdYUcr2BdC92roPbkaw4okryHw8Rxv0g",
  authDomain: "mern-book-inventory-e9e5b.firebaseapp.com",
  projectId: "mern-book-inventory-e9e5b",
  storageBucket: "mern-book-inventory-e9e5b.appspot.com",
  messagingSenderId: "518278259344",
  appId: "1:518278259344:web:efa92123fbbb23cd4e6e15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
