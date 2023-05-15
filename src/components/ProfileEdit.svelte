<script lang="ts">

  import { onMount, setContext } from 'svelte';
  import { getUserProfile, updateUserProfile} from '../routes/profile/user';
  import type { User } from 'firebase/auth';
  import { auth , db} from "../lib/firebase/firebase";
  import {authHandlers, authStore } from "../store/store";
  import { base } from '$app/paths';
  import { clickOutside } from '../services/clickOutside';
  import ProfileOptions from './ProfileOptions.svelte';
  import { addMessages, locale, t } from 'svelte-i18n';
  import ru from '../services/ru.json';

  // Загружаем переводы для русского языка
  addMessages('ru', ru);
  // Устанавливаем язык по умолчанию
  locale.set('ru')

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

  let isView = false

</script>

<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">

    <ProfileOptions/>

    <!-- <form class="mx-auto mt-16 max-w-xl sm:mt-20" on:submit|preventDefault={startMath}> -->
      <form class="mx-auto mt-16 max-w-xl sm:mt-20" on:submit|preventDefault={handleSubmit}>
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">{$t('User name')} </label>
          <div class="mt-2.5">
            <input type="text" bind:value={profileValue.name} required id="name" 
            autocomplete="given-name" class="block w-full rounded-md 
            border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset 
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">{$t('Email')} </label>
          <div class="mt-2.5">
            <input type="email" bind:value={profileValue.email} required id="email" 
            autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2
             text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
             focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">{$t('Phone number')} </label>
          <div class="relative mt-2.5">
            <input type="tel" bind:value={profileValue.phone} id="phone" 
            required autocomplete="tel" class="block w-full rounded-md 
            border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset 
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <label class="block font-bold">{$t('Country')} </label>
          <select class="w-full p-2 border rounded" id="country" bind:value={profileValue.country} required>
            <option value="">-- {$t('Select Country')}  --</option>
            <option value="Russia">Russia</option>
            <option value="Europe">Asia</option>
            <option value="Europe">Europe</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Australia">Africa</option>
            <option value="Australia">Australia</option>
            <option value="Antarctic">Antarctic</option>
            <!-- Add more countries as needed -->
          </select>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">
            {$t('Short description about you')} 
          </label>
          <div class="mt-2.5">
            <textarea bind:value={profileValue.description} id="description" 
            rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 
            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div> 
        </div>
      </div>
      <div class="mt-10">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 
        px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm 
        hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {$t('Submit')} 
        </button>
      </div>
    </form>
  </div>
