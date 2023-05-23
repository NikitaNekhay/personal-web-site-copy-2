<svelte:head>
   <title>{'About'}</title>
   <meta name="description" content="About informarion. Achievements, goals, motivation">
</svelte:head>

<script lang='ts'>
  import About from '../../components/About.svelte'
</script>

<div class="grid-item-content mt-[200px] mb-[420px]">
  <About />
</div>

<style>
  .grid-item-content{
    padding-left: 350px;
    padding-right: 350px;

    display: flexbox;
    margin-right: 0px;
    grid-column: auto;
    grid-row: auto;
  }

</style>