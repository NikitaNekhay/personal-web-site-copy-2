<svelte:head>
   <title>{'Diary'}</title>
</svelte:head>

<script lang='ts'>
  import Comic from '../../components/Comic.svelte'
</script>

<div class="grid-item-content">
  <div class="grid-item4">
    <p style="text-align: right;">Diary is hidden!<br>
  </div>
  <Comic />
</div>

<style>
  .grid-item-content{
    padding-top: 200px;
    padding-left: 350px;
    padding-right: 350px;
    display: flexbox;
    margin-right: 0px;
    grid-column: auto;
    grid-row: auto;
  }

</style>