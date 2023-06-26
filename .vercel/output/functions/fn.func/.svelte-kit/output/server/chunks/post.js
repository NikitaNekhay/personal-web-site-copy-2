import { d as db } from "./firebase.js";
import { collection, doc, getDoc } from "firebase/firestore";
import { b as blogPost } from "./store.js";
collection(db, "blogs");
async function getBlogPost(id) {
  try {
    console.log("this is id for db call: ", id);
    const postDoc = doc(collection(db, "blogs"), id);
    const postSnapshot = await getDoc(postDoc);
    if (postSnapshot.exists()) {
      const postData = postSnapshot.data();
      const updatedData = {
        id: postData.id ?? 0,
        title: postData.title ?? "",
        images: postData.images ?? [],
        author: postData.author ?? "John Berkley",
        authorEmail: postData.authorEmail ?? "john.example@gmail.com",
        description: postData.description ?? "Lorem ipsum",
        price: postData.price ?? 1,
        date: postData.date ?? /* @__PURE__ */ new Date()
      };
      blogPost.set(updatedData);
      return postSnapshot.exists() ? postSnapshot.data() : null;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}
export {
  getBlogPost as g
};
