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
    //console.log("mounting in posts...", passComponent);
    tempProductStore = await getProducts();
    passComponent = true;
  });
</script>

<svelte:head>
  <title>Shop</title>
  <meta name="description" content="Shop page of available clothes made by NIKITA. There you can scroll down and see the images, available sizes and price. Tap on the image and check the details." />
</svelte:head>

{#if passComponent}
  {#key triggerReload}
    <Gallery {tempProductStore} bind:triggerReload />
  {/key}
{:else}
  <LoadingSpinner />
{/if}
