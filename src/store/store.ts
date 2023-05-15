import { auth, db } from "$lib/firebase/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { collection, deleteDoc, doc, getDoc} from "firebase/firestore";
import {  writable } from "svelte/store"
import { getStorage } from 'firebase/storage';
import {onMount } from "svelte";
import { getUserProfile } from "../routes/profile/user";


function createLocalStorageStore(key: string, initialValue: any) {
    try {
      const localStorageAvailable = typeof localStorage !== 'undefined';
  
      const storedValue = localStorageAvailable ? localStorage.getItem(key) : null;
      const initialValueToUse = localStorageAvailable && storedValue !== null ? JSON.parse(storedValue) : initialValue;
    
      const { subscribe, set, update } = writable(initialValueToUse);
    
      return {
        subscribe,
        set(value: any) {
          set(value);
    
          if (localStorageAvailable) {
            localStorage.setItem(key, JSON.stringify(value));
          }
        },
        update,
      };
    } catch (error) {
      console.log("error createLocalStorageStore ",error)
    }
   
  }
  
  export const authStore = createLocalStorageStore('auth', {
    user: null,
    loading: true,
    data: {
      name: "",
      email: "",
      phone: "",
      country: "",
      description: "",
      messages:[],
    },
  });

  export const statisticsStore = createLocalStorageStore('stat', {
    id: -1,
    authorEmailClicks: 0,
    adminDataClicks: 0,
  });

export const blogPost = writable({
    id:'',
    title:'',
    images: [] as string[],
    author: 'John Berkley',
    authorEmail: 'john.example@gmail.com',
    description: 'Lorem ipsum',
    price: 1,
    date: new Date(),
    
});

export const authHandlers = {

    signup: async (email,pass) => {
        await createUserWithEmailAndPassword(auth,email,pass)
        console.log("creating user")
    },
    login:async (email,pass) => {
        console.log("signing in")
        await signInWithEmailAndPassword(auth,email,pass)
    },
    logout: async () => {
        console.log("signing out")
        await signOut(auth)

    },
    deactivate: async () => {
        console.log("deactivating account...")
        // Delete the user from Firestore
        // const userDocRef = doc(db, "user", );
        // await deleteDoc(userDocRef);
        // await db.collection("user").doc(auth.currentUser?.uid).delete();

       // Delete user from Firebase Authentication
        await auth.currentUser?.delete()
        console.log('User successfully deactivated');

    },

}
