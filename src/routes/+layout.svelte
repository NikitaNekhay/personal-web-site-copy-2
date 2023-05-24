<script>
    import Navbar from "../components/Navbar.svelte";
    import EmptyPage from "../components/EmptyPage.svelte";
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import { page } from "$app/stores";

</script>

<Navbar />
{#if $page.error}
  <EmptyPage />
{:else}
  <slot />
{/if}
<Footer />