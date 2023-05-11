import type { User } from 'firebase/auth';
import { db } from '../../lib/firebase/firebase';
import { collection, doc, getDoc, updateDoc,runTransaction, query, getDocs} from "firebase/firestore";


export async function updateUserProfile(user:User, name: string, email: string, phone: string, country: string, description: string) {
  try{

    const userDocRef = doc(collection(db, "user"), user.uid);
    
    await runTransaction(db, async (transaction) => {
      const userDoc = await transaction.get(userDocRef);
      if (!userDoc.exists()) {
        throw new Error("User does not exist");
      }
      
      const userData = userDoc.data() as User;
      console.log(userData)
      const updatedUserData = {
        name: name ?? userData.name,
        email: email ?? userData.email,
        phone: phone ?? userData.phone,
        country: country ?? userData.country,
        description: description ?? userData.description,
        messages: [""] ?? userData.messages,
      };

      // Update user document
      transaction.update(userDocRef, updatedUserData);
      console.log(updatedUserData)
    });
      // Update email field of messages sub-collection
      const messagesQuery = query(collection(userDocRef, "messages"));
      const messagesQuerySnapshot = await getDocs(messagesQuery);
      messagesQuerySnapshot.forEach((doc) => {
        // transaction.update(doc.ref, { email: email ?? userData.email });
        updateDoc(doc.ref, { email: email ?? user.email });
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
