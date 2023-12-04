<script lang="ts">
  import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

  import { auth, storage } from "$lib/firebase/firebase";
  import { onMount } from "svelte";
  import {
    addBlogPost,
    blogsCollection,
    getBlogPost,
    updateBlogPost,
  } from "../../../routes/posts/post";
  import { page } from "$app/stores";
  import { addMessages, locale, t } from "svelte-i18n";
  import { currentLanguagee } from "../../../store/store_";
  import ru from "../../../services/ru.json";
  import en from "../../../services/en.json";

  import LoadingButton from "../../Shared/LoadingButton.svelte";
    import { Language } from "../../../shared/types";

  export let post;

  let tempPost = post;

  let isLoading = true;
  let submitClicked = false;
  let submitImageClicked = false;

  async function handleSubmit(event) {
    event.preventDefault();
    const user = auth.currentUser;
    submitClicked = true;
    isLoading = true;
    try {
      if (submitImageClicked) {
        //console.log("these are tempPost.images",tempPost.images)
        const imageUrls: string[] = [];
        // console.log('typeof imageURLS',tempPost)
        // console.log(tempPost.images.length)
        for (let i = 0; i < tempPost.images.length; i++) {
          const tempURL = await uploadImage(tempPost.images);
          // imageUrls[i].push(tempURL);
        }

        // console.log("These are imageUrls in handleSumbit",imageUrls)
        // Update the tempPost object with the download URLs
        tempPost.images = imageUrls;
        // if(typeof(tempPost.images)==='string'){
        //   tempPost.images=['',]
        //   console.log('type of uploaded images is just a string not an array')
        // }
        // console.log("tempPost.images after promise from uploadImage",tempPost.images)
        updateBlogPost(
          tempPost.id,
          tempPost.title,
          tempPost.images,
          tempPost.author,
          tempPost.authorEmail,
          tempPost.description,
          tempPost.price,
          tempPost.date
        );
        isLoading = false;
        submitClicked = false;
        //  console.log("Form submitted");
      } else {
        //  console.log("haven't touch images")
        // if there is error in 1 and second ways of updating, then console on images there
        updateBlogPost(
          tempPost.id,
          tempPost.title,
          tempPost.images,
          tempPost.author,
          tempPost.authorEmail,
          tempPost.description,
          tempPost.price,
          tempPost.date
        );
        isLoading = false;
      }

      //console.log('Form submitted')
    } catch (error) {
      console.error("auth error", error);
    }
  }

  async function uploadImage(image) {
    try {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      const downloadURL = await getDownloadURL(storageRef);
      // console.log('URL of Images:', downloadURL)
      return downloadURL;
    } catch (error) {
      console.error("uploadImage error", error);
    }
  }

  function handleImageUpload(event) {
    try {
      submitImageClicked = true;
      const files = event.target.files;
      // coorect
      tempPost.images = [];
      tempPost.images = [...tempPost.images, ...Array.from(files)];
      //  console.log("these are your files for tempPost.images:",tempPost.images)
    } catch (error) {
      console.error("handleImageUpload error", error);
    }
  }
</script>

<div class="place flex place-content-center pt-60">
  <form class="w-full max-w-lg">
    <div class=" mb-6 flex justify-center">
      <h1 class="font-abril text-4xl text-blue-0">{$t("EDIT POST")}</h1>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label
          class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          for="title"
        >
          <input
            class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
        focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            type="text"
            id="title"
            bind:value={tempPost.title}
            required
            placeholder="Title"
          />
          <span
            class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t("Title")}
          </span>
        </label>
      </div>
    </div>
    <div class="-mx-3 mb-4 flex flex-wrap">
      <div class="h-full w-full px-3">
        <label
          class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          for="description"
        >
          <input
            class="peer h-8 w-full border-none bg-transparent
          bg-white-1 p-0 placeholder-transparent
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            id="description"
            bind:value={tempPost.description}
            placeholder="Description"
          />
          <span
            class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t("Description")}
          </span>
        </label>
        <p class="mt-3 text-xs italic text-gray-600">
          {$t("Make it as simple as informative")}
        </p>
      </div>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
        <label
          class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          for="author"
        >
          <input
            class="peer h-8 w-full border-none bg-transparent
          bg-white-1 p-0 placeholder-transparent
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            type="text"
            id="author"
            bind:value={tempPost.author}
            placeholder="Author"
            required
          />
          <span
            class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t("Author Name")}
          </span>
        </label>
      </div>
      <div class="w-full px-3 md:w-1/2">
        <label
          class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          for="authorEmail"
        >
          <input
            class="peer h-8 w-full border-none bg-transparent
          bg-white-1 p-0 placeholder-transparent
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            type="email"
            id="authorEmail"
            bind:value={tempPost.authorEmail}
            placeholder="email@web.net"
            required
          />
          <span
            class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t("Author Email")}
          </span>
        </label>
      </div>
    </div>

    <div class="-mx-3 mb-2 ms-0 flex flex-wrap">
      <div class=" mb-6 w-2/5">
        <label
          class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          for="price"
        >
          <input
            class="peer h-8 w-full border-none bg-transparent
        bg-white-1 p-0 placeholder-transparent
        focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            type="text"
            id="price"
            bind:value={tempPost.price}
            placeholder="400$"
            required
          />
          <span
            class="absolute start-3 top-3 -translate-y-1/2 cursor-text
        bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
        peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t("Price")}
          </span>
        </label>
      </div>
      <div class="mb-3 h-1/2 px-3 md:mb-3 md:w-3/5">
        <label
          class=" relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          for="files"
        >
          <input
            class=" transparent peer block h-8 w-full border-none bg-transparent bg-white-1
          p-0 text-center placeholder-transparent
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            type="file"
            id="images"
            on:change={handleImageUpload}
            bind:value={tempPost.images}
            multiple
            placeholder="Files"
          />
          <span
            class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          />
        </label>
        {#if !submitImageClicked}
          <p class="mt-3 text-xs italic text-gray-600">
            {$t("Quantity of images")}:{tempPost.images.length}
          </p>
        {/if}
      </div>
    </div>

    {#if submitClicked && isLoading}
      <LoadingButton />
    {:else}
      <button
        class="group relative mx-[136px] flex
w-1/2 items-center justify-center overflow-hidden
 rounded-md border border-orange-0
px-8 py-3 focus:outline-none"
        type="button"
        on:click={handleSubmit}
      >
        <span
          class="absolute inset-x-0 bottom-0 h-[2px]
  bg-orange-0 transition-all group-hover:h-full
  group-active:bg-orange-0"
        />

        <span
          class="relative text-sm font-medium
  text-orange-0 transition-colors group-hover:text-white"
        >
          {$t("Submit")}
        </span>
      </button>
    {/if}
  </form>
</div>
