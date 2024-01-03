<svelte:head>
   <title>{$t('project 1 CAPSULE COLLECTION')}</title>
   <meta name="description" content={$t("Last clothes collection and description")}>
</svelte:head>

<script >
    import { t } from 'svelte-i18n';
  import Works from '../../components/MainPages/Works.svelte'
</script>

<Works />