<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
  import Home from '../components/MainPages/Home.svelte';
    import EmptyPage from '../components/Shared/EmptyPage.svelte';
    // onMount(()=>{
    //   window.location.href = `${base}/works`;
    // })

</script>

<svelte:head>
  <title>NIKITA NIAKHAI. CLOTHES SHOP</title>
  <meta name="description" content="Home page with a photo portfolio" />
</svelte:head>

<Home />
