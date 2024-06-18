// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtLuGrSa7oFuCKpk6N7pRRKDQ-RfquOng",
  authDomain: "scs-login2024.firebaseapp.com",
  projectId: "scs-login2024",
  storageBucket: "scs-login2024.appspot.com",
  messagingSenderId: "8092736675",
  appId: "1:8092736675:web:f22fcb4ff49ad5c27e7316"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;