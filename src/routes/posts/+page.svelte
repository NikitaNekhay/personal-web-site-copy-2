<script>
  import { Route, Router } from "svelte-routing";
  import PostList from "../../components/MainPages/Posts/PostList.svelte";
  import Gallery from "../../components/MainPages/Gallery.svelte";

  import { getBlogPost } from "./post";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import { beforeUpdate, identity, onMount } from "svelte/internal";
  import { auth } from "$lib/firebase/firebase";
  import { getUserProfile } from "../profile/user";
  import PostEdit from "../../components/MainPages/Posts/PostEdit.svelte";
  import PostDetail from "../../components/MainPages/Posts/PostDetail.svelte";
  import EmptyPage from "../../components/Shared/EmptyPage.svelte";
  import LoadingSpinner from "../../components/Shared/LoadingSpinner.svelte";

  let isAdmin = false;
  let passComponent = false;

  onMount(() => {
    //console.log("getting the name of profile...");
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user)
        if (
          user.email === "ktofreesapiens@gmail.com" ||
          user.email === "vaper20041337@gmail.com"
        )
          isAdmin = true;
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
{#if isAdmin}
  <PostList />
{/if}
<!-- {:else}
  <LoadingSpinner />
{/if} -->
