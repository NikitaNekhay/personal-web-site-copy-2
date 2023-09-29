<script>
    import Navbar from "../components/NavbarFooter/Navbar.svelte";
    import EmptyPage from "../components/Shared/EmptyPage.svelte";
    import "../app.css";
    import Footer from "../components/NavbarFooter/Footer.svelte";
    import { page } from "$app/stores";



</script>

<Navbar />
{#if $page.error}
  <EmptyPage />
{:else}
  <slot />
{/if}
<Footer />