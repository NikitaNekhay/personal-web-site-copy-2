// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { env } from "$env/dynamic/public";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:   env.PUBLIC_FIREBASE_API_KEY,
  authDomain:   env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:    env.PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId:   env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket:  env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId:   env.PUBLIC_FIREBASE_APP_ID,
  measurementId:   env.PUBLIC_FIREBASE_MEASUREMENT_ID,
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

