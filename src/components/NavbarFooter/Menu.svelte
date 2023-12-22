<script lang="ts">
  import { base } from "$app/paths";
  import { clickOutside } from "../../services/clickOutside";
  import {authHandlers, authStore, isAdmin } from "../../store/store";
  import { addMessages, locale, t } from 'svelte-i18n';
    import ru from '../../services/ru.json';
  import en from '../../services/en.json';
  import { currentLanguagee } from "../../store/store_";
    import { Language } from "../../shared/types";

  
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

let name_menu="";
//console.log($authStore.data.name)
if($authStore.data.name === undefined){
    name_menu = "template_name"
    
} else{
    console.log($authStore.data)
    name_menu=$authStore.data.name
}

//   export let isAdmin
   

  function handleClickOutside() {
    isOpen = false;
  }  

  function openMenu() {
    isOpen = !isOpen
  }


</script>

<div class="menu relative cursor-pointer">
    <div 
        class="grid-column-auto grid-row-auto" 
        on:click={openMenu} 
        on:keydown={openMenu}
        role="button"
        tabindex="0"
    >
        {#if !isOpen}
            <p class="col-span-full grid-row-auto transition duration-200 hover:text-yellow-0">{name_menu}</p>
            <!-- <div class="w-8 h-8 rounded-full overflow-hidden">
                <img src="../../../static/favicon.ico" alt="NAME">
            </div> -->
    
        {:else}
        <div
            class="flex flex-col text-center sm:text-start  rounded-lg
            text-black sm:truncate"
            use:clickOutside
            on:clickOutside={handleClickOutside}
        >
            <a class="col-span-full grid-row-auto transition duration-200 
            hover:text-yellow-0" target="_self" href='{base}/profile'>
                {$t('Profile')} 
            </a>
            <a class="col-span-full grid-row-auto transition duration-200 
            hover:text-yellow-0" target="_self" href='{base}/profile/shoppingcart'>
                {$t('Shopping cart')} : {($authStore.data.cart).length}
            </a>
            {#if $isAdmin.value}
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

