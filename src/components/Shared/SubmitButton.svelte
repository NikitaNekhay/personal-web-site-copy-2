<script lang="ts">
    import { t } from 'svelte-i18n';
   export let passedfunction: () => void;
</script>

<button
class="group relative mx-[136px] flex
w-1/2 items-center justify-center overflow-hidden
rounded-md border border-orange-0
px-8 py-3 focus:outline-none focus:ring"
on:click={passedfunction}
type="button"
>
<span
    class="absolute inset-x-0 bottom-0 h-[2px]
bg-orange-0 transition-all group-hover:h-full
group-active:bg-orange-0"
/>

<span
    class="relative text-sm font-medium
text-orange-0 transition-colors group-hover:text-white"
>
    {$t("Purchase")}
</span>
</button>