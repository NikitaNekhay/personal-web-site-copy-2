<svelte:head>
   <title>Login</title>
   <meta name="description" content="Login page">
</svelte:head>

<script lang='ts'>
  
    import { page } from '$app/stores';
  import Login from '../../components/MainPages/Login.svelte'
    import CommonPopUp from '../../components/Shared/CommonPopUp.svelte';
    let isChanged:boolean = false

</script>



<Login />

<style>

</style>