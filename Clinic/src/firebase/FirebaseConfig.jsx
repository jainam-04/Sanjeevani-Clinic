import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, getDownloadURL } from 'firebase/storage'; // Import getStorage, ref, and getDownloadURL
const firebaseConfig = {
    apiKey: "AIzaSyD__Z0De-tDi-WH_9R9ERfpQnxKI126ZcY",
    authDomain: "authentication-e2d05.firebaseapp.com",
    projectId: "authentication-e2d05",
    storageBucket: "authentication-e2d05.appspot.com",
    messagingSenderId: "825767541444",
    appId: "1:825767541444:web:e979fe21b075e58e18e791",
    measurementId: "G-ZJN198MC8W"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const fireStorage = getStorage(app); // Initialize Firebase Storage instance

export { fireDB, auth, fireStorage, ref, getDownloadURL }; // Export fireStorage along with fireDB, auth, ref, and getDownloadURL
