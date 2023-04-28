import { auth } from "$lib/firebase/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import {  writable } from "svelte/store"


export const authStore =  writable({
    user: null,
    loading: true,
    data: {
        messages:[] // []
    }
})

// let loginState = false
// let readyExit = false



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

    }
}