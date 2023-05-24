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

</script>



{#if isAdmin}
  <PostList />
{:else}
  <Gallery />
{/if}
