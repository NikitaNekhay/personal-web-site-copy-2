// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
//import {  PUBLIC_apiKey,  PUBLIC_authDomain,  PUBLIC_projectId,  PUBLIC_storageBucket,  PUBLIC_messagingSenderId,  PUBLIC_appId,  PUBLIC_measurementId} from '$env/static/public'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaO8DV2cZ58owM0y8TzV6h_a48lcsLjjw",
  authDomain: "personal-website-with-svelte.firebaseapp.com",
  projectId: "personal-website-with-svelte",
  storageBucket: "personal-website-with-svelte.appspot.com",
  messagingSenderId: "185564156502",
  appId: "1:185564156502:web:5ca8d28ee009ec015e21f7",
  measurementId: "G-R7KENNJDBP",
  // apiKey:   PUBLIC_apiKey,
  // authDomain:   PUBLIC_authDomain,
  // projectId:    PUBLIC_projectId,
  // messagingSenderId:   PUBLIC_messagingSenderId,
  // storageBucket:  PUBLIC_storageBucket,
  // appId:   PUBLIC_appId,
  // measurementId:   PUBLIC_measurementId,
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

// Get the Firebase Storage instance
export const storage = getStorage(firebaseApp);

// intialize firebase admin sdk


//  //var admin = require("firebase-admin");
//  const serviceAccount:ServiceAccount = json;

// import admin, { type ServiceAccount } from "firebase-admin";
// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount),
// //   databaseURL: "https://personal-website-with-svelte-default-rtdb.firebaseio.com"
// // });

// // Initialize Firebase Admin SDK
// //const serviceAccount = require('path/to/serviceAccountKey.json'); // Replace with the path to your service account key JSON file

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://personal-website-with-svelte-default-rtdb.firebaseio.com", // Replace with your project's database URL
// });

// export { admin }; // Export the admin SDK for use in other parts of your code