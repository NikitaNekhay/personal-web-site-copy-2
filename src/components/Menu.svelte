<script>
  import { base } from "$app/paths";
  import { getContext, onMount } from "svelte";
  import { clickOutside } from "../services/clickOutside";
  import { authHandlers, authStore } from "../store/store";
  import { auth } from "$lib/firebase/firebase";
  import { getUserProfile } from "../routes/profile/user";
  import { addMessages, locale, t } from 'svelte-i18n';
    import ru from '../services/ru.json';
   // import isAdmin from "../components/Navbar.svelte"
    import en from '../services/en.json'

addMessages('en', en);
//  Устанавливаем язык по умолчанию
locale.set('en')
    // // Загружаем переводы для русского языка
    // addMessages('ru', ru);
    // // Устанавливаем язык по умолчанию
    // locale.set('ru')

  export let isOpen = false
  
  let isAdmin=false

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
                //console.log(user)
                let Ready_profile = await getUserProfile(user);
                //console.log(Ready_profile)
                if (user) {
                    name = Ready_profile.name
                    if(Ready_profile.email === "vaper20041337@gmail.com" || Ready_profile.email ==="ktofreesapiens@gmail.com"){
                        isAdmin = true
                    }
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
            <!-- <div class="w-8 h-8 rounded-full overflow-hidden">
                <img src="../../../static/favicon.ico" alt="NAME">
            </div> -->
    
        {:else}
        <div
            class="flex flex-col text-right rounded-lg
            text-black"
            use:clickOutside
            on:click_outside={handleClickOutside}
        >
            <a class="col-span-full grid-row-auto transition duration-100 
            hover:text-yellow-0" target="_self" href='{base}/profile'>
                {$t('Profile')} 
            </a>
            {#if isAdmin}
            <a class="col-span-full grid-row-auto transition duration-100 
            hover:text-yellow-0" target="_self" href='{base}/create'>
                {$t('Create')} 
            </a>
            <a class="col-span-full grid-row-auto transition duration-100 
            hover:text-yellow-0" target="_self" href='{base}/dashboard'>
                {$t('View')} 
            </a>
            <a class="col-span-full grid-row-auto transition duration-100 
            hover:text-yellow-0" target="_self" href='{base}/stat'>
                {$t('Stat')} 
            </a>
            {/if}
            <a on:click={authHandlers.logout} class="col-span-full grid-row-auto 
            transition duration-100 hover:text-yellow-0" target="_self" href='{base}/login'>
                {$t('Logout')} 
            </a>
        </div>
        {/if}
    </div>
</div>

