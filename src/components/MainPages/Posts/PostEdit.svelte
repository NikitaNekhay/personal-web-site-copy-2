<script lang="ts">
  import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
  import { auth, storage } from "$lib/firebase/firebase";
  import { addProduct, updateProduct } from "../../../routes/posts/post";
  import { addMessages, locale, t } from "svelte-i18n";
  import ru from "../../../services/ru.json";
  import en from "../../../services/en.json";
  import { currentLanguagee } from "../../../store/store_";

  import LoadingButton from "../../Shared/LoadingButton.svelte";
  import { beforeUpdate } from "svelte";
  import SubmitButton from "../../Shared/SubmitButton.svelte";
  import { productStore } from "../../../store/store";
  import type { ProductType } from "../../../shared/types";
  import Comment from "./Comment.svelte";
  import DragAndDrop from "./DragAndDrop.svelte";
  import EmptyPage from "../../Shared/EmptyPage.svelte";
  import { processColorsString } from "../../../services/help";
  import { writable, type Writable } from "svelte/store";
    import CommonPopUp from "../../Shared/CommonPopUp.svelte";
    import { base } from "$app/paths";
  let isError:boolean = false;
  let isChanged: boolean = false;
  let msg: String = "Check your post in the shop!";
  let smmsg: String = "Post is edited/created!";
  let href: string = `${base}/shop`;

  let isLoading = true;
  let submitClicked = false;

  let tempProductStore: ProductType;
  let files: Writable<Array<{ file: File; url: string }>> = writable([]);
  export let typeCRUD: string;
  export let post: ProductType | null;

  if (post === null || post === undefined) {
    tempProductStore = $productStore;
  } else {
    tempProductStore = post;
  }

  async function handleSubmit() {
    const user = auth.currentUser;
    submitClicked = !submitClicked;
    isLoading = true;
    try {
      tempProductStore.description["colors"] = processColorsString(
        tempProductStore.description["colors"],
      );

      if (typeCRUD === "CREATE POST") {
        addProduct(tempProductStore);
        console.log("createed");
      } else {
        updateProduct(tempProductStore);
        console.log("updated");
      }
      isChanged = !isChanged;

      isLoading = false;
    } catch (err) {
      console.error("auth error", err);
    } finally {
      setTimeout(() => {
        // Calculate and set the new scroll position based on the previous percentage
        submitClicked = false;
        // isLoading = false;
      }, 2500);
    }
  }
</script>

