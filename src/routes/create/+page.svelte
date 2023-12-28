<svelte:head>
   <title>{'Sandbox of posts'}</title>
   <meta name="sandbox" content="Admin dashboard, manage posts">
</svelte:head>

<script lang="ts">
  import PostEdit from '../../components/MainPages/Posts/PostEdit.svelte'
</script>

<PostEdit typeCRUD={"CREATE POST"} post={null}/>
