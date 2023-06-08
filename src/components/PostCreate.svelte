<script lang="ts">
    import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
    import { auth, storage} from "$lib/firebase/firebase";
    import { addBlogPost } from '../routes/posts/post';
    import { addMessages, locale, t } from 'svelte-i18n';
    import ru from '../services/ru.json';
  import en from '../services/en.json';
  import { currentLanguagee } from "../store/store_";
  import { Language } from '../store/store';

    // if($currentLanguagee!==undefined){
    //     const currentValue = $currentLanguagee;
    //     // Switch the language value
    //     if(currentValue === Language.English){
           
    //         addMessages(Language.English, en)
    //         locale.set(Language.English)
    //     } else {
    //       addMessages(Language.Russian, ru)
    //         locale.set(Language.Russian)
           
    //     }
    // } else {
    //     addMessages(Language.English, en)
    //     locale.set(Language.English)
    // }


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
    <div class=" flex justify-center mb-6">
      <h1 class="text-blue-0 text-4xl font-abril">{$t('CREATE POST')}</h1>
    </div>

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
    <div class="flex flex-wrap -mx-3 mb-4">
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
   
    <div class="flex flex-wrap -mx-3 mb-2 ms-0">
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
          <input class=" transparent peer bg-white-1 h-8 w-full border-none bg-transparent p-0 
          placeholder-transparent focus:border-transparent focus:outline-none 
          focus:ring-0 sm:text-sm text-center block" type="file" id="images" 
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

    <button
      class="flex items-center mx-[136px] w-1/2 
      rounded-md justify-center group relative 
       overflow-hidden border border-orange-0
      px-8 py-3 focus:outline-none focus:ring"
      type="button" on:click={handleSubmit}
    >
      <span
        class="absolute inset-x-0 bottom-0 h-[2px] 
        bg-orange-0 transition-all group-hover:h-full 
        group-active:bg-orange-0"
      ></span>

      <span
        class="relative text-sm font-medium 
        text-orange-0 transition-colors group-hover:text-white"
      >
      {$t('Submit')} 
      </span>
    </button>
  </form>
</div>
