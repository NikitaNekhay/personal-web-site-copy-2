<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
    import { getBlogPost } from '../routes/posts/post';

    import { page } from '$app/stores';

    import { addMessages, locale, t } from 'svelte-i18n';
  import { currentLanguagee } from '../store/store_';
  import ru from '../services/ru.json';
  import en from '../services/en.json';
  import { Language } from '../store/store';

    export let post
    //export let post = $page.params
    console.log(post)
    let isLoading = true; // Initialize the loading state
    
    onMount(async () => {
      // Fetch the blog post details
      // try {
      //   post = await getBlogPost(id);
      //   console.log(post)
      //   isLoading = false; // Set the loading state to false once data is loaded
      // } catch (error) {
      //   console.log("error fetching the blog post with id:", id)
      // }
     
    }); 
  

//Dispatch custom events for swiping
const dispatch = createEventDispatcher();

let offset = 0; // Initialize the offset variable

  // Handle next click
  function handleNextClick() {
    offset += 400;
    if (offset > (post.images.length - 1) * 100) {
      offset = 0;
    }
    dispatch('swipe', { direction: 'next', offset });
  }

  // Handle back click
  function handleBackClick() {
    offset -= 400;
    if (offset < 0) {
      offset = (post.images.length - 1) * 100;
    }
    dispatch('swipe', { direction: 'back', offset });
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

  onMount(() => {
    const sliderLine = document.querySelector('.slider-line');

    sliderLine.addEventListener('touchstart', handleTouchStart);
    sliderLine.addEventListener('touchend', handleTouchEnd);

    return () => {
      sliderLine.removeEventListener('touchstart', handleTouchStart);
      sliderLine.removeEventListener('touchend', handleTouchEnd);
    };
  });

</script>
  
{#if post}
    <div class="container_slider">
      <div class="slider">
        <div class="slider-line" style="transform: translateX({offset}px);">
          {#if post.images}
            {#each post.images as imag}
              <img src={imag} alt={post.title} class="w-100 h-100">
            {/each}
          {:else}
            <div>
              <p>NO images</p>
            </div>
          {/if}
        </div>
      </div>
      <div class="buttons items-center justify-center text-center content-center">
        <button class="slider-back transition duration-200 hover:text-orange-0" on:click={handleNextClick}>&larr; {$t('BACK')} </button>
        <button class="slider-next transition duration-200 hover:text-orange-0" on:click={handleBackClick}>{$t('NEXT')} &rarr;</button>
      </div>
      
    </div>
  
    <div class="items-center justify-center text-center content-center mt-4 bore">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{$t('Author')} : {post.author}</p>
      <p>{$t('Author Email')} : {post.authorEmail}</p>
      <p>{$t('Price')} : {post.price}</p>
      <p>{$t('Date')} : {post.date}:{post.date}:{post.date}</p>

      <a href="mailto:{post.authorEmail}" class="transition duration-200 hover:text-blue-0">{$t('SEND EMAIL TO AUTHOR')} </a>
    </div>
      
{:else}
  <p>Loading...</p>
{/if}




<style>

.container{

    display: flex;
    width: 60%;
    height: 40%;
    background-color:seashell;
    margin-left: 30%;
    align-items: center;
    justify-content: center;
}

.slider{
    display:flex;
    width: 800px;
    height: 500px;
    border: 2px solid royalblue;
    margin: 30px auto;
    overflow: hidden;
}

.slider-line{
    position: relative;
    display: flex;
    height: 500px;
    background-color:darkorange;
    left: 0px;
    transition: all ease 1s;
}

img{

  width: 800px;
    height: 500px;
}



</style>