<div class="place flex place-content-center pt-60">
  {#if isChanged}
    <CommonPopUp
      bind:isChanged
      {href}
      {isError}
      isPreviev={true}
      message={msg}
      smallMessage={smmsg}
    />
  {/if}
  <form class="w-full max-w-lg flex flex-col justify-center items-center">
    <div class=" mb-6 flex justify-center">
      <h1 class="font-abril text-4xl text-blue-0">{typeCRUD}</h1>
    </div>

    <div class="-mx-3 mb-4 flex flex-wrap w-full">
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
            bind:value={tempProductStore.title}
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
    <div class="-mx-3 mb-4 flex flex-wrap w-full">
      <div class="h-full w-full px-3">
        <label
          class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          for="smallDescription"
        >
          <input
            class="peer h-8 w-full border-none bg-transparent
          bg-white-1 p-0 placeholder-transparent
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            id="smallDescription"
            bind:value={tempProductStore.description["smallDescription"]}
            placeholder="Small Description"
          />
          <span
            class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t("Small description")}
          </span>
        </label>
      </div>
    </div>
    <div class="-mx-3 mb-4 flex flex-wrap w-full">
      <div class="h-full w-full px-3">
        <label
          class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          for="bigDescription"
        >
          <input
            class="peer h-8 w-full border-none bg-transparent
          bg-white-1 p-0 placeholder-transparent
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            id="bigDescription"
            bind:value={tempProductStore.description["bigDescription"]}
            placeholder="Big Description"
          />
          <span
            class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t("Big description")}
          </span>
        </label>
      </div>
    </div>
    <div class="-mx-3 mb-4 flex flex-wrap w-full">
      <div class="h-full w-full px-3">
        <label
          class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          for="modelDescription"
        >
          <input
            class="peer h-8 w-full border-none bg-transparent
          bg-white-1 p-0 placeholder-transparent
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            id="modelDescription"
            bind:value={tempProductStore.description["modelDescription"]}
            placeholder="Description of model"
          />
          <span
            class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t("Description of model")}
          </span>
        </label>
      </div>
    </div>
    <div class="-mx-3 mb-4 flex flex-wrap w-full">
      <div class="h-full w-full px-3">
        <label
          class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          for="materialsDescription"
        >
          <input
            class="peer h-8 w-full border-none bg-transparent
          bg-white-1 p-0 placeholder-transparent
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            id="materialsDescription"
            bind:value={tempProductStore.description["materialsDescription"]}
            placeholder="Description of materials"
          />
          <span
            class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            {$t("Description of materials")}
          </span>
        </label>
      </div>
    </div>

    <div class="-mx-3 mb-4 flex flex-wrap w-full h-auto">
      <div class="h-full w-full px-3 text-gray-700 text-sm">
        <fieldset
          class="flex justify-evenly px-3 pt-3 relative overflow-hidden rounded-md
        border border-gray-200 bg-white-1 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
        >
          <legend class="">{$t("Sizes")}</legend>

          <div class="flex flex-col">
            <input
              class="focus:ring-green-0 focus:text-green-0 text-green-0"
              type="checkbox"
              id="XS"
              value="XS"
              bind:group={tempProductStore.description["sizes"]}
            />
            <label for="scales">XS</label>
          </div>

          <div class="flex flex-col">
            <input
              class="focus:ring-green-0 focus:text-green-0 text-green-0"
              type="checkbox"
              id="S"
              value="S"
              bind:group={tempProductStore.description["sizes"]}
            />
            <label for="horns">S</label>
          </div>

          <div class="flex flex-col">
            <input
              class="focus:ring-green-0 focus:text-green-0 text-green-0"
              type="checkbox"
              id="M"
              value="M"
              bind:group={tempProductStore.description["sizes"]}
            />
            <label for="horns">M</label>
          </div>

          <div class="flex flex-col">
            <input
              class="focus:ring-green-0 focus:text-green-0 text-green-0"
              type="checkbox"
              id="L"
              value="L"
              bind:group={tempProductStore.description["sizes"]}
            />
            <label for="horns">L</label>
          </div>

          <div class="flex flex-col">
            <input
              class="focus:ring-green-0 focus:text-green-0 text-green-0"
              type="checkbox"
              id="XL"
              value="XL"
              bind:group={tempProductStore.description["sizes"]}
            />
            <label for="horns">XL</label>
          </div>

          <div class="flex flex-col">
            <input
              class="focus:ring-green-0 focus:text-green-0 text-green-0"
              type="checkbox"
              id="One size"
              value="One size"
              bind:group={tempProductStore.description["sizes"]}
            />
            <label for="horns">One size</label>
          </div>
        </fieldset>
      </div>
    </div>

    <div class="-mx-3 mb-4 flex flex-wrap w-full h-auto">
      <div class="flex flex-row gap-3 mx-3">
        <div class=" mb-6 w-[50%] h-full">
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
              bind:value={tempProductStore.price}
              placeholder=""
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
          <p class="mt-3 text-xs italic text-gray-600">
            {$t("Input only numbers")}
          </p>
        </div>
        <div class=" mb-6 w-[50%] h-full">
          <label
            class="relative block overflow-hidden rounded-md
          border border-gray-200 bg-white-1
          px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
          focus-within:ring-white-2"
            for="colors"
          >
            <input
              class="peer h-8 w-full border-none bg-transparent
          bg-white-1 p-0 placeholder-transparent
          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              type="text"
              id="price"
              bind:value={tempProductStore.description["colors"]}
              placeholder="400$"
              required
            />
            <span
              class="absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
              {$t("Colors")}
            </span>
          </label>
          <p class="mt-3 text-xs italic text-gray-600 break-words">
            {$t(
              "Input colors through a spacebar or coma and each word should start with a capital letter",
            )}
          </p>
        </div>
      </div>
    </div>

    <div class="-mx-3 mb-4 flex flex-wrap w-full h-auto">
      <div class="flex mx-3 flex-row gap-3 w-full self-center">
        <div class=" mb-6 w-[50%] h-full mt-2.5">
          <label
            class="relative block overflow-hidden rounded-md
            border border-gray-200 bg-white-1
            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
            focus-within:ring-white-2"
            for="section"
          >
            <input
              class="peer h-8 w-full border-none bg-transparent
            bg-white-1 p-0 placeholder-transparent
            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              type="text"
              id="section"
              bind:value={tempProductStore.section}
              placeholder=""
              required
            />
            <span
              class="absolute start-3 top-3 -translate-y-1/2 cursor-text
            bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
            peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
              {$t("Section")}
            </span>
          </label>
          <p class="mt-3 text-xs italic text-gray-600">
            {$t("Input section in wardrobe")}
          </p>
        </div>
        <div class=" mb-6 w-[50%] h-full">
          <fieldset
            class=" flex text-gray-700 text-sm justify-evenly px-3 pt-3 relative overflow-hidden rounded-md
        border border-gray-200 bg-white-1 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
          >
            <legend class="">{$t("Is archived item?")}</legend>

            <div class="flex flex-col">
              <input
                class="focus:ring-green-0 focus:text-green-0 text-green-0"
                type="checkbox"
                id="isArchive"
                value="isArchive"
                bind:checked={tempProductStore.isArchive}
              />
              <label for="isArchive">YES</label>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="-mx-3 mb-4 flex flex-wrap w-full">
      <DragAndDrop bind:tempProductStore />

      <!-- <div class="mx-3 md:mb-12 w-full">
        <label
          class=" relative block overflow-hidden rounded-md
            border border-gray-200 bg-white-1
            px-3 pt-8 shadow-sm self-center focus-within:border-white-2 focus-within:ring-1
            focus-within:ring-white-2"
          for="files"
        >
          <input
            class=" transparent peer mb-8 h-full w-full border-none bg-transparent bg-white-1
              text-center placeholder-transparent
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
      </div> -->
    </div>
    <div class="">
      <SubmitButton
        bind:submitClicked
        bind:isLoading
        passedfunction={handleSubmit}
        text={"Submit"}
      />
    </div>
  </form>
</div>
