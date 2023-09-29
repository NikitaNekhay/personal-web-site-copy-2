<script lang="ts">
  import { base } from "$app/paths";
  import { clickOutside } from "../../services/clickOutside";
  import { Language, authHandlers, authStore } from "../../store/store";
  import { addMessages, locale, t } from 'svelte-i18n';
    import ru from '../../services/ru.json';
  import en from '../../services/en.json';
  import { currentLanguagee } from "../../store/store_";

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



  export let isAdmin
  console.log(isAdmin)

  function handleClickOutside() {
    isOpen = false;
  }  

  function openMenu() {
    isOpen = !isOpen
  }


</script>

<div class="menu relative cursor-pointer">
    <div class="grid-column-auto grid-row-auto" on:click={openMenu} on:keydown={openMenu}>
        {#if !isOpen}
            <p class="col-span-full grid-row-auto transition duration-200 hover:text-yellow-0">{$authStore.data.name}</p>
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

