<script lang="ts">
  import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
  import { auth, storage } from "$lib/firebase/firebase";
  import { addBlogPost } from "../../../routes/posts/post";
  import { addMessages, locale, t } from "svelte-i18n";
  import ru from "../../../services/ru.json";
  import en from "../../../services/en.json";
  import { currentLanguagee } from "../../../store/store_";
  import { Language } from "../../../store/store";
  import LoadingButton from "../../Shared/LoadingButton.svelte";
    import { beforeUpdate } from "svelte";

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
