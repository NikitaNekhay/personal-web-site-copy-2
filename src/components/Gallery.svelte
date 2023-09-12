<script lang="ts">
  // import states
  import { onMount } from "svelte";
  import { getBlogPosts } from "../routes/posts/post";
  import { base } from "$app/paths";
  import { Language, blogPost } from "../store/store";
  import { addMessages, locale, t } from "svelte-i18n";
  import { currentLanguagee } from "../store/store_";
  import ru from "../services/ru.json";
  import en from "../services/en.json";
  import NoPosts from "./NoPosts.svelte";
  import LoadingSpinner from "./LoadingSpinner.svelte";

  if ($currentLanguagee !== undefined) {
    const currentValue = $currentLanguagee;
    // Switch the language value
    if (currentValue === Language.English) {
      addMessages(Language.English, en);
      locale.set(Language.English);
    } else {
      addMessages(Language.Russian, ru);
      locale.set(Language.Russian);
    }
  } else {
    addMessages(Language.English, en);
    locale.set(Language.English);
  }

  // use Firestore's onSnapshot method to listen for changes
  // in the blogs collection and update the page in
  // real-time whenever a new blog is added, edited, or deleted.

  let isLoading = true;
  let isEmpty = false;
  let passComponent = false;
  let blogPosts = [];

  onMount(async () => {
    isLoading = true;
    isEmpty = false;
    passComponent = false;

    // Fetch blog posts from the database
    //console.log('Fetching blog posts from the database...')
    blogPosts = await getBlogPosts();
    if (blogPosts.length === 0) {
      isEmpty = true;
    }
    isLoading = false;
    //console.log(blogPosts)
    if(!passComponent){
          const interval = setInterval(() => {
     // console.log("gall");
      passComponent = true;
    },1000);
    return () => clearInterval(interval);
    }

    
  });

  function handleClick(id: string) {
    // Navigate to the detailed page of the selected blog post
    //console.log(id);
    $blogPost.id = id;
    //console.log($blogPost.id);
    window.location.href = `${base}/posts/${id}`;
  }
</script>

<div class="bg-white">
  <div class=" lg: sm:px-6 sm:py-12 lg:px-8">
    {#if isLoading}
      <LoadingSpinner />
    {:else if isEmpty}
      <NoPosts />
    {:else}
      <div
        class="grid grid-cols-3 gap-x-48 gap-y-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {#each blogPosts as post}
          <div class="mt-44 flex">
            <div>
              <div
                on:click={() => handleClick(post.id)}
                on:keypress
                class="min-h-80 overflow-hidden
                  bg-gray-200 hover:cursor-pointer
                  hover:opacity-80"
              >
                <img
                  src={post.images[0]}
                  alt="Blog Post"
                  class="object-center"
                />
              </div>
              <div class="mt-2 flex justify-between">
                <div class=" flex-row">
                  <div>
                    <h3 class=" text-sm text-gray-700">
                      <p class="">
                        {post.author}
                      </p>
                    </h3>
                  </div>
                  <div>
                    <h3 class=" text-lg font-bold text-gray-900 sm:text-xl">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div
                  class="mx-6 flex max-w-sm sm:place-items-start md:place-items-start"
                >
                  <h2 class="  text-gray-700">
                    {post.description.substring(
                      0,
                      post.description.indexOf(`.`)
                    )}
                  </h2>
                </div>

                <div
                  class="grid-rows grid max-h-fit max-w-fit items-center justify-items-end"
                >
                  <div>
                    <p
                      class="font-anonymous text-3xl font-medium text-gray-900"
                    >
                      {post.price}
                    </p>
                  </div>
                  <div>
                    <button class="hover:text-yellow-0">add to bucket</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
