<script lang="ts">
    import { blogPost } from '../store/store';
    import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
    import { collection, addDoc, Timestamp } from 'firebase/firestore';
    import { db, storage} from "$lib/firebase/firebase";
  

    let id = '';
    let title = '';
    let description = '';
    let author = '';
    let authorEmail = '';
    let price = '';
    let images = [];
  
    // async function uploadImage(image) {
    // // const storageRef = ref(storage, `blog_images/${image.name}`);
    // // await uploadBytes(storageRef, image);
    // // //   const downloadURL = await getDownloadURL(imageRef);
    // // //   return downloadURL;

    // // const downloadURL = await getDownloadURL(storageRef);
    // // blogPost.update(post => {
    // //     post.images = [...post.images, downloadURL];
    // //     return post;
    // // });
    // // return downloadURL;
    // }

    //async function handleSubmit() {
      // const imagesUrls = await Promise.all(images.map(uploadImage));
      // const blogData = {
      //   title,
      //   description,
      //   author,
      //   authorEmail,
      //   price: Number(price),
      //   images: imagesUrls,
      //   createdAt: Timestamp.now()
      // };
      // const docRef = await addDoc(collection(db, 'blogs'), blogData);
      // console.log(`Blog with ID: ${docRef.id} added`);
      // title = '';
      // description = '';
      // author = '';
      // authorEmail = '';
      // price = '';
      // images = [];
    //}
  
    
</script>

<main>
    <div class="pt-8">
        Hello
    </div>
    
</main>

<!-- 
  <div class="pt-8">
    <h2>Create a New Blog</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" bind:value={title} required>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" bind:value={description} required></textarea>
      </div>
      <div>
        <label for="author">Author:</label>
        <input type="text" id="author" bind:value={author} required>
      </div>
      <div>
        <label for="authorEmail">Author Email:</label>
        <input type="email" id="authorEmail" bind:value={authorEmail} required>
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" id="price" bind:value={price} required>
      </div>
      <div>
        <label for="images">Images:</label>

      </div>
      <button type="submit">Submit</button>
    </form>
  </div> -->
