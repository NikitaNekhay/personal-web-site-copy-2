<svelte:head>
   <title>{'Edit page of the post'}</title>
   <meta name="edit of a single blog page" content="Edit form for the blog post">
  
</svelte:head>

<script lang="ts">
    import PostEdit from '../../../../components/PostEdit.svelte';
    import { Router, Route  } from 'svelte-routing';
    import { base } from '$app/paths';
    import { getBlogPost } from '../../post';
    import { page } from '$app/stores';
  import { blogPost } from '../../../../store/store';
  

    let isLoading = true; // Initialize the loading state

    export let data
    if(data.post!==undefined){
      isLoading=false
    } 



  </script>

<Router>
  
  <Route path={`${base}/posts/:id/edit/`} let:params>
    {#if isLoading}
      LOADING
    {:else}
      <PostEdit post={data.post} /> 
    {/if}
  </Route>
</Router>