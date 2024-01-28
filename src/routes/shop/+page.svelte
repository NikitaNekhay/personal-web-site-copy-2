<script lang="ts">
  import { onMount } from "svelte";
  import Gallery from "../../components/MainPages/Gallery.svelte";
  import LoadingSpinner from "../../components/Shared/LoadingSpinner.svelte";
  import type { ProductType } from "../../shared/types";
  import { getProducts } from "../posts/post";
    import { t } from "svelte-i18n";
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
  <title>{$t("NEKHAY NIKITA - DESIGNER SHOP")}</title>
  <meta
    name="description"
    content={$t("Shop page of available clothes made by NIKITA. There you can scroll down and see the images, available sizes and price. Tap on the image and check the details.")}
  />

  <meta
  property="og:title"
  content={$t("NEKHAY NIKITA - DESIGNER SHOP")}
/>
<meta
  property="og:description"
  content={$t("Shop page of available clothes made by NIKITA. There you can scroll down and see the images, available sizes and price. Tap on the image and check the details."
  )}
/>
<meta property="og:type" content="website" />
<meta
  property="og:image"
  content=""
/>
<meta property="og:url" content="http://nekhaynikita.shop/shop" />
</svelte:head>

{#if passComponent}
  {#key triggerReload}
    <Gallery {tempProductStore} bind:triggerReload />
  {/key}
{:else}
  <LoadingSpinner />
{/if}
