<script lang="ts">
  import PostEdit from "../../../../components/MainPages/Posts/PostEdit.svelte";
  import { Router, Route } from "svelte-routing";
  import { base } from "$app/paths";
  import { getProduct } from "../../post";
  import { page } from "$app/stores";
  import { productStore } from "../../../../store/store";
  import LoadingSpinner from "../../../../components/Shared/LoadingSpinner.svelte";
    import type { ProductType } from "../../../../shared/types";

  let isLoading = true; // Initialize the loading state

  let post:ProductType;
  export let data;

  if (data.post !== undefined && data.post !== null) {
    isLoading = false;
    post = data.post;
  } else if ($page.params !== undefined && $page.params !== null) {
    post = $page.params;
    isLoading = false;
  } else {
    isLoading = true;
    console.error("error getting params for posts page");
  }
  // console.log('entered ../[id]/edit/+page.svelte with this exported value of post',post)
</script>

<svelte:head>
  <title>Edit page of the post</title>
  <meta
    name="description"
    content="Edit form for the product"
  />
</svelte:head>

<Router>
  <Route path={`${base}/posts/:id/edit/`} let:params>
    {#if isLoading}
      <LoadingSpinner />
    {:else}
      <PostEdit typeCRUD={"EDIT POST"} post={post}/>
    {/if}
  </Route>
</Router>
