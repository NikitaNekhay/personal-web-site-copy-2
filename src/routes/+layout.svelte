<script>
    import Navbar from "../components/Navbar.svelte";
    import EmptyPage from "../components/EmptyPage.svelte";
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import { page } from "$app/stores";
    import { Route, Router } from 'svelte-routing';

  import Home from "../components/Home.svelte";
  import PostDetail from "../components/PostDetail.svelte";
  import { base } from "$app/paths";

</script>

<Navbar />
{#if $page.error}
  <EmptyPage />
{:else}
  <slot />
{/if}
<Footer />