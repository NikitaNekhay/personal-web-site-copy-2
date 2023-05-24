<script lang="ts">
    import { blogPost } from '../store/store';
    import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
    import { collection, addDoc, Timestamp } from 'firebase/firestore';
    import { auth, db, storage} from "$lib/firebase/firebase";
    import { onMount } from 'svelte';
    import { addBlogPost, blogsCollection, getBlogPost, updateBlogPost } from '../routes/posts/post';
    import { addMessages, locale, t } from 'svelte-i18n';
    import ru from '../services/ru.json';
    import { base } from '$app/paths';

    // Загружаем переводы для русского языка
    addMessages('ru', ru);
    // Устанавливаем язык по умолчанию
    locale.set('ru')

    let loading = false
  
    let tempPost = {
      id:-1,
      title:'',
      description:'',
      author:'',
      authorEmail:'',
      price:'',
      images:[] as string[],
      date: new Date(),
    };

    async function handleSubmit(event) {
      event.preventDefault();
      const user = auth.currentUser;

      try{
         const imageUrls = await Promise.all(tempPost.images.map(uploadImage));

        // Update the tempPost object with the download URLs
          tempPost.images = imageUrls;
          addBlogPost(tempPost)      
          console.log('Form submitted')
          loading = true
      } catch (err) {
          console.log("auth error", err)
      }
    }
     
    async function uploadImage(image) {
    try {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);
      // correct console.log('Image uploaded:', downloadURL)
      return downloadURL;
    } catch (error) {
      console.log("error while uploading the image",error)
    }
    
  }

  function handleImageUpload(event) {
      try {
        const files = event.target.files;
        // coorect console.log(files)
        tempPost.images = Array.from(files);
      } catch (error) {
        console.log("error while handleImageUpload",error)
      }
      
    }

  </script>

<div class="flex pt-60 place-content-center place">
  <form class="w-full max-w-lg ">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block relative overflow-hidden bg-white-1 
        rounded-md border border-gray-200
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
        focus-within:ring-white-2" for="title">
        <input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent 
        focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
        type="text" id="title" bind:value={tempPost.title} required placeholder="Title">
        <span
          class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
          text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
        >
          {$t('Title')}
        </span>
      </label>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 h-full">
        <label class="block relative overflow-hidden bg-white-1 
        rounded-md border border-gray-200
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
        focus-within:ring-white-2" for="description">
          <input class="peer bg-white-1 h-8 w-full border-none 
          bg-transparent p-0 placeholder-transparent 
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
          id="description" 
          bind:value={tempPost.description} placeholder="Description">
          <span
          class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
          text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t('Description')} 
          </span>
        </label>
        <p class="text-gray-600 text-xs italic mt-3">
          {$t('Make it as simple as informative')} 
        </p>
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block relative overflow-hidden bg-white-1 
        rounded-md border border-gray-200
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
        focus-within:ring-white-2" for="author">
          <input class="peer bg-white-1 h-8 w-full border-none 
          bg-transparent p-0 placeholder-transparent 
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
          type="text" id="author" bind:value={tempPost.author} 
          placeholder="Author" required>
          <span
          class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
          text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t('Author Name')}
          </span> 
        </label>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block relative overflow-hidden bg-white-1 
        rounded-md border border-gray-200
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
        focus-within:ring-white-2" for="authorEmail">
          <input class="peer bg-white-1 h-8 w-full border-none 
          bg-transparent p-0 placeholder-transparent 
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
          type="email" id="authorEmail" 
          bind:value={tempPost.authorEmail} placeholder="email@web.net" required>
          <span
          class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
          text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t('Author Email')} 
          </span>
        </label>
      </div>
    </div>
   
    <div class="flex flex-wrap -mx-3 mb-0 ms-0">
      <div class=" w-2/5 mb-6">
        <label class="block relative overflow-hidden bg-white-1 
        rounded-md border border-gray-200
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
        focus-within:ring-white-2" for="price">
        <input class="peer bg-white-1 h-8 w-full border-none 
        bg-transparent p-0 placeholder-transparent 
        focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
        type="text" id="price" 
        bind:value={tempPost.price} placeholder="400$" required>
        <span
        class="cursor-text absolute start-3 top-3 -translate-y-1/2 
        text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
        peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
        >
          {$t('Price')}
        </span> 
        </label>
      </div>
      <div class="md:w-3/5 h-1/2 px-3 mb-3 md:mb-3">
        <label class=" block relative overflow-hidden bg-white-1 
        rounded-md border border-gray-200
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
        focus-within:ring-white-2" for="files">
          <input class=" transparent peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-center block" type="file" id="images" 
          on:change={handleImageUpload} multiple placeholder="Files">
          <span
          class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
          text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
          </span> 
        </label>
        
      </div>
    </div>
    <button on:click={handleSubmit} type="button" 
    class="flex w-full justify-center rounded-md bg-navy-1 
    px-3 py-1.5 text-sm font-semibold leading-6 
    text-white shadow-sm  transition duration-100 
    hover:bg-red-2 focus-visible:outline focus-visible:outline-2 
    focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      {#if loading}
          <img alt="spinner" src="{base}/media/spinner.svg" class="spinner" />
      {:else}
          {$t('Submit')} 
      {/if}
    </button>
  </form>
</div>
