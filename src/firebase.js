import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDE-v5Tlxxg3AEbsEMqNvbIDFsHUTzkCu8",
  authDomain: "to-do-list-5d679.firebaseapp.com",
  projectId: "to-do-list-5d679",
  storageBucket: "to-do-list-5d679.appspot.com",
  messagingSenderId: "429609898131",
  appId: "1:429609898131:web:601f8cdbb25f9edd273d66"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
