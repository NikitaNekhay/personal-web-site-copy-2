<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import PostDetail from "../../../components/MainPages/Posts/PostDetail.svelte";

  import { base } from "$app/paths";
  import { getBlogPost } from "../post";
  import { page } from "$app/stores";
  import { blogPost } from "../../../store/store";
  import PostEdit from "../../../components/MainPages/Posts/PostEdit.svelte";
  import { onMount } from "svelte";
  import type { PostType } from "../../../shared/types";
  import LoadingButton from "../../../components/Shared/LoadingButton.svelte";
    import LoadingSpinner from "../../../components/Shared/LoadingSpinner.svelte";

  let isLoading = true; // Initialize the loading state

  let post;
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
  console.log("entered +page.svelte", post);
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
  <PostDetail {post} />
{/if}
<!-- </Route>
</Router> -->
