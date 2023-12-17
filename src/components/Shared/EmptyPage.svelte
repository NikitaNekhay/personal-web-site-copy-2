<script>
    import { page } from '$app/stores';
    import { t } from 'svelte-i18n';

</script>

<div class="grid h-screen px-4 bg-white place-content-center">
  <h1 class="tracking-widest text-center text-black-1 uppercase font-abril text-3xl">
    {$page.status} | {$page.error?.message}<br>
    
  </h1>
</div>