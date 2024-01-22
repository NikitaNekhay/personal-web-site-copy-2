<script>
  import { t } from "svelte-i18n";
  import Works from "../../components/MainPages/Works.svelte";
</script>

<svelte:head>
  <title>{$t('PROJECT 1')}</title>
  <meta
    name="description"
    content="This is the first presentation of my work on clothes, embodying my ideas about nature, fashion and thoughts about the future. Each element of the collection reflects my memories and vision, blending futuristic, antique and sexual elements, making each item unique and valuable."
  />

  <meta
    property="og:title"
    content={$t('PROJECT 1')}
  />
  <meta
    property="og:description"
    content={$t(
      "This is the first presentation of my work on clothes, embodying my ideas about nature, fashion and thoughts about the future. Each element of the collection reflects my memories and vision, blending futuristic, antique and sexual elements, making each item unique and valuable.",
    )}
  />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="" />
  <meta property="og:url" content="http://nekhaynikita.shop/works" />
</svelte:head>

<Works />
