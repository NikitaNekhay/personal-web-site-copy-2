<script>
  import { onMount } from "svelte";
  import Gallery from "../../components/MainPages/Gallery.svelte";
  import LoadingSpinner from "../../components/Shared/LoadingSpinner.svelte";
  let passComponent = false;
  onMount(() => {
    const interval = setInterval(() => {
      passComponent = true;
    }, 2000);

    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>{"Shop"}</title>
  <meta name="shop" content="clothes, books, and products" />
</svelte:head>

{#if passComponent}
  <Gallery />
{:else}
  <LoadingSpinner />
{/if}
