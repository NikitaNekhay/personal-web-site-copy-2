// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDERID,
  // appId: import.meta.env.VITE_FIREBASE_APPID,
  // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID
  apiKey: "AIzaSyBaO8DV2cZ58owM0y8TzV6h_a48lcsLjjw",
  authDomain: "personal-website-with-svelte.firebaseapp.com",
  projectId: "personal-website-with-svelte",
  storageBucket: "personal-website-with-svelte.appspot.com",
  messagingSenderId: "185564156502",
  appId: "1:185564156502:web:5ca8d28ee009ec015e21f7",
  measurementId: "G-R7KENNJDBP",
};



// Initialize Firebase
let firebaseApp
if(!getApps().length){
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
        firebaseApp = initializeApp(firebaseConfig)
}

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);