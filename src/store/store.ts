import { auth, db } from "$lib/firebase/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { deleteDoc, doc } from "firebase/firestore";
import { writable } from "svelte/store"


// function createLocalStorageStore(key, initialValue) {
//   const storedValue = localStorage.getItem(key);
//   let initialValueToUse;

//   if (storedValue !== null) {
//     try {
//       initialValueToUse = JSON.parse(storedValue);
//     } catch (error) {
//       console.log("Error parsing stored value:", error);
//     }
//   } else {
//     initialValueToUse = initialValue;
//     localStorage.setItem(key, JSON.stringify(initialValue));
//   }

//   const { subscribe, set, update } = writable(initialValueToUse);

//   return {
//     subscribe,
//     set(value) {
//       set(value);
//       localStorage.setItem(key, JSON.stringify(value));
//     },
//     update,
//   };
// }


// export const authStore = createLocalStorageStore('auth',{
//   user: null,
//   loading: true,
//   data: {
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     description: "",
//     messages:[],
//   },
// });

export enum Language {
  English = 'en',
  Russian = 'ru',
}

// if (typeof window !== 'undefined') {
//   // Perform localStorage action
//   localStorage.setItem("language",Language.English)

// }



export const currentLanguage = writable({
  language: Language.English
})


// export const language = derived<SessionStore, Language>(session, ($session, set)=>{})

// export const currentLanguage = writable<Language>(Language.English, (set)=>{
//   if(browser){
//     const localStorageValue = window.localStorage.getItem(
//       'language'
//     ) as Language | null
//     const value = localStorageValue
//       ? localStorageValue
//       : window.onlanguagechange
//       ? Language.English
//       : Language.Russian

//     set(value)
//   }
// })

// currentLanguage.subscribe((value)=>{
//   if(browser){
//     window.localStorage.setItem('language',value)
//   }
// })


export const authStore = writable({
  user: null,
  loading: true,
  data: {
    name: "",
    email: "",
    phone: "",
    country: "",
    description: "",
    messages: [],
  },
});

////////////////
// export const statisticsStore = writable({
//   id: -1,
//   authorEmailClicks: 0,
//   adminDataClicks: 0,
// });

export const postsStore = writable({
  id: '',
  title: '',
  images: [] as string[],
  author: 'John Berkley',
  authorEmail: 'john.example@gmail.com',
  description: 'Lorem ipsum',
  price: 1,
  date: new Date(),

});


export const authHandlers = {

  signup: async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass)
    // console.log("creating user")
    // var emailAuth = email;

    // FirebaseAuth.instance.sendSignInLinkToEmail(
    //         email: emailAuth, actionCodeSettings: acs)
    //     .catchError((onError) => print('Error sending email verification $onError'))
    //     .then((value) => print('Successfully sent email verification'));
    // };
  },
  login: async (email, pass) => {
    // console.log("signing in")
    await signInWithEmailAndPassword(auth, email, pass)
  },
  logout: async () => {
    // console.log("signing out")
    await signOut(auth)

  },
  deactivate: async () => {
    //  console.log("deactivating account...")
    // Delete the user from Firestore
    const userDocRef = doc(db, "user", auth.currentUser.uid);
    await deleteDoc(userDocRef);
    await db.collection("user").doc(auth.currentUser?.uid).delete();

    // Delete user from Firebase Authentication
    await auth.currentUser?.delete()
    //  console.log('User successfully deactivated');

  },

}
