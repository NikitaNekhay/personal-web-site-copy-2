<script lang="ts">
    import { t } from "svelte-i18n";
    import { authHandlers } from "../../store/store";


    export let isDeactivate:boolean;

    function changeDeactivate(){
        isDeactivate = !isDeactivate;
    }
</script>

<div
role="alert"
class="fixed rounded-xl border border-gray-100 bg-white p-4 shadow-xl mt-6 mb-16 top-[10%] 
left-1/4 right-1/4  sm:left-10 sm:right-10 md:left-10 md:right-10"
>
<div class="flex items-start gap-4">
<span>
    <svg class="h-6 w-6 text-red-0" fill="none" 
    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" 
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
</span>



  <div class="flex-1">
    <strong class="block font-medium text-gray-900"> {$t('Deactivate account')}  </strong>

    <p class="mt-1 text-sm text-gray-700">
        {$t('Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.')} 
    </p>
    <div class="mt-4 flex gap-2">
      <button
        on:click={()=>{authHandlers.deactivate()}} 
        class="inline-flex items-center gap-2 rounded-lg bg-red-0 px-4 py-2 text-white hover:bg-yellow-0 transition-colors duration-200"
      >
        <span class="text-sm"> {$t('Deactivate')}  </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </button>

    </div>
  </div>

  <button  class="text-gray-500 transition hover:text-gray-600"
    on:click={()=>{changeDeactivate()}}
  >
    <span class="sr-only">{$t('Dismiss popup')}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</div>
</div>
