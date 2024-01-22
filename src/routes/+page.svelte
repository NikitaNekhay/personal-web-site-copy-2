<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import Home from "../components/MainPages/Home.svelte";
  import EmptyPage from "../components/Shared/EmptyPage.svelte";
  import { t } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$t("NIKITA NIAKHAI - DESIGNER - SHOP - PHOTOGRAPHY PORTFOLIO")}</title>
  <meta
    name="description"
    content={$t(
      "Internet shop of clothes designer NIKITA NEKHAY. Home page represents NIKITA'S photo portfolio. Take a look at last collection, shop. Get to know NIKITA entering about and contact pages.",
    )}
  />

  <meta property="og:title" content={$t("NIKITA NIAKHAI - DESIGNER - SHOP - PHOTOGRAPHY PORTFOLIO")} />
  <meta
    property="og:description"
    content={$t(
      "Internet shop of clothes designer NIKITA NEKHAY. Home page represents NIKITA'S photo portfolio. Take a look at last collection, shop. Get to know NIKITA entering about and contact pages.",
    )}
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content=""
  />
  <meta property="og:url" content="http://nekhaynikita.shop/" />
</svelte:head>

<Home />
