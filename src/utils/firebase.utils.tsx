// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAu82s6JR9cjiZr3VpR1M_MrAzEvWXvlEY",
  authDomain: "expense-manager-em.firebaseapp.com",
  projectId: "expense-manager-em",
  storageBucket: "expense-manager-em.appspot.com",
  messagingSenderId: "946384996774",
  appId: "1:946384996774:web:fb16b026eef6b67f82a767",
  measurementId: "G-6E50FJK7CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)

export default app