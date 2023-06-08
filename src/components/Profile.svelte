<script lang="ts">
  import { onMount } from 'svelte';
  import { getUserProfile, getUserProfiles, updateUserProfile} from '../routes/profile/user';
  import { auth } from "../lib/firebase/firebase";
  import {authHandlers, authStore, currentLanguage } from "../store/store";
  import { base } from '$app/paths';
  import { clickOutside } from '../services/clickOutside';
  import ProfileOptions from './ProfileOptions.svelte';
  import { addMessages, locale, t } from 'svelte-i18n';
  import ru from '../services/ru.json';
  import en from '../services/en.json';

    let isLoading = true; // Initialize the loading state

  let profileValue = {
      name:'',
      email:'',
      phone:'',
      country:'',
      description:'',
      messages: [],
  };
 
  onMount(() => {


    
      console.log("updating profile...")  
      console.log("authStore in prfile.svelte before everything",$authStore.data);
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        try {
          let Ready_profile = await getUserProfile(user);
          console.log("what we got from db getUserProfile:",Ready_profile)
          if (user) {
              console.log("Restoring profileValue from user profile data");
              profileValue.name = Ready_profile.name ?? profileValue.name;
              profileValue.email = Ready_profile.email ?? profileValue.email;
              profileValue.phone = Ready_profile.phone ?? profileValue.phone;
              profileValue.country = Ready_profile.country ?? profileValue.country;
              profileValue.description = Ready_profile.description ?? profileValue.description;
              profileValue.messages = Ready_profile.messages ?? profileValue.messages;

            
          } else {
            console.log("no user in Profile.svelte");
          }
        } catch (error) {
          console.log("error while updating profile",error);
        }
        
        
      })
      return unsubscribe

      })

let isView = true

</script>

<div class="isolate bg-white px-10 pt-36">

  <div>
    <ProfileOptions/>
  </div>

  <div>
    <div class="mt-6 border-t border-gray-100">
      <div class="ml-8">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 grid grid-cols-4 gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">{$t('User name')} </dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileValue.name}</dd>
          </div>
          <div class="px-4 py-6 grid grid-cols-4 gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">{$t('Email address')} </dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileValue.email}</dd>
          </div>
          <div class="px-4 py-6 grid grid-cols-4 gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">{$t('Country')} </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileValue.country}</dd>
          </div>
          <div class="px-4 py-6 grid grid-cols-4 gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">{$t('Number phone')} </dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileValue.phone}</dd>
          </div>
          <div class="px-4 py-6 grid grid-cols-4 gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">{$t('About')} </dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileValue.description}</dd>
          </div>
        </dl>
      </div>
      
    </div>
  </div>
    
    
  <div>

  </div>
</div>