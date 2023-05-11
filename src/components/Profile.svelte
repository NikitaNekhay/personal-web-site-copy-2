<script lang="ts">

  import { onMount, setContext } from 'svelte';
  import { getUserProfile, updateUserProfile} from '../routes/profile/user';
  import type { User } from 'firebase/auth';
  import { auth , db} from "../lib/firebase/firebase";
  import {authStore, profile } from "../store/store";
  import { base } from '$app/paths';
  import { stop_immediate_propagation } from 'svelte/internal';

  let profileValue = {
      name:'',
      email:'',
      phone:'',
      country:'',
      description:'',
  };
  // setContext('profile', profile);
  onMount(() => {
  console.log("editing profile...")
  
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
        let Ready_profile = await getUserProfile(user);
        if (user) {
          profileValue.name = Ready_profile.name || '';
          profileValue.email = Ready_profile.email;
          profileValue.phone = Ready_profile.phone || '';
          profileValue.country = Ready_profile.country || '';
          profileValue.description = Ready_profile.description || '';

          const readyProfile = await getUserProfile(user);
          profile.set(readyProfile);
          // 
        }
  })
    return unsubscribe
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const user = auth.currentUser;

    try {
      await updateUserProfile(
        user,
        profileValue.name,
        profileValue.email,
        profileValue.phone,
        profileValue.country,
        profileValue.description
      ).then(() => {
        console.log("Profile updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating profile:", error.message);
      });

      // Update authStore to reflect changes in the user profile
      authStore.update((store) => {
        return {
          user: null,
          loading: true,
          data: {
            ...store.data,
            name: profileValue.name,
            email: profileValue.email,
            phone: profileValue.phone,
            country: profileValue.country,
            description: profileValue.description,
          },
        };
      });

      // Redirect the user to their profile page
      window.location.href = `${base}/dashboard/`;
    } catch (error) {
      console.error(error.message);
    }

  }
 
  
</script>

<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">EDIT PROFILE</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Please fulfill this short form.</p>
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
            <input type="tel" bind:value={profileValue.phone} id="phone" required autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
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
        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
            <button type="button" class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
              <span class="sr-only">Agree to policies</span>
              <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
              <span aria-hidden="true" class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
            </button>
          </div>
          <form class="text-sm leading-6 text-gray-600" id="switch-1-label">
            By selecting this, you agree to our privacy policy.
          </form>
        </div>
      </div>
      <div class="mt-10">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
      </div>
    </form>
  </div>


<style>


</style>