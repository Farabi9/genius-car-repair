// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChcdE2A4T_flTIvWMCKEVqYoNdG963-eU",
  authDomain: "genius-car-services-4aca4.firebaseapp.com",
  projectId: "genius-car-services-4aca4",
  storageBucket: "genius-car-services-4aca4.appspot.com",
  messagingSenderId: "528961326370",
  appId: "1:528961326370:web:328fd0c8cbb6f6dd93a97b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;