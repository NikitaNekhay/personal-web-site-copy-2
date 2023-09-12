<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { clickOutside } from "../services/clickOutside";
  import { Language, authHandlers } from "../store/store";
  import { auth } from "$lib/firebase/firebase";
  import { getUserProfile } from "../routes/profile/user";
  import { addMessages, locale, t } from 'svelte-i18n';
    import ru from '../services/ru.json';
  import en from '../services/en.json';
  import { currentLanguagee } from "../store/store_";

  if($currentLanguagee!==undefined){
        const currentValue = $currentLanguagee;
        // Switch the language value
        if(currentValue === Language.English){
           
            addMessages(Language.English, en)
            locale.set(Language.English)
        } else {
          addMessages(Language.Russian, ru)
            locale.set(Language.Russian)
           
        }
    } else {
        addMessages(Language.English, en)
        locale.set(Language.English)
    }

  export let isOpen = false



  let isAdmin=false

  function handleClickOutside() {
    isOpen = false;
  }  

  function openMenu() {
    isOpen = !isOpen
  }

  let name = 'Mister';

  let currentUser = {}

    onMount(() => {

        //console.log("getting the name of profile...")
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
                //console.log("the user in menu.svelte",user)
                let Ready_profile = await getUserProfile(user);
                //console.log("got user profile in menu.svelte",Ready_profile)
                if (user) {
                    currentUser = user
                    if(Ready_profile.name!==undefined){
                        name = Ready_profile.name
                    }
                    isAdmin = user.email === "ktofreesapiens@gmail.com" || user.email === "vaper20041337@gmail.com"  ? true : false
 
                }
        })
        
            return unsubscribe

    });

    // const a = onMount(async()=>{
    //     const interval = setInterval(async() => {
    //         console.log('beep')
    //     }, 2000);
    //     return () => clearInterval(interval);
    // })

    function handleClick() {
  // Navigate to the detailed page of the selected blog post
    //console.log(currentUser.uid)
    
    //window.location.href = `${base}/profile/`;
  }



</script>

<div class="menu relative cursor-pointer">
    <div class="grid-column-auto grid-row-auto" on:click={openMenu} on:keydown={openMenu}>
        {#if !isOpen}
            <p class="col-span-full grid-row-auto transition duration-200 hover:text-yellow-0">{name}</p>
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
            <a class="col-span-full grid-row-auto transition duration-200 
            hover:text-yellow-0" target="_self" href='{base}/profile'>
                {$t('Profile')} 
            </a>
            {#if isAdmin}
            <a class="col-span-full grid-row-auto transition duration-200 
            hover:text-yellow-0" target="_self" href='{base}/create'>
                {$t('Create')} 
            </a>
            <a class="col-span-full grid-row-auto transition duration-200 
            hover:text-yellow-0" target="_self" href='{base}/posts'>
                {$t('View')} 
            </a>
            <a class="col-span-full grid-row-auto transition duration-200 
            hover:text-yellow-0" target="_self" href='{base}/dashboard'>
                {$t('Users')} 
            </a>
            <a class="col-span-full grid-row-auto transition duration-200 
            hover:text-yellow-0" target="_self" href='{base}/stat'>
                {$t('Stat')} 
            </a>
            {/if}
            <a on:click={authHandlers.logout} class="col-span-full grid-row-auto 
            transition duration-200 hover:text-yellow-0" target="_self" href='{base}/login'>
                {$t('Logout')} 
            </a>
        </div>
        {/if}
    </div>
</div>

