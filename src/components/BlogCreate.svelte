<script lang="ts">
    import { blogPost } from '../store/store';
    import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
    import { collection, addDoc, Timestamp } from 'firebase/firestore';
    import { auth, db, storage} from "$lib/firebase/firebase";
    import { onMount } from 'svelte';
    import { addBlogPost, blogsCollection, getBlogPost, updateBlogPost } from '../routes/blogs/post';
  
    let tempPost = {
      id:-1,
      title:'',
      description:'',
      author:'',
      authorEmail:'',
      price:'',
      images:[],
      date: new Date(),
    };

    async function handleSubmit(event) {
      event.preventDefault();
      const user = auth.currentUser;

        try{
            addBlogPost(tempPost)      
        } catch (err) {
            console.log("auth error", err)
        }
    }
     

  </script>

  <div class="pt-20 flex text-center justify-center">
    <h2>Create a New Blog</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" bind:value={tempPost.title} required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" bind:value={tempPost.description}></textarea>
      </div>
      <div>
        <label for="author">Author:</label>
        <input type="text" id="author" bind:value={tempPost.author} required>
      </div>
      <div>
        <label for="authorEmail">Author Email:</label>
        <input type="email" id="authorEmail" bind:value={tempPost.authorEmail} required>
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" id="price" bind:value={tempPost.price} required>
      </div>
      <div>
        <label for="images">Images:</label>
        <input type="file" id="images" bind:value={tempPost.images} multiple>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
