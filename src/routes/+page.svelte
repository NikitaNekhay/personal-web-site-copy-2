<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
  import Home from '../components/MainPages/Home.svelte';
    import EmptyPage from '../components/Shared/EmptyPage.svelte';
    import { t } from 'svelte-i18n';
    // onMount(()=>{
    //   window.location.href = `${base}/works`;
    // })
      
</script>

<svelte:head>
  <title> NEKHAY NIKITA - CLOTHES SHOP</title>
  <meta name="description" content={$t("Internet shop of clothes designer NIKITA NEKHAY. Home page represents NIKITA'S photo portfolio.")} />
</svelte:head>

<Home />
