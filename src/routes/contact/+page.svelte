<svelte:head>
   <title>{'Contact'}</title>
   <meta name="description" content="Current contacts and placement of author">
</svelte:head>

<script lang='ts'>
  import Contact from '../../components/MainPages/Contact.svelte'
  import Authorphoto from '../../components/MainPages/About/Authorphoto.svelte'
</script>

<div style="display: inline;">
  <div style=" padding-top: 200px; padding-left: 350px; display: flex; margin-right: 0px; padding-right: 200px;">
    <Contact />
    <Authorphoto />
  </div>

</div>