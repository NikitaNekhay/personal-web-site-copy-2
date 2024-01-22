<script>
  import { t } from "svelte-i18n";
  import Profile from "../../components/MainPages/Profile/Profile.svelte";
</script>

<svelte:head>
  <title>{$t("PROFILE")}</title>
  <meta
    name="description"
    content={$t(
      "A page of user's profile, where the user can see his data, tap on settings menu and go to change his details both personal and credential.",
    )}
  />

  <meta property="og:title" content={$t("PROFILE")} />

  <meta
    property="og:description"
    content={$t(
      "A page of user's profile, where the user can see his data, tap on settings menu and go to change his details both personal and credential.",
    )}
  />

  <meta property="og:type" content="website" />

  <meta property="og:image" content="" />

  <meta property="og:url" content="http://nekhaynikita.shop/profile" />
</svelte:head>

<Profile />
