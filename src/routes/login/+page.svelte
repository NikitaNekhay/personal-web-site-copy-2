<svelte:head>
   <title>Login</title>
   <meta name="description" content="Login page of the site. Creating an issue of user you will be available to purchase our goods quicker and in more convinient way.">
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