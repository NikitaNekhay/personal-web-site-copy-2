<script>
  import { base } from "$app/paths";
  import { getContext, onMount } from "svelte";
  import { clickOutside } from "../services/clickOutside";
  import { authHandlers, authStore, profile } from "../store/store";
  import { auth } from "$lib/firebase/firebase";
  import { getUserProfile } from "../routes/profile/user";

  export let isOpen = false
  export let isAdmin = false
  function handleClickOutside() {
    isOpen = false;
  }  

  function openMenu() {
    isOpen = !isOpen
  }

  let name = 'Mister';

    onMount(() => {
    console.log("getting the name of profile...")
    
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
            let Ready_profile = await getUserProfile(user);
            if (user) {
                name = Ready_profile.name
            // 
            }
    })
        return unsubscribe
    });


</script>

<div class="menu relative cursor-pointer">
    <div class="grid-column-auto grid-row-auto" on:click={openMenu} on:keydown={openMenu}>
        {#if !isOpen}
            <p class="col-span-full grid-row-auto transition duration-100 hover:text-yellow-0">{name}</p>
            <div class="w-8 h-8 rounded-full overflow-hidden">
                <!-- <img src="../../../static/favicon.ico" alt="NAME"> -->
            </div>
    
        {:else}
        <div
            class="flex flex-col text-right rounded-lg
            text-black"
            use:clickOutside
            on:click_outside={handleClickOutside}
        >
            <a class="col-span-full grid-row-auto transition duration-100 hover:text-yellow-0" target="_self" href='{base}/profile'>
                Profile
            </a>
            {#if isAdmin}
            <a class="col-span-full grid-row-auto transition duration-100 hover:text-yellow-0" target="_self" href='{base}/dashboard'>
                Dashboard
            </a>
            {/if}
            <a on:click={authHandlers.logout} class="col-span-full grid-row-auto transition duration-100 hover:text-yellow-0" target="_self" href='{base}/login'>
                Logout
            </a>
            <a on:click={authHandlers.deactivate} class="col-span-full grid-row-auto transition duration-100 hover:text-yellow-0" target="_self" href='{base}/login'>
                Deactivate
            </a>
        </div>
        {/if}
    </div>
</div>

