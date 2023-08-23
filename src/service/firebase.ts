// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVagH4ZOpPsrsyreD3fA-qzbSB4_TlDsg",
    authDomain: "se-loger-5976e.firebaseapp.com",
    databaseURL: "https://se-loger-5976e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "se-loger-5976e",
    storageBucket: "se-loger-5976e.appspot.com",
    messagingSenderId: "450356946506",
    appId: "1:450356946506:web:30f0df5f8bd9a1fa9628b3",
    measurementId: "G-70ERM82FWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);