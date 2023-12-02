import type { User } from 'firebase/auth';
import { db } from '../../lib/firebase/firebase';
import { collection, doc, getDoc, runTransaction, getDocs, deleteDoc } from "firebase/firestore";
import { authStore } from '../../store/store';
import { base } from '$app/paths';
import type { UserDataType,PostType } from '../../shared/types';


export const prerender = 'auto'

export async function updateUserProfile(user: User | string, name: string, email: string, phone: string, country: string, description: string, messages: [], cart:PostType[]) {
  try {
    let userDocRef:any;
    //console.log(typeof user)
    if (typeof user !== 'string')
      userDocRef = doc(collection(db, "user"), user.uid);
    else
      userDocRef = doc(collection(db, "user"), user);
    await runTransaction(db, async (transaction) => {
      const userDoc = await transaction.get(userDocRef);
      //console.log("userDoc is existing?",userDoc)
      if (!userDoc.exists()) {
        throw new Error("User does not exist");

      }

      const userData = userDoc.data();
     // console.log("WHAT WE HAVE FROM DOCUMENTS userData: ",userData)
     // console.log("WHAT WE HAVE FROM passing param cart: ",name)
      const updatedUserData:UserDataType = {
        name: name ?? userData.name ?? '',
        email: email ?? userData.email,
        phone: phone ?? userData.phone,
        country: country ?? userData.country,
        description: description ?? userData.description,
        messages: messages ?? userData.messages ?? [],
        cart: cart ?? userData.cart ?? [],
      };
      //console.log("WHAT WE GOT FROM SUBMIT updatedUserData: ",updatedUserData)

      transaction.update(userDocRef, updatedUserData); // was update
      console.log("we have really upaded user")
    });

  } catch (error) {
    console.error('Error updating user:', error);
  }

}

export async function refreshUserProfile(user: User) {
  try {
    //console.log("refreshing")
    const userDocRef = doc(collection(db, "user"), user.uid);

    await runTransaction(db, async (transaction) => {
      let tempEmail: string | undefined

      if (user.email === null) {
        tempEmail = "null"
      } else {
        tempEmail = user.email
      }

      const updatedUserData = {
        name: "",
        email: tempEmail,
        phone: "",
        country: "",
        description: "",
        messages: [],

      };

      // Update authStore to reflect changes in the user profile
      //set authStore to reflect changes in the user profile

    });
  } catch (error) {
    console.error('Error updating user:', error);
  }

}

export async function getUserProfile(user: User) {
  try {
    //console.log("getting user profile his id: ",user.uid)
    const userDoc = doc(collection(db, "user"), user.uid);
    const userSnapshot = await getDoc(userDoc);

    const userData = userSnapshot.data() // added reling to post.ts
    const emptyData:UserDataType = {
      user: user.uid,
      email: user.email,
      name: "",
      phone: "",
      country: "",
      description: "",
      messages: [],
      cart:[],
    }

    // console.log("is user exists? ",userSnapshot.exists())
    // console.log("user existing? ",userSnapshot.data())
    let checkExistance:boolean = false;
    let temp:UserDataType;
    temp = userSnapshot.data();

    if(temp.email==="" || temp.email === undefined || temp.email===null){
      checkExistance = false
    } else {
      checkExistance = true
    };

    return checkExistance ? userSnapshot.data() : emptyData;
  } catch (error) {
    console.error('Error fetching user:', error);
  }

}

async function getRawUserProfiles() {
  try {

    const userDocs = collection(db, 'user');
    const userSnapshots = await getDocs(userDocs);

    // Extract the data from each blog post document
    const userProfiles = userSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return userProfiles;
  } catch (error) {
    console.error('Error fetching user profiles:', error);
    return [];
  }
}

export async function getUserShoppingCart(user: User) {
  try {
    console.log("getUserShoppingCart user: ",user)
    const userDoc = doc(collection(db, "user"), user.uid);
    const userSnapshot = await getDoc(userDoc);

    const userData = userSnapshot.data() // added reling to post.ts
    const emptyData = {
      user: user.uid,
      email: user.email,
    }

    console.log("getUserShoppingCart, this is user data:",userData)

    // authStore.set({
    //   user: user,
    //   loading: true,
    //   data: updatedUserData,

    // })
    // authStore.set({
    //   user:userData.user,
    //   loading:userData.loading,
    //   data:userData.data
    // }) // added reling to post.ts : all other data is missing for complete setting
    console.log("is user exists? ",userSnapshot.exists())

    return userSnapshot.exists() ? userSnapshot.data() : emptyData;
  } catch (error) {
    console.error('Error fetching user:', error);
  }

}

export async function getUserProfiles() {
  let userProfileTemplate
  const userDocs = collection(db, 'user');
  const userSnapshots = await getDocs(userDocs);

  // Extract the data from each blog post document
  let userProfiles = userSnapshots.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));


  let i = 0
  for (i = 0; i < userProfiles.length; i++) {

    let tempData
    let tempStatus

    try {
      // console.log(userProfiles)
      // const promises = userProfiles.map(async (profile) => {
      //   try {
      //     const userCredential = await auth.getUser(userProfiles.id);
      //    // const user = userCredential.data();
      //    console.log(userCredential)
      //    // const userData = {
      //    //   userId: profile.userId,
      //    //   emailVerified: user.emailVerified,
      //    //   // Add any other user data you want to fetch from Firebase Authentication
      //    // };

      //    // return userData;
      //   } catch (error) {
      //     console.log(`Error retrieving user data for user with ID ${profile.userId}:`, error);
      //     return null;
      //   }
      // });

      // const userDataArray = await Promise.all(promises);
      // const filteredUserDataArray = userDataArray.filter((userData) => userData !== null);
      // userProfileTemplate = {
      //   userProfiles,
      //   filteredUserDataArray,
      // }
      return userProfiles
    } catch (error) {
      console.error("error while adding additional info for each user", error)
    }




  }
}

export async function handleDelete(id: string) {
  try {
   
    const postDocRef = doc(collection(db, 'user'), id);
    await deleteDoc(postDocRef);
    // console.log('user is deleted:', id);

  


  } catch (error) {
    console.error('Error deleting blog post:', error);
  }
  
  
}

