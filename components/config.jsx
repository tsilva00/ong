// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvKxoQp-wQGaHcuWrTcSWWVVpuQZYNCRU",
  authDomain: "arvore-71ef4.firebaseapp.com",
  projectId: "arvore-71ef4",
  storageBucket: "arvore-71ef4.appspot.com",
  messagingSenderId: "205980446917",
  appId: "1:205980446917:web:2ab21d8d91f7b501d100ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);