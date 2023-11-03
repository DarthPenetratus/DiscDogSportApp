

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5-He8pQ6070GdEJz0cuW6Kh9fgdDbxNo",
  authDomain: "discdogsportapp-b2d37.firebaseapp.com",
  projectId: "discdogsportapp-b2d37",
  storageBucket: "discdogsportapp-b2d37.appspot.com",
  messagingSenderId: "244415499094",
  appId: "1:244415499094:web:05f0902a2ffeec6a8324f7",
  measurementId: "G-J7QEB2NJX3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Создание Firestore объекта

export { firebaseApp, db };
