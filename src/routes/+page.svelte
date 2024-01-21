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
  <meta property="og:description" content="Take a look at last collection, shop. Get to know NIKITA entering about and contact pages." />
  <meta name="description" content={$t("Internet shop of clothes designer NIKITA NEKHAY. Home page represents NIKITA'S photo portfolio.")} />
</svelte:head>

<Home />
