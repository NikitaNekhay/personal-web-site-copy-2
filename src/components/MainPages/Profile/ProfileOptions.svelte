<script lang="ts">
  import { base } from "$app/paths";
  import { clickOutside } from "../../../services/clickOutside";
  import { authHandlers } from "../../../store/store";
  import { addMessages, locale, t } from 'svelte-i18n';
  import ru from '../../../services/ru.json';
  import en from '../../../services/en.json';
  import { currentLanguage } from '../../../store/store';
  import { onMount } from 'svelte';
    import DeactivatePopUp from "../../Shared/DeactivatePopUp.svelte";

  let isDeactivate = false;
  let isOpen = false

  function handleButtonClick(){
  isOpen = !isOpen
  }

  function handleClickOutside() {
  isOpen = false;
  }  

</script>

<div class="px-6 sm:px-0">
    <div class="grid items-center justify-items-between grid-cols-3 sm:grid-cols-2 md:grid-cols-2">
      <div class="w-[100%]">

        <header class="  text flex justify-items-start " >
          <h3 class="font-abril text-4xl text-blue-0 hyphens-auto" lang={$currentLanguage.language}>{$t('User Profile')} </h3>
        </header>

      </div>
      
        <div class="ml-16 sm:ml-0 md:ml-16">
          <div class="grid justify-items-center">
            {#if !isOpen}

            <div
            
              class="group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1"
              on:click={handleButtonClick} 
              on:keypress={handleButtonClick} 
              id="menu-button" 
              aria-expanded="true" aria-haspopup="true"
              role="button"
              tabindex="0"
            >
              <span
                class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              ></span>

              <span class="relative block border border-current bg-white px-8 py-3 duration-500 active:bg-gray-400">
                <img class="mr-1" alt="setting" src="{base}/media/settings.svg" />
  
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
                    clip-rule="evenodd" />
                  </svg>
              </span>
            </div>


              <!-- <div class=" border-t-4 border-navy-1">
                <button type="button" class="inline-flex w-full justify-center 
                gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold 
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" 
                on:click={handleButtonClick} id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <img class="mr-1" alt="setting" src="{base}/media/settings.svg" />
  
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
                    clip-rule="evenodd" />
                  </svg>
                </button>
              </div> -->
              <!--
                Dropdown menu, show/hide based on menu state.
  
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
                -->
              {:else}
              <div
              class="group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1"
              on:click={handleButtonClick} 
              on:keypress={handleButtonClick} 
              id="menu-button" 
              aria-expanded="true" 
              aria-haspopup="true"
              role="button"
              tabindex="0"
            >
              <span
                class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:translate-y-0.5 group-hover:-translate-x-0.5"
              ></span>

              <span class="relative block border border-current bg-white px-8 py-3 duration-500 active:bg-gray-400">
                <img class="mr-1" alt="setting" src="{base}/media/settings.svg" />
  
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
                    clip-rule="evenodd" />
                  </svg>
              </span>
            </div>

              <div class="absolute z-0 md:mr-[50%] md:w-52 sm:right-8 sm:left-8
              w-50 h-42 origin-center bg-white-0 
              shadow-lg ring-1 ring-black ring-opacity-5 
              focus:outline-none border-x-4 border-navy-1"
               role="menu" aria-orientation="vertical" 
              aria-labelledby="menu-button" tabindex="-1"
              
              >
                  <div class="py-1" role="none" use:clickOutside on:clickOutside={handleClickOutside}>
                    <div class="p-2 border-1 shadow-white-2 shadow text-left">
                       <a href="{base}/profile" class="group text-gray-700 flex px-4 py-2 text-sm 
                      transition duration-300 delay-100" 
                      role="menuitem" tabindex="-1" id="menu-item-0">
                          <img class="mr-2 group-hover:text-yellow-0" src="{base}/media/user.svg" alt="user icon">
                          <p class="self-center group-hover:text-yellow-0">{$t('View')}</p>
                      </a> 
                       <a href="{base}/profile/edit" class="flex text-gray-700 px-4 py-2 text-sm 
                      transition duration-300 delay-100 group" 
                      role="menuitem" tabindex="-1" id="menu-item-0">
                        <img class="mr-2 group-hover:text-yellow-0 stroke-current" src="{base}/media/user-edit.svg" alt="user edit icon">
                        <p class="self-center group-hover:text-yellow-0">{$t('Edit')}</p>
                      </a> 
                      <a href="{base}/profile/edit/credentials" class="flex text-gray-700 px-4 py-2 text-sm 
                      transition duration-300 delay-100 group" 
                      role="menuitem" tabindex="-1" id="menu-item-0">
                        <img class="mr-2 group-hover:text-yellow-0 stroke-current" src="{base}/media/user-edit.svg" alt="user edit icon">
                        <p class="self-center group-hover:text-yellow-0">{$t('Edit credentials')}</p>
                      </a> 
                    </div>
                    <div class="p-2">
                      <a on:click={()=>{isDeactivate = !isDeactivate}} on:keypress={()=>{isDeactivate = !isDeactivate}} class="cursor-pointer 
                      flex  text-gray-700 px-4 py-2 text-sm transition stroke-current duration-100 hover:text-red-2 hover:stroke-current" 
                      role="menuitem" tabindex="-1" id="menu-item-1">
                      <!-- DELETE ICON -->

                        <img class="mr-2 " src="{base}/media/user-x.svg" alt="user delete icon">
                        <p class=" self-center ">{$t('Deactivate')} </p>
                      </a>
                    </div>
                  </div>
              </div>
                {/if}
       
          </div>
        </div>
        
      <!-- <div>
        <div class="flex">
          <h3 class="text-base font-semibold leading-7 text-transparent">{$t('Applicant Information')} 
            <p class="mt-1 max-w-2xl text-sm leading-6 text-transparent">{$t('Personal details and application.')} </p>
            </h3>
        </div>
      </div> -->
     
        
  
  </div>
</div>

{#if isDeactivate}
  <DeactivatePopUp bind:isDeactivate />
{/if}