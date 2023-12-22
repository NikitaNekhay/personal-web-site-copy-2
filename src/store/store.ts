import { auth, db } from "$lib/firebase/firebase"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, type User } from "firebase/auth"
import { deleteDoc, doc } from "firebase/firestore";
import { writable } from "svelte/store"
import { Errors, Language } from "../shared/types";


export const currentLanguage = writable({
  language: Language.Russian
})




export const authStore = writable({
  user: null,
  loading: true,
  data: {
    name: "template",
    email: "",
    phone: "",
    country: "",
    description: "",
    messages: [],
    cart:[],
  },
});

////////////////
// export const statisticsStore = writable({
//   id: -1,
//   authorEmailClicks: 0,
//   adminDataClicks: 0,
// });

export const blogPost = writable({
  id: '',
  title: '',
  images: [] as string[],
  author: 'John Berkley',
  authorEmail: 'john.example@gmail.com',
  description: 'Lorem ipsum',
  price: 1,
  date: new Date(),

});

export const isAdmin = writable({
  value:false,
});

export const triggerComments = writable({
  value:false,
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
  changeCredentials: async(user,email, pass)=>{
    try {
          //const user  = auth.currentUser;
      updatePassword(user,pass);
      updateEmail(user,email)
    } catch (error) {
      console.error(error)
      throw error
    }

    
  },
  deactivate: async () => {
      try {
        if(auth.currentUser){
          console.log("deactivating account...",auth.currentUser.uid)
          let user:User = auth.currentUser;
          // Delete the user from Firestore
          const userDocRef = doc(db, "user", auth.currentUser.uid);
          await deleteDoc(userDocRef);

          // Delete user from Firebase Authentication
          user?.delete;

          await auth.currentUser?.delete()
          //  console.log('User successfully deactivated');
        }

    
      } catch (error) {
        console.error(error)
        throw Errors.DeleteProfile
      }

  },

}
