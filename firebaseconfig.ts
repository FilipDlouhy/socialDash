// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwIrFdXKKeE0y0XQ0EwlSVrXGheUjb04g",
  authDomain: "socialdashmes.firebaseapp.com",
  projectId: "socialdashmes",
  storageBucket: "socialdashmes.appspot.com",
  messagingSenderId: "824204592329",
  appId: "1:824204592329:web:b325a957504c2e0b62f918",
  measurementId: "G-FMX1ZRRB02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const analytics = getAnalytics(app);

export {db}