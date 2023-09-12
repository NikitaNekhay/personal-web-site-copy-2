<script lang="ts">
  import PostEdit from "../../../../components/PostEdit.svelte";
  import { Router, Route } from "svelte-routing";
  import { base } from "$app/paths";
  import { getBlogPost } from "../../post";
  import { page } from "$app/stores";
  import { blogPost } from "../../../../store/store";
  import LoadingSpinner from "../../../../components/LoadingSpinner.svelte";

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
  // console.log('entered ../[id]/edit/+page.svelte with this exported value of post',post)
</script>

<svelte:head>
  <title>{"Edit page of the post"}</title>
  <meta
    name="edit of a single blog page"
    content="Edit form for the blog post"
  />
</svelte:head>

<Router>
  <Route path={`${base}/posts/:id/edit/`} let:params>
    {#if isLoading}
      <LoadingSpinner />
    {:else}
      <PostEdit {post} />
    {/if}
  </Route>
</Router>
