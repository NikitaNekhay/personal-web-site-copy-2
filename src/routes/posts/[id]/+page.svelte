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

  let isLoading = true

  export let data
  if(data.post!==undefined){
    isLoading=false
  } 
  console.log('entered +page.svelte',data.post)

    // Define and initialize the `post` variable
    
  </script>
  

  <Router>

    <Route path={`${base}/posts/:id`} let:params>
        {#if isLoading}
          LOADING
        {:else}
          <PostDetail post={data.post} />
        {/if}
    </Route>

  </Router>