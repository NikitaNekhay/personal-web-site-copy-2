import { auth, db } from "$lib/firebase/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { collection, deleteDoc, doc} from "firebase/firestore";
import {  writable } from "svelte/store"
import { getStorage } from 'firebase/storage';
import {onMount } from "svelte";
import { getUserProfile } from "../routes/profile/user";

export const authStore =  writable({
    user: null,
    loading: true,
    data: {
        // []
        name: "",
        email: "",
        phone: "",
        country: "",
        description: "",
        messages:[],
    }

})

export const profile = writable({
    name: '',
    email: '',
    phone: '',
    country: '',
    description: ''
});

export const blogPost = writable({
    id:0,
    title:'',
    images: [],
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


export const blogPostHandlers = {
    add: async () => {
        
        console.log("creating user")
    },
    delete: async () => {
        
        console.log("deleting user")
    },
}