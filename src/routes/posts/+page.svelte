<svelte:head>
   <title>{'Posts of the blog'}</title>
   <meta name="post list" content="List of blogs">

</svelte:head>

<script >
  import { Route, Router } from 'svelte-routing';
  import PostList from '../../components/PostList.svelte'
  import Gallery from '../../components/Gallery.svelte';

  import { getBlogPost } from './post';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { identity, onMount } from 'svelte/internal';
  import { auth } from '$lib/firebase/firebase';
  import { getUserProfile } from '../profile/user';
  import PostEdit from '../../components/PostEdit.svelte';
  import PostDetail from '../../components/PostDetail.svelte';
  import EmptyPage from '../../components/EmptyPage.svelte';
   
  let isAdmin = false

onMount(() => {
    console.log("getting the name of profile...")
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) 
            if(user.email ==="ktofreesapiens@gmail.com")
              isAdmin = true
    })
        return unsubscribe
});

let routes = {
  "/posts":PostList,
  "/posts/:id":PostDetail,
  "/posts/:id/edit":PostEdit,
  
  "*":EmptyPage
}

</script>

<!-- <Router {routes} /> -->

{#if isAdmin}
  <PostList />
{:else}
  <Gallery />
{/if}