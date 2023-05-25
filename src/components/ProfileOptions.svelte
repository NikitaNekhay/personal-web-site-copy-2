<script lang="ts">
  import { base } from "$app/paths";
  import { clickOutside } from "../services/clickOutside";
  import { authHandlers } from "../store/store";
  import { addMessages, locale, t } from 'svelte-i18n';
  import ru from '../services/ru.json';
  import en from '../services/en.json';
  import { currentLanguage } from '../store/store';
  import { onMount } from 'svelte';

          // Загружаем переводы для русского языка
          addMessages('en', en);
          // Устанавливаем язык по умолчанию
          locale.set('en')

  let isOpen = false


  function handleButtonClick(){
  isOpen = !isOpen
  }

  function handleClickOutside() {
  isOpen = false;
  }  

  let isDeactivate = false

  function ensureDeactivate(){
  isDeactivate = !isDeactivate
  }

</script>

<div class="px-6 sm:px-0">
    <div class="grid items-center justify-items-center grid-rows-1 grid-cols-3">
      <div>
        <div class=" justify-items-start">
          <h3 class="text-base font-semibold leading-7 text-gray-900">{$t('Applicant Information')} 
            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{$t('Personal details and application.')} </p>
            </h3>
        </div>
      </div>
      
        <div class=" ml-16">
          <div class="grid justify-items-center">
            {#if !isOpen}

            <div
              class="group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1"
              on:click={handleButtonClick} on:keypress={handleButtonClick} id="menu-button" aria-expanded="true" aria-haspopup="true"
            >
              <span
                class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              ></span>

              <span class="relative block border border-current bg-white px-8 py-3">
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
              <div
              class="group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1"
              on:click={handleButtonClick} on:keypress={handleButtonClick} id="menu-button" aria-expanded="true" aria-haspopup="true"
            >
              <span
                class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:translate-y-0.5 group-hover:-translate-x-0.5"
              ></span>

              <span class="relative block border border-current bg-white px-8 py-3">
                <img class="mr-1" alt="setting" src="{base}/media/settings.svg" />
  
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
                    clip-rule="evenodd" />
                  </svg>
              </span>
            </div>

              <div class="absolute z-0 md:ml-[672px] 
              w-50 h-42 origin-center bg-white-0 
              shadow-lg ring-1 ring-black ring-opacity-5 
              focus:outline-none border-x-4 border-navy-1"
               role="menu" aria-orientation="vertical" 
              aria-labelledby="menu-button" tabindex="-1"
              
              >
                  <div class="py-1" role="none" use:clickOutside on:click_outside={handleClickOutside}>
                    <div class="p-2 border-1 shadow-white-2 shadow text-left">
                      <a href="{base}/profile" class="group text-gray-700 flex px-4 py-2 text-sm 
                      transition duration-100" 
                      role="menuitem" tabindex="-1" id="menu-item-0">
                          <img class="mr-2 group-hover:text-yellow-0" src="{base}/media/user.svg" alt="user icon">
                          <p class="self-center group-hover:text-yellow-0">{$t('View')}</p>
                      </a>
                      <a href="{base}/profile/edit" class="flex text-gray-700 px-4 py-2 text-sm 
                      transition duration-100 group" 
                      role="menuitem" tabindex="-1" id="menu-item-0">
                      <!-- EDIT ICON -->
                        <img class="mr-2 group-hover:text-yellow-0 stroke-current" src="{base}/media/user-edit.svg" alt="user edit icon">
                        <p class="self-center group-hover:text-yellow-0">{$t('Edit')}</p>
                      </a>
                    </div>
                    <div class="p-2">
                      <a on:click={ensureDeactivate} on:keypress={ensureDeactivate} class="cursor-pointer 
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
        
      <div>
        <div class="flex">
          <h3 class="text-base font-semibold leading-7 text-transparent">{$t('Applicant Information')} 
            <p class="mt-1 max-w-2xl text-sm leading-6 text-transparent">{$t('Personal details and application.')} </p>
            </h3>
        </div>
      </div>
     
        
  
  </div>
</div>

{#if isDeactivate}
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <!--
        Background backdrop, show/hide based on modal state.
    
        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <!--
            Modal panel, show/hide based on modal state.
    
            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
          <div class="relative transform overflow-hidden rounded-lg bg-white 
          text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center 
                justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-6 w-6 text-red-600" fill="none" 
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" 
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 class="text-base font-semibold leading-6 text-gray-900" 
                  id="modal-title">
                  {$t('Deactivate account')} 
                </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                        {$t('Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.')} 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" on:click={authHandlers.deactivate} 
              class="inline-flex w-full justify-center rounded-md 
              bg-red-600 px-3 py-2 text-sm font-semibold text-white 
              shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                {$t('Deactivate')} 
                </button>
              <button type="button" on:click={ensureDeactivate} 
              class="mt-3 inline-flex w-full justify-center rounded-md 
              bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm 
              ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                {$t('Cancel')} 
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}