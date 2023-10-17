<script>

  import PostList from "../../components/MainPages/Posts/PostList.svelte";

  import {  onMount } from "svelte/internal";
  import { auth } from "$lib/firebase/firebase";
    import { isAdmin } from "../../store/store";



  let passComponent = false;

  onMount(() => {
    //console.log("getting the name of profile...");
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user)
        if (
          user.email === "ktofreesapiens@gmail.com" ||
          user.email === "vaper20041337@gmail.com"
        )
          isAdmin.set({value:true})
          $isAdmin.value = true;
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
{/if}
<!-- {:else}
  <LoadingSpinner />
{/if} -->
