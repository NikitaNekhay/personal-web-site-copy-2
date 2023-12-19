<script lang="ts">
    import { onMount, setContext } from "svelte";
    import { getUserProfile, updateUserProfile } from "../../../routes/profile/user";
    import type { User } from "firebase/auth";
    import { auth, db } from "../../../lib/firebase/firebase";
    import { authHandlers, authStore, currentLanguage } from "../../../store/store";
    import { base } from "$app/paths";
    import { clickOutside } from "../../../services/clickOutside";
    import ProfileOptions from "./ProfileOptions.svelte";
    import { addMessages, locale, t } from "svelte-i18n";
    import ru from "../../../services/ru.json";
    import en from "../../../services/en.json";
    import LoadingButton from "../../Shared/LoadingButton.svelte";
      import { Errors, type UserDataType } from "../../../shared/types";
    import CommonPopUp from "../../Shared/CommonPopUp.svelte";
    import Error from "../../../routes/+error.svelte";
    import SubmitButton from "../../Shared/SubmitButton.svelte";
  
    let submitClicked:boolean = false;
    let isthereadmin:boolean = false;

    let isChanged = false;
    let msgT:String ="Your changes have been saved.";
    let msg:String ="Your changes have been saved.";
    let smmsg:String = "Changes saved!";
    let smmsgE:String = "Error while editing profile!";
    let smmsgT:String = "Changes saved!";
    let isError:boolean = false;
    let href = `${base}/profile`;


    let profileValue:UserDataType;
    const profileCredentials = {
        email:"",
        password:"",
    };
    let rpassword = "";
    let cpassword = "";

    let userCopy:User;
    
  
    onMount(() => {
       console.log("updating profile credentials...")
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        try {
          if(user){
            userCopy=user;
            console.log(userCopy)
            profileValue = await getUserProfile(user);
            profileCredentials.email = profileValue.email;
            console.log("what we got from db getUserProfile:",profileValue);
          
          } else {
            throw Errors.FetchUser;
          }
        } catch (err) {
          console.error( err);
          if(typeof(err)==="string"){
                msg = err;
            } else if(err.message !== undefined){
                msg = err.message;
            } else {
                msg = Errors.FetchUser
            }
            isChanged= true
            isError = true;
            smmsg = smmsgE;
        }
      });
      return unsubscribe;
    });
  
    async function handleSubmit() {
      //event.preventDefault();
      submitClicked = true;

      if(userCopy && profileValue){
        console.log("user exists so we can handle submit")
        
        try {
            // YOU CAN'T CHANGE YOUR EMAIL!
          // await updateUserProfile(
          //   userCopy,
          //   profileValue.name,
          //   profileValue.email,
          //   profileValue.phone,
          //   profileValue.country,
          //   profileValue.description,
          //   profileValue.messages,
          //   profileValue.cart
          // )
          // .then(() => {
          //   console.log("Profile updated successfully.");
          // })
          // .catch((error) => {
          //   console.error(Errors.EditProfile, error);
          // });


          if(verifyPassword()){

              await authHandlers.changeCredentials(userCopy,profileValue.email, profileCredentials.password);
            
          } else {
            throw Errors.VerifyPass;
          }
          msg= msgT;
          smmsg = smmsgT;
          isChanged = true;
          isError = false;

      } catch (err) {
        console.error("error while updating profile",err);
        if(typeof(err)==="string"){
                msg = err;
            } else if(err.message !== undefined){
                msg = err.message;
            } else {
                msg = Errors.EditProfile
            }
            isChanged= true
            isError = true;
            smmsg = smmsgE;
            throw msg;
      } finally {
        setTimeout(() => {
            // Calculate and set the new scroll position based on the previous percentage
            submitClicked = false;
        }, 2500);
      }
      } else {
        console.log("user dont exists so we cant handle submit")
        setTimeout(() => {
            // Calculate and set the new scroll position based on the previous percentage
            submitClicked = false;
        }, 2500);
        isChanged= true
        isError = true;
        smmsg = smmsgE;
        msg = Errors.FetchUser
        throw Errors.FetchUser;

        
      }
     
    }
  
    function verifyPassword(){
            if(!(rpassword === profileCredentials.password)){
                throw Errors.RepeatPass
            } else if (rpassword.length < 6){
                throw Errors.SmallPass
            }
            return 1;
    }

  </script>
  
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    {#if isChanged }
    <CommonPopUp bind:isChanged href={href} isError={isError} isPreviev={true} message={msg} smallMessage={smmsg} />
    {/if}
  
    <ProfileOptions />
  
    <div class="place mt-40 flex place-content-center">
      <form class="w-full max-w-lg  flex flex-col justify-center items-center">



        <div class=" mb-6 flex justify-center text-center">
          <h1 class="font-abril text-4xl text-blue-0">{$t("EDIT CREDENTIALS")}</h1>
        </div>

        {#if profileValue && userCopy}
         
        <div class="-mx-3 mb-6 flex flex-wrap w-full">
          <div class="w-full px-3">
            <label
              class="relative block overflow-hidden rounded-md
              border border-gray-200 bg-white-1
              px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
              focus-within:ring-white-2"
              for="email"
            >
              <input
                class="peer h-8 w-full border-none bg-transparent
                bg-white-1 p-0 placeholder-transparent
                focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                type="email"
                bind:value={profileCredentials.email}
                required
                id="email"
                autocomplete="email"
                placeholder="email@web.net"
              />
              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
                bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
                {$t("Email")}
              </span>
            </label>
            <p class="mt-3 text-xs italic text-gray-600">
                {$t("You can't change your email!")}
              </p>
          </div>
          
        </div>

        <div class="-mx-3 mb-6 flex flex-wrap w-full">
            <div class="w-full px-3">
              <label
                class="relative block overflow-hidden rounded-md
                border border-gray-200 bg-white-1
                px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
                focus-within:ring-white-2"
                for="first-name"
              >
                <input
                  class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
                focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    bind:value={profileCredentials.password}
                    id="password"
                    placeholder={$t("New password")}
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                />
                <span
                  class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
                  bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                  peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                >
                {$t("New password")}
                </span>
              </label>
            </div>
          </div>

          <div class="-mx-3 mb-6 flex flex-wrap w-full">
            <div class="w-full px-3">
              <label
                class="relative block overflow-hidden rounded-md
                border border-gray-200 bg-white-1
                px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
                focus-within:ring-white-2"
                for="first-name"
              >
              <input
              class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                bind:value={rpassword}
                id="rpassword"
                placeholder={$t("Repeat Password")}
                name="rpassword"
                type="password"
                autocomplete="current-password"
                required
            />
            <span
              class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
              bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
              peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
            >
            {$t("Repeat Password")}
            </span>
              </label>
            </div>
          </div>
          {/if}
      
          <div>
            <SubmitButton bind:submitClicked bind:isChanged passedfunction={handleSubmit} text={"Submit"}/>
          </div>
          
            <div class="text-center flex justify-center mt-4">
                <p>{$t('Temporary the change of email is not available.')} <br>
                   {$t("After changing password you will be logged out!")}</p>
            </div>
 

      </form>
    </div>
  </div>
  