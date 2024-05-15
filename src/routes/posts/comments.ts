import { addDoc, collection, deleteDoc, doc, getDoc, getDocFromCache, getDocs, runTransaction } from "firebase/firestore";
import type { MessageType } from "../../shared/types";
import { db } from "$lib/firebase/firebase";

export const commentsCollection = collection(db, "comments");

export async function addComment(obj:MessageType){
    try {
     // ////console.log('Temp post:', tempPost)
      const docRef = await addDoc(commentsCollection, obj);
      ////console.log("New comment added with ID: ", docRef.id);
      obj.cid = docRef.id;
      await runTransaction(db, async (transaction) => {
     
        const commentDoc = await transaction.get(docRef);
        // Update user document
        transaction.update(docRef, obj);
      });
    } catch (error) {
      console.error("error while adding comment",error)
    }
  }
  
  
  
  export async function updateComment(obj:MessageType){
    try{
      const commentDocRef = doc(collection(db, "comments"), obj.cid);

      await runTransaction(db, async (transaction) => {
     
        const commentDoc = await transaction.get(commentDocRef);

        // if (!commentDoc.exists()) {
        //   throw new Error("Comment does not exist");
        // }

        // const commentData = commentDoc.data();
        const commentData = obj;
        // Update user document
        transaction.update(commentDocRef, commentData);
      });
  
      
    } catch (error) {
      console.error('Error updating post:', error);
    }
    
  }
  
  export async function getComment(cid:string){
    try{
     // ////console.log("this is id passed to function for db call: ", id)
      const postDoc = doc(collection(db, "comments"), cid);
      const postSnapshot = await getDoc(postDoc);
      // put the value in store
      if (postSnapshot.exists()) {
          const postData = postSnapshot.data()

          return postSnapshot.exists() ? postSnapshot.data() : null;
        } else {
          return null;
        }
      // short version without setting value to store
      // return postSnapshot.exists() ? postSnapshot.data() : null;
    } catch (error) {
      console.error('Error fetching comment:', error);
    }
  }
  
  export async function getComments() {
    try {
      
      const CommentsCollection = collection(db, 'comments');
      const CommentsSnapshot = await getDocs(CommentsCollection);
        ////console.log(CommentsSnapshot)
      // Extract the data from each blog post document
      const Comments = CommentsSnapshot.docs.map((doc) => ({
        id: String(doc.id),
        ...doc.data(),
      }));
      ////console.log("Comments from comments.ts:",Comments)
      return Comments;
    } catch (error) {
      console.error('Error fetching Comments :', error);
      return [];
    }
  }
  
  export async function deleteComment(cid:string){
    try {
      const commentsDocRef = doc(collection(db, 'comments'), cid);
      await deleteDoc(commentsDocRef);
     // ////console.log('Blog post deleted:', id);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  }
  
