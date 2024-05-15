<script>
  import { t } from "svelte-i18n";
  import Purchase from "../../components/MainPages/About/Purchase.svelte";
</script>

<svelte:head>
  <title>{$t("PRODUCTS POLICY")}</title>
  <meta
    name="description"
    content={$t(
      "A big adult page of policies. There you can read details on purchase, return, shipping policies and etc.",
    )}
  />

  <meta property="og:title" content={$t("PRODUCTS POLICY")} />
  <meta
    property="og:description"
    content={$t(
      "A big adult page of policies. There you can read details on purchase, return, shipping policies and etc.",
    )}
  />

  <meta property="og:type" content="article" />

  <meta
    property="og:image"
    content=""
  />

  <meta property="og:url" content="http://nekhaynikita.shop/purchase" />
</svelte:head>

<Purchase />
