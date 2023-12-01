<script>

  import PostList from "../../components/MainPages/Posts/PostList.svelte";

  import {  onMount } from "svelte/internal";
  import { auth } from "$lib/firebase/firebase";
    import { isAdmin } from "../../store/store";
    import LoadingSpinner from "../../components/Shared/LoadingSpinner.svelte";



  let passComponent = false;
  console.log("mounting in posts...");
  onMount(() => {
    console.log("mounting in posts...");
    const unsubscribe = isAdmin.subscribe((value) => {
      
    });
    // passComponent = true;
    return unsubscribe;
  });

  
</script>

<svelte:head>
  <title>{"Posts of the blog"}</title>
  <meta name="post list" content="List of blogs" />
</svelte:head>

<!-- {#if passComponent} -->
{#if $isAdmin.value}
  <PostList />
{:else}
  <LoadingSpinner />
{/if}
