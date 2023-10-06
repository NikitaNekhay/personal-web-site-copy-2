// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import {  PUBLIC_apiKey,  PUBLIC_authDomain,  PUBLIC_projectId,  PUBLIC_storageBucket,  PUBLIC_messagingSenderId,  PUBLIC_appId,  PUBLIC_measurementId} from '$env/static/public'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey:   PUBLIC_apiKey,
  authDomain:   PUBLIC_authDomain,
  projectId:    PUBLIC_projectId,
  messagingSenderId:   PUBLIC_messagingSenderId,
  storageBucket:  PUBLIC_storageBucket,
  appId:   PUBLIC_appId,
  measurementId:   PUBLIC_measurementId,
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
