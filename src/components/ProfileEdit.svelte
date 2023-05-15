<script lang="ts">

  import { onMount, setContext } from 'svelte';
  import { getUserProfile, updateUserProfile} from '../routes/profile/user';
  import type { User } from 'firebase/auth';
  import { auth , db} from "../lib/firebase/firebase";
  import {authHandlers, authStore } from "../store/store";
  import { base } from '$app/paths';
  import { clickOutside } from '../services/clickOutside';

  let profileValue = {
      name:'',
      email:'',
      phone:'',
      country:'',
      description:'',
      messages: [],
  };
  // setContext('profile', profile);
  onMount(() => {
    console.log("updating profile...")  
    console.log("authStore in prfile.svelte before everything",$authStore.data);
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
        let Ready_profile = await getUserProfile(user);
        if (user) {
          if (!$authStore.data.name && !$authStore.data.email) {
          // Restore profileValue from user profile data
          profileValue.name = Ready_profile.name;
          profileValue.email = Ready_profile.email;
          profileValue.phone = Ready_profile.phone;
          profileValue.country = Ready_profile.country;
          profileValue.description = Ready_profile.description;
          profileValue.messages = Ready_profile.messages;
        } else {
          // Use the values from authStore
          profileValue.name = $authStore.data.name;
          profileValue.email = $authStore.data.email;
          profileValue.phone = $authStore.data.phone;
          profileValue.country = $authStore.data.country;
          profileValue.description = $authStore.data.description;
          profileValue.messages = $authStore.data.messages;
        }

        updateUserProfile(
          user,
          profileValue.name,
          profileValue.email,
          profileValue.phone,
          profileValue.country,
          profileValue.description,
          profileValue.messages
        );
      } else {
        console.log("no user in Profile.svelte");
      }
    })
    return unsubscribe
  })


  async function handleSubmit(event) {
    event.preventDefault();
    const user = auth.currentUser;
    console.log("authStore in prfile.svelte before handling",$authStore.data);
    try {
      await updateUserProfile(
        user,
        profileValue.name,
        profileValue.email,
        profileValue.phone,
        profileValue.country,
        profileValue.description,
        profileValue.messages
      ).then(() => {
        console.log("Profile updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating profile:", error.message);
      });
      // Redirect the user to their profile page
      // window.location.href = `${base}/`;
      // window.location.href = `${base}/profile/`;
    } catch (error) {
      console.error(error.message);
    }
    console.log("authStore in prfile.svelte after handling",$authStore.data);
  }
 
  let isOpen = false

  function handleButtonClick(){
    isOpen = !isOpen
  }

  function handleClickOutside() {
    isOpen = false;
  }  

</script>

<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="px-4 sm:px-0 items-center justify-between">
      <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
          </h3>
          
      <div class="flex items-center justify-between">
          
          <div class=" inline-block text-left">
              {#if !isOpen}
              <div>
                <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" on:click={handleButtonClick} id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Options
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              {:else}
              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
                -->
              <div class="absolute right-8 z-0 mt-0 
              w-56 origin-top-right rounded-md bg-white 
              shadow-lg ring-1 ring-black ring-opacity-5 
              focus:outline-none  " role="menu" aria-orientation="vertical" 
              aria-labelledby="menu-button" tabindex="-1"
              >
                  <div class="py-1" role="none" use:clickOutside on:click_outside={handleClickOutside}>
                    <a href="{base}/profile/" class="text-gray-700 block px-4 py-2 text-sm hover:text-yellow-0" role="menuitem" tabindex="-1" id="menu-item-0">View</a>
                    <a href='{base}/login' on:click={authHandlers.deactivate} class="text-gray-700 block px-4 py-2 text-sm hover:text-yellow-0" role="menuitem" tabindex="-1" id="menu-item-1">Deactivate</a>
                  </div>
                </div>
                {/if}
          </div>            
      </div>
    </div>
  </div>
    <!-- <form class="mx-auto mt-16 max-w-xl sm:mt-20" on:submit|preventDefault={startMath}> -->
      <form class="mx-auto mt-16 max-w-xl sm:mt-20" on:submit|preventDefault={handleSubmit}>
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
          <div class="mt-2.5">
            <input type="text" bind:value={profileValue.name} required id="name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-2.5">
            <input type="email" bind:value={profileValue.email} required id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
          <div class="relative mt-2.5">
            <input type="tel" bind:value={profileValue.phone} id="phone" required autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label class="block font-bold">Country</label>
          <select class="w-full p-2 border rounded" id="country" bind:value={profileValue.country} required>
            <option value="">-- Select Country --</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <!-- Add more countries as needed -->
          </select>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Short description about you</label>
          <div class="mt-2.5">
            <textarea bind:value={profileValue.description} id="description" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div> 
        </div>
      </div>
      <div class="mt-10">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
      </div>
    </form>
  </div>


<style>


</style>