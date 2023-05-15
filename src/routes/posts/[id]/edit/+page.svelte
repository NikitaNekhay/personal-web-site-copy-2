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
  
    let post = {}; // Define and initialize the `post` variable
    let isLoading = true; // Initialize the loading state
    
    const loadPost = async () => {
      try {
        const id = $page.params.id
        console.log(id)
        if(id){
          post = await getBlogPost(id); // Fetch the blog post details
          console.log(isLoading)
          isLoading = false; // Set the loading state to false once data is loadeds
          console.log(isLoading)
        } else {
          console.log("id is not exists on page.params!")
        }
       
      } catch (error) {
        console.log("error while loadPost",error)
      }
        
    };

    loadPost(); // Call the `loadPost` function with the route parameters to fetch the data

  </script>
  
<Router>
  <!-- Other routes... -->
  <Route path={`${base}/posts/:id/edit`} let:params>
    {#if isLoading}
      LOADING
    {:else}
      <PostEdit {post} /> <!-- Pass the `post` prop to the `PostEdit` component -->
    {/if}
  </Route>
</Router>