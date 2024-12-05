<script>
    import { t } from "svelte-i18n";
  import EmptyPage from "../../components/Shared/EmptyPage.svelte";
</script>

<svelte:head>
  <title>{$t("POLICY")}</title>
  <meta
    name="description"
    content={$t(
      "Policies working in internet. Detailed and suffisticated information about cookies and processing user's data.",
    )}
  />

  <meta property="og:title" content={$t("POLICY")} />
  <meta
    property="og:description"
    content={$t(
      "Policies working in internet. Detailed and suffisticated information about cookies and processing user's data.",
    )}
  />

  <meta property="og:type" content="article" />

  <meta
    property="og:image"
    content=""
  />

  <meta property="og:url" content="https://nekhaynikita.ru/policy" />
</svelte:head>

<EmptyPage />
