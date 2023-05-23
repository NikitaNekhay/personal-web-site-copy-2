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
  
    let post = {}; // Define and initialize the `post` variable
    let isLoading = true; // Initialize the loading state
    
    const loadPost = async () => {
      try {
        const id  = $page.params.id
        console.log(id)
        if(id){
          post = await getBlogPost(id); // Fetch the blog post details
          isLoading = false; // Set the loading state to false once data is loadeds
        } else {
          console.log("id is not exists on page params")
        }
      } catch (error) {
        console.log("error while loadPost",error)
      }
        
    };

    loadPost(); // Call the `loadPost` function with the route parameters to fetch the data

    
  </script>
  
  <Router>

    <Route path={`${base}/posts/:id`} let:params>
        {#if isLoading}
          LOADING

        {:else}
        <PostDetail {post} /> 
        {/if}
    </Route>

    <!-- <Route path={`${base}/posts/:id/edit`} let:params>
      <PostEdit {params} />
    </Route> -->
  </Router>