<svelte:head>
   <title>{'About'}</title>
   <meta name="description" content="About informarion. Achievements, goals, motivation">
   <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-R7KENNJDBP"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-R7KENNJDBP');
  </script>
</svelte:head>

<script lang='ts'>
import About from '../../components/MainPages/About.svelte'
   
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