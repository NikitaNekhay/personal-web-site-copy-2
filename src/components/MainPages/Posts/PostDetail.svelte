<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { getBlogPost } from "../../../routes/posts/post";

  import { page } from "$app/stores";

  import { addMessages, locale, t } from "svelte-i18n";
  import { currentLanguagee } from "../../../store/store_";
  import ru from "../../../services/ru.json";
  import en from "../../../services/en.json";
  import {type PostType } from "../../../shared/types";
  import NoPosts from "../../Shared/NoPosts.svelte";
  import LoadingSpinner from "../../Shared/LoadingSpinner.svelte";
    import Comment from "./Comment.svelte";
    import CommentList from "./CommentList.svelte";
    import { authStore } from "../../../store/store";

  export let post: PostType;
  //export let post = $page.params
  //console.log("this is the post:", post);
  let isLoading = true; // Initialize the loading state

  // onMount(async () => {
  //   // Fetch the blog post details
  //   isLoading = true;
  //   const sliderLine = document.querySelector(".slider-line");
  //   // try {
  //   //   post = await getBlogPost(id);
  //   //   console.log(post)
  //   //   isLoading = false; // Set the loading state to false once data is loaded
  //   // } catch (error) {
  //   //   console.log("error fetching the blog post with id:", id)
  //   // }
  // });

  //Dispatch custom events for swiping
  const dispatch = createEventDispatcher();

  let offset = 0; // Initialize the offset variable

  // Handle next click
  function handleNextClick() {
    offset += 400;
    if (offset > (post.images.length - 1) * 100) {
      offset = 0;
    }
    dispatch("swipe", { direction: "next", offset });
  }

  // Handle back click
  function handleBackClick() {
    offset -= 400;
    if (offset < 0) {
      offset = (post.images.length - 1) * 100;
    }
    dispatch("swipe", { direction: "back", offset });
  }

  // Detect swipes
  let startX;
  let endX;
  const MIN_SWIPE_DISTANCE = 50;

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    const distance = startX - endX;

    if (Math.abs(distance) > MIN_SWIPE_DISTANCE) {
      if (distance > 0) {
        handleNextClick();
      } else {
        handleBackClick();
      }
    }
  }
</script>

<link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />

{#if !isLoading}
  <LoadingSpinner />
{:else if post == undefined}
  <NoPosts />
{:else}
  <div class="container_slider mt-56">
    <div class="slider">
      <div class="slider-line" style="transform: translateX({offset}px);">
        {#if post.images}
          {#each post.images as imag}
            <img src={imag} alt={post.title} class="w-100 h-100" />
          {/each}
        {:else}
          <div>
            <p>NO images</p>
          </div>
        {/if}
      </div>
    </div>
    <div class="buttons content-center items-center justify-center text-center">
      <button
        class="slider-back transition duration-200 hover:text-orange-0"
        on:click={handleNextClick}
        >&larr; {$t("BACK")}
      </button>
      <button
        class="slider-next transition duration-200 hover:text-orange-0"
        on:click={handleBackClick}>{$t("NEXT")} &rarr;</button
      >
    </div>
  </div>

  <div class="bore mt-4 content-center items-center justify-center text-center">
    <h1>{post.title}</h1>
    <p>{post.description}</p>
    <p>{$t("Author")} : {post.author}</p>
    <p>{$t("Author Email")} : {post.authorEmail}</p>
    <p>{$t("Price")} : {post.price}</p>
    <p>{$t("Date")} : {post.date}:{post.date}:{post.date}</p>

    <a
      href="mailto:{post.authorEmail}"
      class="transition duration-200 hover:text-blue-0"
      >{$t("SEND EMAIL TO AUTHOR")}
    </a>
  </div>

  {#if $authStore.user}
    <Comment />
  {/if}
    <CommentList />
{/if}




<style>
  .slider {
    display: flex;
    width: 800px;
    height: 500px;
    border: 2px solid royalblue;
    margin: 30px auto;
    overflow: hidden;
  }

  .slider-line {
    position: relative;
    display: flex;
    height: 500px;
    background-color: darkorange;
    left: 0px;
    transition: all ease 1s;
  }

  img {
    width: 800px;
    height: 500px;
  }
</style>
