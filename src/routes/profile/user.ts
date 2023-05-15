import type { User } from 'firebase/auth';
import { db } from '../../lib/firebase/firebase';
import { collection, doc, getDoc, updateDoc,runTransaction, query, getDocs} from "firebase/firestore";
import { authStore } from '../../store/store';


export async function updateUserProfile(user:User, name: string, email: string, phone: string, country: string, description: string,messages:[]) {
  try{
    const userDocRef = doc(collection(db, "user"), user.uid);
    await runTransaction(db, async (transaction) => {
      const userDoc = await transaction.get(userDocRef);
      if (!userDoc.exists()) {
        if(!user){
          throw new Error("User does not exist");
        } else {
          refreshUserProfile(user)
          return
        }
       
      }
      
      const userData = userDoc.data();
      console.log("WHAT WE HAVE FROM DOCUMENTS userData: ",userData)
      const updatedUserData = {
        name: name ?? userData.name,
        email: email ?? userData.email,
        phone: phone ?? userData.phone,
        country: country ?? userData.country,
        description: description ?? userData.description,
        messages: messages ?? userData.messages,
      };
      console.log("WHAT WE GOT FROM SUBMIT updatedUserData: ",updatedUserData)
      // Update authStore to reflect changes in the user profile
      authStore.update((store) => {
        store.user = user
        store.loading = true
        store.data.email = updatedUserData.email
        store.data.country = updatedUserData.country
        store.data.name = updatedUserData.name
        store.data.email = updatedUserData.email
        store.data.phone = updatedUserData.phone
        store.data.country = updatedUserData.country
        store.data.description = updatedUserData.description
        console.log("this is the store:",store)
        return {
          user: user,
          loading: true,
          data: {
            ...store.data,
            name: updatedUserData.name,
            email: updatedUserData.email,
            phone: updatedUserData.phone,
            country: updatedUserData.country,
            description: updatedUserData.description,
          },
        };
      });
      // Update user document
      transaction.update(userDocRef, updatedUserData);

    });
    
  } catch (error) {
    console.error('Error updating user:', error);
  }
  
}

export async function refreshUserProfile(user:User) {
  try{
    console.log("refreshing")
    const userDocRef = doc(collection(db, "user"), user.uid);
    
    await runTransaction(db, async (transaction) => {
      let tempEmail:string|undefined

      if(user.email===null){
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
        messages: [""] ,
        
      };

      //set authStore to reflect changes in the user profile
      authStore.set({
        user:user,
        // data.email = tempEmail
        loading:true,
        data:{
            name: updatedUserData.name,
            email: tempEmail,
            phone: updatedUserData.phone,
            country: updatedUserData.country,
            description: updatedUserData.description,
        },
      
      })
      //update authStore to reflect changes in the user profile
      // authStore.update((store) => {
      //   store.loading = true
      //   store.data.email = updatedUserData.email
      //   // console.log(store)
      //   return {
      //     ...store,
      //     loading: true,
      //     data: {
      //       ...store.data,
      //       email: updatedUserData.email,
      //     },
      //   };
      // });

      //update authStore to reflect changes in the user profile
      // authStore.update((store) => {
      //   return {
      //     ...store,
      //     user:user,
      //     loading: true,
      //     data: {
      //       ...store.data,
      //       email: updatedUserData.email,
      //     },
      //   };
      // });

    });
  } catch (error) {
    console.error('Error updating user:', error);
  }
  
}

export async function getUserProfile(user:User){
  try{
    console.log(user.uid)
    const userDoc = doc(collection(db, "user"), user.uid);
    const userSnapshot = await getDoc(userDoc);
    return userSnapshot.exists() ? userSnapshot.data() : null;
  } catch (error) {
    console.error('Error fetching user:', error);
  }

}
