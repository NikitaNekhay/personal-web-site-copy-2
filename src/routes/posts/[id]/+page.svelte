<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import { base } from "$app/paths";
  import { getProduct } from "../post";
  import { page } from "$app/stores";
  import { productStore } from "../../../store/store";
  import { onMount } from "svelte";
  import type { ProductType } from "../../../shared/types";
  import LoadingButton from "../../../components/Shared/LoadingButton.svelte";
    import LoadingSpinner from "../../../components/Shared/LoadingSpinner.svelte";
    import PostDetail from "../../../components/MainPages/Posts/PostDetail.svelte";

  let isLoading = true; // Initialize the loading state

  let post:ProductType;
  export let data;

  if (data.post !== undefined && data.post !== null) {
    isLoading = false;
      console.log("entered +page.svelte", data.post);
    post = data.post;
  } else if ($page.params !== undefined && $page.params !== null) {
    post = $page.params;
    console.log("entered +page.svelte",$page.params);
    isLoading = false;
  } else {
    isLoading = true;
    console.error("error getting params for posts page");
  }

</script>

<svelte:head>
  <title>{"Page of the post"}</title>
  <meta name="single blog page" content="Detailed blog post" />
</svelte:head>

<!-- <Router>
  
  <Route path={`${base}/posts/:id`} let:params> -->
{#if isLoading}
  <LoadingSpinner />
{:else}
  <!-- <PostDetail {post} /> -->
  <PostDetail {post}/>
{/if}
<!-- </Route>
</Router> -->
