<script lang="ts">
  import About from "../../components/MainPages/About.svelte";
  import { t } from "svelte-i18n";
</script>

<svelte:head>
  <title>{$t("ABOUT NEKHAY NIKITA")}</title>
  <meta
    name="description"
    content={$t(
      "What is it about this NIKITA? Who is he? What does he do and suggests? Is he mad? Take your sight on it. About information.",
    )}
  />

  <meta property="og:title" content={$t("ABOUT NEKHAY NIKITA")} />

  <meta
    property="og:description"
    content={$t(
      "What is it about this NIKITA? Who is he? What does he do and suggests? Is he mad? Take your sight on it. About information.",
    )}
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:image"
    content="https://lh3.googleusercontent.com/pw/ABLVV852oPHLKRMIwtf-Sn5fGGeiIGiVzhsU9ZoztcoPK8qW4Gt52oXElABRA8nKxrbg1xKLa-upENHFXidU4FO5ame1Dq4X69jHH3J_z7g-Soz4ALO9mIFd6z1Bg2vlAHdAM3P4BGzI69gLHVbqcMsF8eqvKw=w623-h934-s-no-gm?authuser=0"
  />

  <meta property="og:url" content="https://nekhaynikita.ru/about" />

  <meta name="twitter:image" content="https://lh3.googleusercontent.com/pw/ABLVV852oPHLKRMIwtf-Sn5fGGeiIGiVzhsU9ZoztcoPK8qW4Gt52oXElABRA8nKxrbg1xKLa-upENHFXidU4FO5ame1Dq4X69jHH3J_z7g-Soz4ALO9mIFd6z1Bg2vlAHdAM3P4BGzI69gLHVbqcMsF8eqvKw=w623-h934-s-no-gm?authuser=0" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<section class=" sm:w-screen md:w-screen w-[60%] h-auto">
  <About />
</section>
