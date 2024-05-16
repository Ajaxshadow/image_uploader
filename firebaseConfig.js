// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_s9rUJPmme3aOLJrwlzFUzVJN5TQtHtk",
  authDomain: "image-uploader-2c25c.firebaseapp.com",
  projectId: "image-uploader-2c25c",
  storageBucket: "image-uploader-2c25c.appspot.com",
  messagingSenderId: "152572658491",
  appId: "1:152572658491:web:2b3293e6314ebfee012d1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);