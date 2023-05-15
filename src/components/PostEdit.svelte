<script lang="ts">
    import { blogPost } from '../store/store';
    import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
    import { collection, addDoc, Timestamp } from 'firebase/firestore';
    import { auth, db, storage} from "$lib/firebase/firebase";
    import { onMount } from 'svelte';
    import { addBlogPost, blogsCollection, getBlogPost, updateBlogPost } from '../routes/posts/post';
    import { page } from '$app/stores';
    import { addMessages, locale, t } from 'svelte-i18n';
    import ru from '../services/ru.json';

    // Загружаем переводы для русского языка
    addMessages('ru', ru);
    // Устанавливаем язык по умолчанию
    locale.set('ru')


    let tempPost = {}

    let handleSubmitFlag = false
    try {
      const { id } = $page.params
      console.log(id)

      onMount(async () => {
      // Fetch the blog post details
      tempPost = await getBlogPost(id);
      console.log(tempPost)
    }); 
    } catch (error) {
      console.log("error while getting id of a post", error)
    }
   

    async function handleSubmit(event) {
      event.preventDefault();
      const user = auth.currentUser;

      try{
          if(handleSubmitFlag){
            const imageUrls = await Promise.all(tempPost.images.map(uploadImage));
            console.log("These are imageUrls",imageUrls)
          // Update the tempPost object with the download URLs
            tempPost.images = imageUrls;
            updateBlogPost(tempPost.id,tempPost.title,tempPost.images,tempPost.author,tempPost.authorEmail,tempPost.description,tempPost.price,tempPost.date)    
          } else {
            console.log("don't touch images")
            updateBlogPost(tempPost.id,tempPost.title,tempPost.images,tempPost.author,tempPost.authorEmail,tempPost.description,tempPost.price,tempPost.date)    
          }
        
          console.log('Form submitted')
      } catch (error) {
          console.log("auth error", error)
      }
    }
     
    async function uploadImage(image) {
      try {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        console.log('Image uploaded:', downloadURL)
        return downloadURL;
      } catch (error) {
        console.log("uploadImage error", error)
      }
  }

  function handleImageUpload(event) {
    try {
      handleSubmitFlag = true
      const files = event.target.files;
      // coorect 
      console.log(files)
      tempPost.images = Array.from(files);
    } catch (error) {
      console.log("handleImageUpload error", error)
    }
     
  }

</script>

<div class="flex pt-60 place-content-center place">
  <form class="w-full max-w-lg ">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
          {$t('Title')} 
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border 
        border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
        focus:bg-white focus:border-gray-500" type="text" id="title" bind:value={tempPost.title} 
        required placeholder="Title">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 h-full">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="description">
          {$t('Description')} 
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 place-items-start 
        border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none 
        focus:bg-white focus:border-gray-500" id="description" bind:value={tempPost.description} 
        placeholder="Description">
        <p class="text-gray-600 text-xs italic">{$t('Make it as simple as informative')}</p>
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="author">
          {$t('Author Name')} 
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" type="text" id="author" bind:value={tempPost.author} 
        placeholder="Author" required>
        
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="authorEmail">
          {$t('Author Email')} 
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 
        border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
        focus:bg-white focus:border-gray-500" itype="email" id="authorEmail" 
        bind:value={tempPost.authorEmail} placeholder="email@web.net" required>
      </div>
    </div>
   
    <div class="flex flex-wrap -mx-3 mb-2 ms-0">
      <div class="md:w-2/4 h-1/2 py-0 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="price">
          {$t('Price')} 
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border 
        border-gray-200 rounded py-2.5 px-4 leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" type="number" id="price" bind:value={tempPost.price} 
        required placeholder="400$">
      </div>
      <div class="md:w-2/4 h-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="files">
          {$t('Files')} 
        </label>
        <div class="relative">
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 
        border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none 
        focus:bg-white focus:border-gray-500" type="file" id="images" 
        on:change={handleImageUpload} multiple placeholder="Files">
        </div>
      </div>
    </div>
    <button on:click={handleSubmit} type="submit">{$t('Submit')} </button>
  </form>
</div>
