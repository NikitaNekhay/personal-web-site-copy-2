<script lang="ts">
  import { onMount } from "svelte";
  import {
    getUserProfile,
    getUserProfiles,
    updateUserProfile,
  } from "../../../routes/profile/user";
  import { auth } from "../../../lib/firebase/firebase";
  import { authHandlers, authStore, currentLanguage,isAdmin } from "../../../store/store";
  import { base } from "$app/paths";
  import { clickOutside } from "../../../services/clickOutside";
  import ProfileOptions from "./ProfileOptions.svelte";
  import { addMessages, locale, t } from "svelte-i18n";
  import ru from "../../../services/ru.json";
  import en from "../../../services/en.json";
  import LoadingSpinner from "../../Shared/LoadingSpinner.svelte";
    import type { UserDataType } from "../../../shared/types";
    import { fade } from "svelte/transition";

  let isLoading = true; // Initialize the loading state

  // let profileValue = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   country: "",
  //   description: "",
  //   messages: [],
  // };
  let profileValue:UserDataType;
  let isthereadmin = false
  

  onMount(() => {
    //  //console.log("updating profile...")
    //  //console.log("isadmin in profile in mounting...",$isAdmin)
     isthereadmin = $isAdmin.value
    //  //console.log("authStore in prfile.svelte before everything",$authStore.data);
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if(user){
          let Ready_profile:UserDataType = await getUserProfile(user);
          // //console.log("what we got from db getUserProfile:",Ready_profile);
          if(Ready_profile){
            profileValue = Ready_profile;

            isLoading = false;
          } else {
            //location.reload();
            window.location.href = `${base}/`;
            return;
          }
          // //console.log("Restoring profileValue from user profile data",profileValue);
 
        } else {
          //console.log("no user in Profile.svelte");
          return
            
        }
      } catch (error) {
        console.error("error while updating profile", error);
        return;
      }
    });
    return unsubscribe;
  });

  let isView = true;
</script>

<div class="isolate bg-white px-10 pt-36">
  <div>
    <ProfileOptions />
  </div>
  {#if isLoading || !profileValue}
    <LoadingSpinner />
  {:else}
    <div>
      <div class="mt-6 border-t border-gray-100">
        <div class="ml-8">
          <dl class="divide-y divide-gray-100">
            <div class="grid grid-cols-4 gap-4 px-4 py-6 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                {$t("User name")}
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {profileValue.name}
              </dd>
            </div>
            
            <div class="grid grid-cols-4 gap-4 px-4 py-6 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                {$t("Email address")}
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {profileValue.email}
              </dd>
            </div>
            <div class="grid grid-cols-4 gap-4 px-4 py-6 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                {$t("Country")}
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {profileValue.country}
              </dd>
            </div>
            <div class="grid grid-cols-4 gap-4 px-4 py-6 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                {$t("Number phone")}
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {profileValue.phone}
              </dd>
            </div>
            <div class="grid grid-cols-4 gap-4 px-4 py-6 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                {$t("About")}
              </dt>
              <dd
                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              >
                {profileValue.description}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  {/if}

  <div />
</div>
