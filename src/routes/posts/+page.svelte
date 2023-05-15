<svelte:head>
   <title>{'Posts of the blog'}</title>
   <meta name="post list" content="List of blogs">
</svelte:head>

<script >
  import { Route, Router } from 'svelte-routing';
  import PostList from '../../components/PostList.svelte'
  import PostDetail from '../../components/PostDetail.svelte';
  import PostEdit from '../../components/PostEdit.svelte';

  import { getBlogPost } from './post';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  
    // let post = {}; // Define and initialize the `post` variable
    // let isLoading = true; // Initialize the loading state
    
    // const { id } = $page.params
    // if(id){
    //   post = await getBlogPost(id); // Fetch the blog post details
    //   //isLoading = false; // Set the loading state to false once data is loadeds
    // } else {
    //   console.log("id is not exists on page params")
    // }

    // const loadPost = async () => {
    //   try {
    //     const { id } = $page.params
    //     if(id){
    //       post = await getBlogPost(id); // Fetch the blog post details
    //       isLoading = false; // Set the loading state to false once data is loadeds
    //     } else {
    //       console.log("id is not exists on page params")
    //     }
    //   } catch (error) {
    //     console.log("err while loadPost",error)
    //   }
    // };

    // loadPost(); // Call the `loadPost` function with the route parameters to fetch the data

</script>

<Router>
  <Route path={`${base}/posts/`} let:params>
    <PostList />
  </Route>
  <Route path={`${base}/posts/:id`} let:params>
    <PostDetail {params} />
  </Route>
  <Route path={`${base}/posts/:id/edit`} let:params>
    <PostEdit {params} />
  </Route>
</Router>



<!-- Make it gallery for the normal user -->