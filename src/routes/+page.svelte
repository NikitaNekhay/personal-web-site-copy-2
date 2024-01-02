<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
  import Home from '../components/MainPages/Home.svelte';
    import EmptyPage from '../components/Shared/EmptyPage.svelte';
    onMount(()=>{
      window.location.href = `${base}/works`;
    })

</script>

<Home />
