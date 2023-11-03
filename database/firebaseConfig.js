// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB_AkW56TYAfNEGBkacpVNfufmMuZItSL4",
//   authDomain: "disco-dog.firebaseapp.com",
//   projectId: "disco-dog",
//   storageBucket: "disco-dog.appspot.com",
//   messagingSenderId: "318181167626",
//   appId: "1:318181167626:web:d479fd48dceadefec985f3",
//   measurementId: "G-2VEMKNZ7VX"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp); // Создание Firestore объекта

// export { firebaseApp, db };

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