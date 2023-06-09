<svelte:head>
   <title>{'Page of the post'}</title>
   <meta name="single blog page" content="Detailed blog post">
  
</svelte:head>

<script lang="ts">
    import { Router, Route  } from 'svelte-routing';
    import PostDetail from '../../../components/PostDetail.svelte';
    import { base } from '$app/paths';
  import { getBlogPost } from '../post';
  import { page } from '$app/stores';
  import { blogPost } from '../../../store/store';
  import PostEdit from '../../../components/PostEdit.svelte';
  import { onMount } from 'svelte';

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
  
  <Route path={`${base}/posts/:id`} let:params>
    {#if isLoading}
      LOADING
    {:else}
    <PostDetail post={post} />
    {/if}
  </Route>
</Router>
  <!-- <PostDetail post={data.post} />
  <Router>

    <Route path={`${base}/posts/:id`} let:params>
        {#if isLoading}
          LOADING
        {:else}
          <PostDetail post={data.post} />
        {/if}
    </Route>

  </Router> -->