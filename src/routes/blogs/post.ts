
import { db } from '../../lib/firebase/firebase';
import { collection, doc, getDoc, updateDoc,runTransaction, query, getDocs, addDoc} from "firebase/firestore";
import { blogPost } from '../../store/store';

export const blogsCollection = collection(db, "blogs");

export async function addBlogPost(tempPost){
    const docRef = await addDoc(blogsCollection, tempPost);
    console.log("New blog added with ID: ", docRef.id);
    updateBlogPost(docRef.id,tempPost.title,tempPost.images,tempPost.author,tempPost.authorEmail,tempPost.description,tempPost.price,tempPost.date)
}



export async function updateBlogPost(  
                                    id:string,
                                    title:string,
                                    images: [],
                                    author: string,
                                    authorEmail: string,
                                    description: string,
                                    price: number,
                                    date: Date){
  try{

    const postDocRef = doc(blogsCollection, id);
    
    await runTransaction(db, async (transaction) => {
      const postDoc = await transaction.get(postDocRef);
      if (!postDoc.exists()) {
        throw new Error("Post does not exist");
      }
      
      const postData = postDoc.data();
      console.log("this is postData var:",postData)
      const updatedPostData = {     
        id:id ?? postData.id,
        title:title ?? postData.title,
        images: [] ?? postData.images,
        author: author ?? postData.author,
        authorEmail: authorEmail ?? postData.authorEmail,
        description: description ?? postData.description,
        price: price ?? postData.price,
        date: date ?? postData.date,
      };

      // Update user document
      transaction.update(postDocRef, updatedPostData);
      console.log("this is updatedPostData var:",updatedPostData)
    });
      // Update email field of messages sub-collection??????????
    //   const messagesQuery = query(collection(postDocRef, "messages"));
    //   const messagesQuerySnapshot = await getDocs(messagesQuery);
    // //   messagesQuerySnapshot.forEach((doc) => {
    // //     updateDoc(doc.ref, { email: email ?? user.email });
    // //   });
    
  } catch (error) {
    console.error('Error updating post:', error);
  }
  
}

export async function getBlogPost(id:string){
  try{
    const postDoc = doc(collection(db, "blogs"), id);
    const postSnapshot = await getDoc(postDoc);
    // put the value in store
    if (postSnapshot.exists()) {
        const postData = postSnapshot.data()
        // to ensure that the data fits
        const updatedData = {
            id: postData.id ?? 0,
            title: postData.title ?? '',
            images: postData.images ?? [],
            author: postData.author ?? 'John Berkley',
            authorEmail: postData.authorEmail ?? 'john.example@gmail.com',
            description: postData.description ?? 'Lorem ipsum',
            price: postData.price ?? 1,
            date: postData.date ?? new Date(),
        };
        // set the value to store
        blogPost.set(updatedData)
        return postSnapshot.data();
      } else {
        return null;
      }
    // short version without setting value to store
    // return postSnapshot.exists() ? postSnapshot.data() : null;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}
