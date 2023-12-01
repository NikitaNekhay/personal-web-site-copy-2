import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBaO8DV2cZ58owM0y8TzV6h_a48lcsLjjw",
  authDomain: "personal-website-with-svelte.firebaseapp.com",
  projectId: "personal-website-with-svelte",
  storageBucket: "personal-website-with-svelte.appspot.com",
  messagingSenderId: "185564156502",
  appId: "1:185564156502:web:5ca8d28ee009ec015e21f7",
  measurementId: "G-R7KENNJDBP"
  // apiKey:   PUBLIC_apiKey,
  // authDomain:   PUBLIC_authDomain,
  // projectId:    PUBLIC_projectId,
  // messagingSenderId:   PUBLIC_messagingSenderId,
  // storageBucket:  PUBLIC_storageBucket,
  // appId:   PUBLIC_appId,
  // measurementId:   PUBLIC_measurementId,
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
getStorage(firebaseApp);
export {
  auth as a,
  db as d
};
