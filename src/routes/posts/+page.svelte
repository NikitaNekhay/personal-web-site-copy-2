<script lang="ts">


  import {  onMount } from "svelte";
  import { auth } from "$lib/firebase/firebase";
    import { authStore, isAdmin, productStore } from "../../store/store";
    import LoadingSpinner from "../../components/Shared/LoadingSpinner.svelte";
    import Gallery from "../../components/MainPages/Gallery.svelte";
    import type { ProductType } from "../../shared/types";
    import { getProducts } from "./post";


    let triggerReload:boolean = false;
  let passComponent = false;
  let tempProductStore:ProductType[];
  //console.log("mounting in posts...",passComponent);
  onMount(async() => {
    tempProductStore = await getProducts();

    passComponent = true;
  })  
</script>

<svelte:head>
  <title>List of products</title>
  <meta name="description" content="List of products for admin" />
</svelte:head>

{#if passComponent}
{#key triggerReload}
  <Gallery tempProductStore={tempProductStore} bind:triggerReload/>
{/key}
{:else}
  <LoadingSpinner />
{/if}
