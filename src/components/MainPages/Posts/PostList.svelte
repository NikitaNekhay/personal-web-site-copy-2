<script lang="ts">
  // import states
  import {  onMount } from "svelte";
  import { getBlogPosts, deleteBlogPost } from "../../../routes/posts/post";
  import { base } from "$app/paths";
  import { blogPost, currentLanguage } from "../../../store/store";
  import { addMessages, locale, t } from "svelte-i18n";
  import ru from "../../../services/ru.json";
  import en from "../../../services/en.json";
  import NoPosts from "../../Shared/NoPosts.svelte";
  import LoadingSpinner from "../../Shared/LoadingSpinner.svelte";
    import type { PostType } from "../../../shared/types";

  let blogPosts:PostType[] = [];
  let isLoading = true;
  let isEmpty = false;
  let passComponent = false;

  onMount(async() => {
    try {
      // Fetch blog posts from the database
      isLoading = true;
      isEmpty = false;
      passComponent = false;
      blogPosts = await getBlogPosts();
      const interval = setInterval(async () => {
        //  console.log("length of the blog posts", blogPosts.length);
        if (isLoading && blogPosts.length === 0) {
          isEmpty = true;
          isLoading = false;
        } else {
          isLoading = false;
        }
        passComponent = true;
      }, 2000);
      return () => clearInterval(interval);
    } catch (error) {
      console.error("fetched the blog from db got error:", error);
    }
  });

  function handleClick(id: string) {
    // Navigate to the detailed page of the selected blog post
    // console.log(id);
    $blogPost.id = id;
    // console.log($blogPost.id);
    //goto(`${base}/posts/${id}`);
    window.location.href = `${base}/posts/${id}`;
  }

  function handleEdit(id: string) {
    // Navigate to the edit page of the selected blog post
    $blogPost.id = id;
    window.location.href = `${base}/posts/${id}/edit`;
  }

  function handleDelete(id: string) {
    // Store the previous scroll position percentage
    const previousScrollPercentage =
      (window.pageYOffset || document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    // Delete the blog post and navigate back to the gallery page
    deleteBlogPost(id);
    // console.log("Deleted blog post:", id);
    window.location.href = `${base}/posts/#`;
    // setTimeout(() => {
    //   // Calculate and set the new scroll position based on the previous percentage
    //   //location.reload();
      
    // }, 500);

    const newScrollPosition =
      previousScrollPercentage *
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    window.scrollTo(0, newScrollPosition);
  }



</script>

<div class="h-full bg-white">
  <div class="sm:px-6 sm:py-24 lg:px-8">
    {#if isLoading}
      <LoadingSpinner />
    {:else if isEmpty}
      <NoPosts />
    {:else}
      <div class="text-center flex justify-center w-full mt-6">

      </div>
      <div
        class="grid grid-cols-3 gap-x-48 gap-y-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {#key blogPosts}
          
     
        {#each blogPosts as post}
          <div
            class="mt-44 flex gap-x-6 gap-y-10 shadow-white-2 drop-shadow-2xl"
          >
            <div>
              <div
                on:click={() => handleClick(post.id)}
                on:keypress
                class="min-h-80 overflow-hidden
              bg-gray-200 hover:cursor-pointer hover:opacity-80
               "
              >
                <img
                  src={post.images[0]}
                  alt="Blog Post"
                  class="object-center"
                />
              </div>
              <div class="mt-4 flex justify-between">
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
                  class="mx-6 flex max-w-sm place-items-end sm:place-items-start md:place-items-start"
                >
                  <h2 class="  text-gray-700">
                    {post.description.substring(
                      0,
                      post.description.indexOf(`.`)
                    )}
                  </h2>
                </div>

                <div class="flex flex-col items-end gap-y-2">
                  <div>
                    <p
                      class="font-anonymous text-3xl font-medium text-gray-900"
                    >
                      {post.price}
                    </p>
                  </div>
                  <div>
                    <div
                      class="group relative inline-block text-sm font-medium text-black-1
                  hover:cursor-pointer focus:outline-none focus:ring active:text-black-1"
                      on:click={() => handleEdit(post.id)}
                      on:keypress={() => handleEdit(post.id)}
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      <span
                        class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform
                    group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />

                      <span
                        class="relative block border border-current bg-white px-8 py-3 duration-500 active:bg-gray-400"
                      >
                        <img
                          class="mr-1"
                          alt="setting"
                          src="{base}/media/edit.svg"
                        />
                      </span>
                    </div>
                  </div>
                  <div>
                    <div
                      class="group relative inline-block text-sm font-medium text-black-1
                    hover:cursor-pointer focus:outline-none focus:ring active:text-black-1"
                      on:click={() => handleDelete(post.id)}
                      on:keypress={() => handleDelete(post.id)}
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      <span
                        class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform
                    group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />

                      <span
                        class="relative block border border-current bg-white px-8 py-3 duration-500 active:bg-gray-400"
                      >
                        <img
                          class="mr-1"
                          alt="setting"
                          src="{base}/media/trash.svg"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
        {/key}
      </div>
    {/if}
  </div>
</div>
