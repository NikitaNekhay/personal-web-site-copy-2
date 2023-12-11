<script lang="ts">
  import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
  import { auth, storage } from "$lib/firebase/firebase";
  import { addBlogPost } from "../../../routes/posts/post";
  import { addMessages, locale, t } from "svelte-i18n";
  import ru from "../../../services/ru.json";
  import en from "../../../services/en.json";
  import { currentLanguagee } from "../../../store/store_";

  import LoadingButton from "../../Shared/LoadingButton.svelte";
    import { beforeUpdate } from "svelte";
    import { Language } from "../../../shared/types";

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

  let isLoading = true;
  let sumbitClicked = false;

  let tempPost = {
    id: -1,
    title: "",
    description: "",
    author: "",
    authorEmail: "",
    price: "",
    images: [] as string[],
    date: new Date(),
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const user = auth.currentUser;
    sumbitClicked = true;
    isLoading = true;
    try {
      const imageUrls = await Promise.all(tempPost.images.map(uploadImage));

      // Update the tempPost object with the download URLs

      tempPost.images = imageUrls;
      addBlogPost(tempPost);
      console.log("Form submitted",isLoading);
      isLoading = false;
      sumbitClicked = false;
    } catch (err) {
      console.error("auth error", err);
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
      console.error("error while upisLoading the image", error);
    }
  }

  function handleImageUpload(event) {
    try {
      const files = event.target.files;
      // coorect console.log(files)
      tempPost.images = Array.from(files);
    } catch (error) {
      console.error("error while handleImageUpload", error);
    }
  }


</script>

<div class="place flex place-content-center pt-60">
  <form class="w-full max-w-lg">
    <div class=" mb-6 flex justify-center">
      <h1 class="font-abril text-4xl text-blue-0">{$t("CREATE POST")}</h1>
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
            multiple
            placeholder="Files"
          />
          <span
            class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          />
        </label>
      </div>
    </div>
    <!-- DRAG AND DROP -->
    <div class="col-span-full">
        <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
            </svg>
            <div class="mt-4 flex text-sm leading-6 text-gray-600">
              <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only">
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
    </div>
    {#if sumbitClicked && isLoading}
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
