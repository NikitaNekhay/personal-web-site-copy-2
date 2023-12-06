<script lang="ts">
  import { onMount } from "svelte";
  import { t } from "svelte-i18n";
  import {
    getUserProfiles,
    handleDelete,
    updateUserProfile,
  } from "../../../routes/profile/user";
  import { base } from "$app/paths";
    import LoadingSpinner from "../../Shared/LoadingSpinner.svelte";
    import UserList from "./UserList.svelte";
    import { SortMethod, type UserDataType } from "../../../shared/types";
    import { connectStorageEmulator } from "firebase/storage";

  let sortMethod:SortMethod = SortMethod.Default;
  let idsearched:string;
  let userProfiles:UserDataType[] = [];
  let latestProfiles:UserDataType[] = [];
  let isLoading = true;
  let isEmpty = false;
  let passComponent = false;
  let l_userProfiles = 0; 


	// Somewhat clean but weird hack to force rerender on event.
	// Await immediately resolved promise to react to value change.
	const forceUpdate = async (_) => {};


  onMount(async() => {
    try {
      // Fetch blog posts from the database
       console.log('Fetching blog posts from the database...')
      userProfiles = await getUserProfiles();
      //console.log(userProfiles)
      l_userProfiles = userProfiles.length;
      const interval = setInterval(() => {
        
        if (isLoading && userProfiles.length === 0) {
          isEmpty = true;
          isLoading = false;
        } else {
          isLoading = false;
        }
        passComponent = true;
      }, 2000);
      //l_userProfiles = userProfiles.length;
      return () => clearInterval(interval);
    } catch (error) {
      console.error("fetched the user from db got error:", error);
    }

    //console.log(userProfiles)
  });



  function updateScroll() {
    const previousScrollPercentage =
      (window.pageYOffset || document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    const newScrollPosition =
      previousScrollPercentage *
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    window.scrollTo(0, newScrollPosition);
    window.location.href = `${base}/dashboard/#`;
    console.log("positioned to start");
  }

  function nextClick(lastElement) {
    try {
      if (userProfiles[userProfiles.indexOf(lastElement) + 1] !== undefined) {
        // console.log(userProfiles[userProfiles.indexOf(lastElement)+1])
        nextPairs(
          userProfiles[userProfiles.indexOf(lastElement) + 1],
          userProfiles.indexOf(lastElement) + 1
        );
      }
    } catch (error) {
      console.error("error while nextclicking..", error);
    }
  }

  function backClick(lastElement) {
    try {
      //console.log(latestProfiles[0])
      if (userProfiles[userProfiles.indexOf(lastElement) - 1] !== undefined) {
        //console.log(userProfiles[userProfiles.indexOf(lastElement)-1])
        prevPairs(
          userProfiles[userProfiles.indexOf(lastElement) - 1],
          userProfiles.indexOf(lastElement) - 1
        );
      }
    } catch (error) {
      console.error("error while backclicking..", error);
    }
  }

  function prevPairs(lastElement, lastElement_index) {
    if (lastElement_index >= 3) {
      latestProfiles.length = 0;
      var i = 0;
      var j = lastElement_index;
      for (j; i < 4; j--) {
        latestProfiles.unshift(userProfiles[j]);
        i++;
      }
      return 1;
    }
  }

  function nextPairs(lastElement, lastElement_index) {
    let borderNumber = 4;
    // console.log(lastElement_index)
      //console.log(latestProfiles)
    if (latestProfiles.length >= 4) {
      latestProfiles.length = 0;
    }

    if (
      userProfiles.length - (lastElement_index % 4) !== 0 &&
      userProfiles.length - lastElement_index <= 4
    ) {
      borderNumber = userProfiles.length - lastElement_index;
    } else if (userProfiles.length > 4) {
      borderNumber = borderNumber - (lastElement_index % 4);
    } else {
      if (lastElement_index !== 0) borderNumber = lastElement_index % 4;
      else borderNumber = userProfiles.length;
    }
    //  console.log(borderNumber)
    var i = 0;
    for (var j = lastElement_index; i < borderNumber; j++) {
      i = 0;
      if (j % 4 === 0 && j !== lastElement_index) {
        break;
      } else {
        if (userProfiles[j] === undefined) {
          break;
        }
        latestProfiles.push(userProfiles[j]);
        //  console.log(latestProfiles.length)
        i++;
      }
    }
    return 1;
  }

  function handleSort(event){
    //event.preventDefault();
    console.log("sort method changes to", sortMethod)
    switch (sortMethod) {
      case 0:{

        break;
      }
      case 1:{
        userProfiles=userProfiles.sort((user1,user2)=>{
            return (user1.name).localeCompare(user2.name);
        } );
        latestProfiles = userProfiles.slice(0,4)
        break;
      }
      case 2:{
        userProfiles=userProfiles.sort((user1,user2)=>{
            return (user1.email).localeCompare(user2.email);
        } );
        latestProfiles = userProfiles.slice(0,4)
        break;
      }
      case 3:{
        userProfiles=userProfiles.sort((user1,user2)=>{
              return ((user1.cart).length - (user2.cart).length)
        } );
        latestProfiles = userProfiles.slice(0,4)
        break;
      }
      case 4:{
        userProfiles=userProfiles.sort((user1,user2)=>{
          return((user2.cart).length - (user1.cart).length)
        } );
        latestProfiles = userProfiles.slice(0,4)
        break;
      }
      default:{
        console.log("incorrect sort value")
        break;
      }
        
    }

    
  }

  function handleIdSearch(event){
    //console.log(idsearched)
    try {
      const found:UserDataType|undefined = userProfiles.find((obj) => {
        return obj.id === idsearched;
      });
      if(found){
        latestProfiles.length=0;
        latestProfiles.push(found);
        console.log("user was found")
      } else {
        latestProfiles.length=0;
        console.log("user wasn't founded")
      }

    } catch (error) {
      console.error("error while finding user",error)
    }

  }
</script>
<div class=" w-full rounded-md bg-white-1 p-8 font-anonymous sm:mt-0 lg:mt-7">
  <div class=" flex items-center justify-between pb-6">
    <div>
      <h2 class="font-semibold text-gray-600">{$t("Table of users")}</h2>
      <span class="text-xs">{$t("All users")}</span>
    </div>
    
    <div class="flex justify-between">
      <div>
        <div class="mt-2 mr-5">
          <select
            id="sortMethod"
            bind:value={sortMethod}
            class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            placeholder={$t('sort by')}
            on:change={(event)=>{handleSort(event)}}
          >
            <option value={SortMethod.Default}>{$t('sort by')}</option>
            <option value={SortMethod.NameAlpha}>{$t('Name: Alphabetically')}  </option>
            <option value={SortMethod.EmailAlpha}>{$t('Email: Alphabatically')}</option>
            <option value={SortMethod.CartLow}>{$t('Cart: LOW TO HIGH')}</option>
            <option value={SortMethod.CartHigh}>{$t('Cart: HIGH TO LOW')}</option>

          </select>
        </div>
      </div>
      
      <div class="flex items-center bg-white-2 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          class="ml-1 block bg-gray-50 outline-none"
          type="text"
          bind:value ={idsearched}
          placeholder="search..."
        />
      </div>
      <div class="ml-5 space-x-8 lg:ml-5">
        
        <!-- <button class="bg-orange-0 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button> -->
        <button
          class="mt-2 cursor-pointer rounded-md bg-orange-0 px-4 py-2 font-semibold tracking-wide text-white"
          on:click={(event)=>{handleIdSearch(event)}}
          >{$t("Search by ID")}
        </button>
      </div>
    </div>
  </div>
  <div>
    <div class="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
      <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                {$t("User name")}
              </th>
              <th
                class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                {$t("Role")}
              </th>
              <th
                class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                {$t("Email")}
              </th>
              <!-- <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-white-2  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                   {$t('Created at')} 
                  </th> -->
              <th
                class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                {$t("Products in cart")}
              </th>
              <th
                class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                {$t("Id")}
              </th>
              <th
                class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                {$t("Actions")}
              </th>
            </tr>
          </thead>
          <tbody>
            {#if userProfiles.length != 0 && userProfiles.length != undefined}
              {#if userProfiles.length}
                <p class=" text-transparent">1</p>
                {@const a = nextPairs(userProfiles[0], 0)}
              {/if}
              {#if isLoading} 
              <div class="w-full">
                <LoadingSpinner />
              </div>
              
          {:else if isEmpty}
          <div class="grid h-screen place-content-center bg-white px-4">
            <h1
              class="font-abril text-3xl uppercase tracking-widest text-black-1"
            >
              {$t("NO USERS | FOUND")}
            </h1>
          </div>
          {:else}
          {#await forceUpdate(latestProfiles) then _}
            <UserList latestProfiles={latestProfiles} userProfiles={userProfiles} on:change={()=>{latestProfiles}}/>
            {/await}
              {/if}
            {/if}
          </tbody>
        </table>
        <div
          class="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5"
        >
          <span class="xs:text-sm text-xs text-gray-900">
            {$t("Showing")}
            {userProfiles.indexOf(latestProfiles[0]) + 1}
            {$t("to")}
            {userProfiles.indexOf(latestProfiles[latestProfiles.length - 1]) +
              1}
            {$t("of")}
            {userProfiles.length}
            {$t("users")}
          </span>
          <div class="xs:mt-0 mt-2 inline-flex">
            <button
              class="rounded-l bg-indigo-600 px-4 py-2
                                  text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500"
              on:click={backClick(latestProfiles[0])}
            >
              {$t("BACK")}
            </button>
            &nbsp; &nbsp;
            <button
              class="rounded-r bg-indigo-600 px-4 py-2
                                  text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500"
              on:click={nextClick(latestProfiles[latestProfiles.length - 1])}
            >
              {$t("NEXT")}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
