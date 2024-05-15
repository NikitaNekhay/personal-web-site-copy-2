<script lang="ts">
  import { onMount } from "svelte";
  import {
    getUserProfile,
    updateUserProfile,
  } from "../../../routes/profile/user";

  import { auth } from "../../../lib/firebase/firebase";

  import { base } from "$app/paths";

  import ProfileOptions from "./ProfileOptions.svelte";
  import { t } from "svelte-i18n";


  import { Errors, type UserDataType } from "../../../shared/types";
  import CommonPopUp from "../../Shared/CommonPopUp.svelte";

  import type { User } from "firebase/auth";
  import SubmitButton from "../../Shared/SubmitButton.svelte";
    import { validateCity, validateEmail, validateFullName, validatePhoneNumber } from "../../../services/help";

  // Assuming you have a list of countries and their codes
  export let countries;

  let showDropdown = false;
  let isErrorInput: string[] = [];
  let isLoading = false;
  let submitClicked = false;
  let isChanged = false;
  let msgT: String = "Your changes have been saved.";
  let msg: String = "Your changes have been saved.";
  let smmsg: String = "Changes saved!";
  let smmsgE: String = "Error while editing profile!";
  let smmsgT: String = "Changes saved!";
  let isError: boolean = false;
  let href = `${base}/profile`;

  let profileValue: UserDataType;
  let isthereadmin = false;
  let userCopy: User | null;

  onMount(() => {
    try {
      ////console.log("updating profile...")

      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        try {
          if (user) {
            userCopy = user;

            let Ready_profile: UserDataType = await getUserProfile(user);
            ////console.log("what we got from db getUserProfile:",Ready_profile);
            profileValue = Ready_profile;
            ////console.log("profileValue - what we got after assgingin:",profileValue);
            msg = msgT;
            smmsg = smmsgT;
            isError = false;
          } else {
            ////console.log("no user in Profile.svelte");
          }
        } catch (error) {
          console.error("error while fetching profile", error);
          throw error;
        }
      });
      return unsubscribe;
    } catch (err) {
      isError = true;
      smmsg = smmsgE;
      if (typeof err === "string") {
        msg = err;
      } else if (err.message !== undefined) {
        msg = err.message;
      } else {
        msg = Errors.FetchProfile;
      }
      isChanged = true;
    }
  });

  function handleFormValidation() {
    var isBadReturn: boolean = false;
    // Validate all fields
    //console.log(profileValue.name)
    const isFullNameValid = validateFullName(profileValue.name);
    const isPhoneNumberValid = validatePhoneNumber(
      profileValue.phone,
      profileValue.country,
      countries
    );
    const isEmailValid = validateEmail(profileValue.email);
    const isCityValid = validateCity(
      profileValue.city,
      profileValue.country,
      countries,
    );

    // If any validation fails, set an error message and return false
    if (!isFullNameValid) {
      isErrorInput.push("name");
      msg = Errors.PurchaseFormName;
      isBadReturn = true;
    }
    if (!isPhoneNumberValid) {
      isErrorInput.push("phone");
      msg = Errors.PurchaseFormPhone;
      isBadReturn = true;
    }
    if (!isEmailValid) {
      isErrorInput.push("email");
      msg = Errors.PurchaseFormEmail;
      isBadReturn = true;
    }
    if (!isCityValid) {
      isErrorInput.push("city");
      msg = Errors.PurchaseFormCity;
      isBadReturn = true;
    }

    if (isBadReturn) {
      //console.log(isErrorInput);
      return false;
    }

    // If everything's valid, clear error messages and return true
    isErrorInput.length = 0;
    msg = msgT;
    return true;
  }

  async function handleSubmit() {
    try {
      isErrorInput.length = 0;

      if (handleFormValidation()) {
        submitClicked = true;
        try {
        } catch (error) {
          throw error;
        }
      } else {
        if (msg !== msgT) {
          throw msg;
        } else {
          throw Errors.PurchaseFormAttention;
        }
      }

      if (profileValue.name === "" || !profileValue.name) {
        msg = Errors.EmptyInput;
        isChanged = true;
        smmsg = smmsgE;
        isError = true;
        throw Errors.EmptyInput;
      }

      if (userCopy) {
        try {
          await updateUserProfile(
            userCopy,
            profileValue.name,
            profileValue.email,
            profileValue.phone,
            profileValue.country,
            profileValue.city,
            profileValue.description,
            profileValue.messages,
            profileValue.cart,
          )
            .then(() => {
              ////console.log("Profile updated successfully.");
              isChanged = true;
              msg = msgT;
              smmsg = smmsgT;
              isError = false;
            })
            .catch((error) => {
              console.error("Error updating profile:", error.message);
              throw Errors.EditProfile;
            });
        } catch (error) {
          if (typeof err === "string") {
            msg = err;
          } else if (err.message !== undefined) {
            msg = err.message;
          } else {
            msg = msgT;
          }
          console.error("error while updating profile", error);
          msg = Errors.EditProfile;
          smmsg = smmsgE;
          isError = true;
          isChanged = true;
          throw Errors.EditProfile;
        } finally {
          setTimeout(() => {
            // Calculate and set the new scroll position based on the previous percentage
            submitClicked = false;
          }, 2500);
        }
      } else {
        ////console.log("user dont exists so we cant handle submit")
        setTimeout(() => {
          // Calculate and set the new scroll position based on the previous percentage
          submitClicked = false;
        }, 2500);
        msg = Errors.EditProfile;
        smmsg = smmsgE;
        isError = true;
        isChanged = true;
        throw Errors.EditProfile;
      }

      // ////console.log("authStore in prfile.svelte after handling",$authStore.data);
    } catch (error) {
      //console.log(error)
      msg = Errors.EditProfile;
      smmsg = smmsgE;
      isError = true;
      isChanged = true;
      throw Errors.EditProfile;
    }
  }

  function selectCountry(country) {
    profileValue.country = country.code;
    showDropdown = false;
    // Additional logic to handle the selected country
  }

  // Function to handle country selection
  function handleCountrySelect(event) {
    profileValue.country = event.target.value;
    // Additional logic to handle the selected country
  }

  // Function to get the flag URL
  function getFlagUrl(countryCode: string) {
    return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`;
  }
</script>

<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  {#if isChanged}
    <CommonPopUp
      bind:isChanged
      {href}
      {isError}
      isPreviev={true}
      message={msg}
      smallMessage={smmsg}
    />
  {/if}

  <ProfileOptions />

  <div class="place mt-40 flex place-content-center">
    <form class="w-full max-w-lg flex flex-col justify-center items-center">
      <div class=" mb-6 flex justify-center">
        <h1 class="font-abril text-4xl text-blue-0">{$t("EDIT PROFILE")}</h1>
      </div>

      {#if profileValue}
        <div class="-mx-3 mb-6 flex flex-wrap w-full">
          <div class="w-full px-3">
            <label
              class="relative block overflow-hidden rounded-md
            border border-gray-200 bg-white-1
            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
            focus-within:ring-white-2 {(isErrorInput.includes('name') ||
            isErrorInput.includes('fullName'))
            ? 'ring-red-1 ring-1'
            : ''}"
              for="name"
            >
              <input
                class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                type="text"
                bind:value={profileValue.name}
                required
                placeholder="Name"
                id="name"
                autocomplete="name"
              />
              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
              bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
              peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
              >
              {$t("Name, Surname, Middle name (if exists)")}
              </span>
            </label>
          </div>
        </div>
        <div class="-mx-3 mb-4 flex flex-wrap w-full">
          <div class="h-full w-full px-3">
            <label
              class="relative block overflow-hidden rounded-md
            border border-gray-200 bg-white-1
            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
            focus-within:ring-white-2"
              for="description"
            >
              <input
                class="peer h-8 w-full border-none bg-transparent
              bg-white-1 p-0 placeholder-transparent
              focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                bind:value={profileValue.description}
                id="description"
                placeholder="Description"
              />
              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
              bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
              peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
              >
                {$t("Short description about you")}
              </span>
            </label>
            <p class="mt-3 text-xs italic text-gray-600">
              {$t("Don't hesitate write as much as you want")}
            </p>
          </div>
        </div>

        <div class="purchase-item flex mb-6 flex-wrap w-full">
          <div class="w-full px-3">
            <label
              class="relative block overflow-hidden rounded-md
              border border-gray-200 bg-white-1
              px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
              focus-within:ring-white-2 {isChanged &&
              (isErrorInput.includes('phone') ||
                isErrorInput.includes(''))
                ? 'ring-red-1 ring-1'
                : ''}"
              for="phone-number"
            >
              <input
                class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
                focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                type="tel"
                bind:value={profileValue.phone}
                placeholder="tel"
                id="phone"
                required
                autocomplete="tel"
              />
              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
                  bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                  peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
              >
                {$t("Phone number")}
              </span>
            </label>
          </div>
        </div>

        <!-- Country Selector with Flags -->
        <div class="purchase-item relative">
          <!-- Custom Dropdown Trigger -->
          <div class=" mb-6 w-full">
            <div class="w-full px-3">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={showDropdown.toString()}
                class="w-full relative block overflow-hidden rounded-md
                border border-gray-200 bg-white-1
                px-3 py-1.5 shadow-sm focus-within:border-white-2 focus-within:ring-1
                focus-within:ring-white-2"
                on:click={() => (showDropdown = !showDropdown)}
              >
                <img
                  src={profileValue.country
                    ? getFlagUrl(profileValue.country)
                    : ""}
                  alt={profileValue.country}
                  class="inline-block w-5 h-3 ml-0 {profileValue.country
                    ? 'opacity-100'
                    : 'opacity-0'}"
                />
                {profileValue.country
                  ? countries.find((c) => c.code === profileValue.country).name
                  : "Select a country"}

                <svg
                  class="ml-[50%] w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path></svg
                >
              </button>
            </div>
          </div>

          <!-- Custom Dropdown Options -->
          {#if showDropdown}
            <ul
              class="absolute z-10 w-full bg-white border border-gray-300 -mt-2 max-h-60 overflow-y-auto rounded-lg"
              role="listbox"
              aria-labelledby="country"
            >
              {#each countries as country}
                <li
                  role="option"
                  aria-selected={profileValue.country === country.code}
                >
                  <button
                    type="button"
                    class="flex items-center p-2 hover:bg-gray-100 cursor-pointer w-full text-left"
                    on:click={() => selectCountry(country)}
                  >
                    <img
                      src={getFlagUrl(country.code)}
                      alt={country.name}
                      class="inline-block mr-2 w-5 h-3"
                    />
                    {country.name}
                  </button>
                </li>
              {/each}
            </ul>
          {/if}
        </div>

        <!-- City Input -->
        <div class="purchase-item flex mb-6 flex-wrap w-full">
          <div class="w-full px-3">
            <label
              for="city"
              class="relative block overflow-hidden rounded-md
          border border-gray-200 bg-white-1
          px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
          focus-within:ring-white-2 {isChanged &&
              (isErrorInput.includes('city') || isErrorInput.includes(''))
                ? 'ring-red-1 ring-1'
                : ''}"
            >
              <input
                type="text"
                id="city"
                bind:value={profileValue.city}
                class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                placeholder="Enter your city"
                required
              />
              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
              >
                {$t("City")}
              </span>
            </label>
          </div>
        </div>

        <SubmitButton
          bind:submitClicked
          bind:isChanged
          passedfunction={handleSubmit}
          text={"Submit"}
        />
      {/if}
    </form>
  </div>
</div>
