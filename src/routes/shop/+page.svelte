<script lang="ts">
  import { onMount } from "svelte";
  import Gallery from "../../components/MainPages/Gallery.svelte";
  import LoadingSpinner from "../../components/Shared/LoadingSpinner.svelte";
  import type { ProductType } from "../../shared/types";
  import { getProducts } from "../posts/post";
  let passComponent = false;
  let tempProductStore: ProductType[];
  let triggerReload: boolean = false;
  onMount(async () => {
    console.log("mounting in posts...", passComponent);
    tempProductStore = await getProducts();
    passComponent = true;
  });
</script>

<svelte:head>
  <title>{"Shop"}</title>
  <meta name="shop" content="clothes, books, and products" />
</svelte:head>

{#if passComponent}
  {#key triggerReload}
    <Gallery {tempProductStore} bind:triggerReload />
  {/key}
{:else}
  <LoadingSpinner />
{/if}
