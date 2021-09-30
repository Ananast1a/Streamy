// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhfee79deNAvaDeS6dKvGCZJ9MYu7yCXY",
  authDomain: "streamy-mi.firebaseapp.com",
  projectId: "streamy-mi",
  storageBucket: "streamy-mi.appspot.com",
  messagingSenderId: "142858697534",
  appId: "1:142858697534:web:eca73ee2b563f896328a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();