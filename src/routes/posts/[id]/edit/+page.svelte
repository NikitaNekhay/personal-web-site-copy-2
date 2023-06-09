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

    let post 
    export let data
    
    if(data.post!==undefined && data.post!==null){
      isLoading=false
      post = data.post
    } else if ($page.params!==undefined && $page.params!==null){
      post = $page.params
      isLoading=false
    } else {
      isLoading=true
      console.log('error getting params for posts page')
    }
    console.log('entered +page.svelte',post)



  </script>

<Router>
  
  <Route path={`${base}/posts/:id/edit/`} let:params>
    {#if isLoading}
      LOADING
    {:else}
      <PostEdit post={post} /> 
    {/if}
  </Route>
</Router>