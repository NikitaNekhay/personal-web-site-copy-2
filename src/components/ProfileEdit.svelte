<script lang="ts">

  import { onMount, setContext } from 'svelte';
  import { getUserProfile, updateUserProfile} from '../routes/profile/user';
  import type { User } from 'firebase/auth';
  import { auth , db} from "../lib/firebase/firebase";
  import {authHandlers, authStore, currentLanguage } from "../store/store";
  import { base } from '$app/paths';
  import { clickOutside } from '../services/clickOutside';
  import ProfileOptions from './ProfileOptions.svelte';
  import { addMessages, locale, t } from 'svelte-i18n';
  import ru from '../services/ru.json';
  import ProfileEditDone from './ProfileEditDone.svelte';
  import en from '../services/en.json';

  // Загружаем переводы для русского языка
  addMessages('en', en);
  // Устанавливаем язык по умолчанию
  locale.set('en')

  let loading = false

  let profileValue = {
      name:'',
      email:'',
      phone:'',
      country:'',
      description:'',
      messages: [],
  };

  // let tempAuthStore = {
  //   user: null || User,
  //   loading: true,
  //   data: {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     country: "",
  //     description: "",
  //     messages:[],
  //   },
  // }

  // let tempAuthStore = {}

  // setContext('profile', profile);
  onMount(() => {

    console.log("updating profile...")  
    loading = false
    console.log("authStore in prfile.svelte before everything",$authStore.data);

//   const unsubscribe = auth.onAuthStateChanged(async (user) => {
//     if (user) 
//       tempAuthStore = await getUserProfile(user);
//       updateUserProfile(
//         tempAuthStore.user,
//         tempAuthStore.data.name,
//         tempAuthStore.data.email,
//         tempAuthStore.data.phone,
//         tempAuthStore.data.country,
//         tempAuthStore.data.description,
//         tempAuthStore.data.messages
//         );
//  })


    const unsubscribe = auth.onAuthStateChanged(async (user) => {
        let Ready_profile = await getUserProfile(user);
        if (user) {
          console.log($authStore.data)
          if (!$authStore.data) {
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

        console.log("after onMount",loading)

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
        // tempAuthStore.user,
        // tempAuthStore.data.name,
        // tempAuthStore.data.email,
        // tempAuthStore.data.phone,
        // tempAuthStore.data.country,
        // tempAuthStore.data.description,
        // tempAuthStore.data.messages
      ).then(() => {
        console.log("Profile updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating profile:", error.message);
      });
      
      loading = true
      console.log("after submit",loading)
      //window.location.href = `${base}/profile/edit/`
    } catch (error) {
      console.error(error);
    }
    console.log("authStore in prfile.svelte after handling",$authStore.data);
  }

  let isView = false

</script>

<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">

  {#if loading}
    <ProfileEditDone />
  {/if}


    <ProfileOptions/>

    <div class="flex mt-40 place-content-center place">
  
      <form class="w-full max-w-lg ">
        <div class=" flex justify-center mb-6">
          <h1 class="text-blue-0 text-4xl font-abril">{$t('EDIT PROFILE')}</h1>
        </div>
    
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block relative overflow-hidden bg-white-1 
            rounded-md border border-gray-200
            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
            focus-within:ring-white-2" for="first-name">
            <input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent 
            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
            type="text" bind:value={ profileValue.name} required id="name" 
            autocomplete="given-name">
            <span
              class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
              text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
              peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
            {$t('User name')}
            </span>
          </label>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full px-3 h-full">
            <label class="block relative overflow-hidden bg-white-1 
            rounded-md border border-gray-200
            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
            focus-within:ring-white-2" for="description">
              <input class="peer bg-white-1 h-8 w-full border-none 
              bg-transparent p-0 placeholder-transparent 
              focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
              bind:value={ profileValue.description} id="description" placeholder="Description">
              <span
              class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
              text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
              peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
              {$t('Short description about you')} 
              </span>
            </label>
            <p class="text-gray-600 text-xs italic mt-3">
              {$t("Don't hesitate write as much as you want")} 
            </p>
          </div>
        </div>
    
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block relative overflow-hidden bg-white-1 
            rounded-md border border-gray-200
            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
            focus-within:ring-white-2" for="email">
              <input class="peer bg-white-1 h-8 w-full border-none 
              bg-transparent p-0 placeholder-transparent 
              focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
              type="email" bind:value={ profileValue.email} required id="email" 
              autocomplete="email" placeholder="email@web.net">
              <span
              class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
              text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
              peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
              {$t('Email')}
              </span>
            </label>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
            <div class=" w-1/2 px-3">
              <label class="block relative overflow-hidden bg-white-1 
              rounded-md border border-gray-200
              px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
              focus-within:ring-white-2" for="phone-number">
                <input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent 
                focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
                type="tel" bind:value={ profileValue.phone} id="phone" 
                required autocomplete="tel">
                <span
                  class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
                  text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
                  peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
                  {$t('Phone number')}
              </span>
              </label>
            </div>
            <div class="w-1/2 px-3">
              <label class="block relative overflow-hidden bg-white-1 
              rounded-md border border-gray-200
              px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
              focus-within:ring-white-2" for="first-name">
              <select class=" peer bg-white-1 h-[34px] w-full border-none bg-transparent p-0 placeholder-transparent 
              focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              id="country" bind:value={ profileValue.country} required>
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
              <span
                class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
                text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
                peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
              {$t('Country')}
              </span>
            </label>
          </div>
        </div>


          
     

        
    
        <button
          class="flex items-center mx-[136px] w-1/2 
          rounded-md justify-center group relative 
           overflow-hidden border border-orange-0
          px-8 py-3 focus:outline-none focus:ring"
          type="button" on:click={handleSubmit}
        >
          <span
            class="absolute inset-x-0 bottom-0 h-[2px] 
            bg-orange-0 transition-all group-hover:h-full 
            group-active:bg-orange-0"
          ></span>
    
          <span
            class="relative text-sm font-medium 
            text-orange-0 transition-colors group-hover:text-white"
          >
          {$t('Submit')} 
          </span>
        </button>
      </form>
    </div>
    

    




  </div>
