<!-- <form class="mx-auto mt-16 max-w-xl sm:mt-20" on:submit|preventDefault={startMath}> -->
      <form class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <!-- <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">{$t('User name')} </label>
          <div class="mt-2.5">
            <input type="text" bind:value={ profileValue.name} required id="name" 
            autocomplete="given-name" class="block w-full rounded-md 
            border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset 
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div> -->
        <!-- <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">{$t('Email')} </label>
          <div class="mt-2.5">
            <input type="email" bind:value={ profileValue.email} required id="email" 
            autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2
             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
             focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div> -->
        <!-- <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">{$t('Phone number')} </label>
          <div class="relative mt-2.5">
            <input type="tel" bind:value={ profileValue.phone} id="phone" 
            required autocomplete="tel" class="block w-full rounded-md 
            border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset 
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div> -->
        <div>
          <label class="block font-bold">{$t('Country')} </label>
          <select class="w-full p-2 border rounded" id="country" bind:value={ profileValue.country} required>
            <option value="">-- {$t('Select Country')}  --</option>
            <option value="Russia">Russia</option>
            <option value="Europe">Asia</option>
            <option value="Europe">Europe</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Australia">Africa</option>
            <option value="Australia">Australia</option>
            <option value="Antarctic">Antarctic</option>
          
          </select>
        </div>
        <!-- <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">
            {$t('Short description about you')} 
          </label>
          <div class="mt-2.5">
            <textarea bind:value={ profileValue.description} id="description" 
            rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 
            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div> 
        </div> -->
      </div>
      <div class="mt-10">

        <button on:click={handleSubmit} type="button" class="flex w-full 
        justify-center rounded-md bg-navy-1 px-3 py-1.5 text-sm 
        font-semibold leading-6 text-white shadow-sm  transition 
        duration-100 hover:bg-red-2 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-indigo-600">
          {$t('Submit')} 
        </button>
      </div>
    </form>