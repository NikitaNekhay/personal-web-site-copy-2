<script lang="ts">
  import { onMount } from "svelte";
  import { t } from "svelte-i18n";
  import {
    getUserProfiles,
    handleDelete,
    updateUserProfile,
  } from "../../routes/profile/user";
  import { base } from "$app/paths";
    import LoadingSpinner from "../Shared/LoadingSpinner.svelte";

  let userProfiles = [];
  let latestProfiles = [];
  let isLoading = true;
  let isEmpty = false;
  let passComponent = false;
  let l_userProfiles = 0; 
  onMount(async() => {
    try {
      // Fetch blog posts from the database
      // console.log('Fetching blog posts from the database...')
      userProfiles = await getUserProfiles();
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

  async function handleSubmit(curentUser) {
    // event.preventDefault();
    try {
      await updateUserProfile(
        curentUser,
        userProfiles[userProfiles.indexOf(curentUser)].id,
        userProfiles[userProfiles.indexOf(curentUser)].name,
        userProfiles[userProfiles.indexOf(curentUser)].email,
        userProfiles[userProfiles.indexOf(curentUser)].phone,
        userProfiles[userProfiles.indexOf(curentUser)].country,
        userProfiles[userProfiles.indexOf(curentUser)].description,
        userProfiles[userProfiles.indexOf(curentUser)].messages,
        userProfiles[userProfiles.indexOf(curentUser)].cart
      )
        .then(() => {
          console.log("Profile updated successfully.");
        })
        .catch((error) => {
          console.error("Error updating profile:", error.message);
        });

      //window.location.href = `${base}/profile/edit/`
    } catch (error) {
      console.error(error);
    }
  }

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
    //  console.log(latestProfiles)
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
</script>

<div class=" w-full rounded-md bg-white-1 p-8 font-anonymous">
  <div class=" flex items-center justify-between pb-6">
    <div>
      <h2 class="font-semibold text-gray-600">{$t("Table of users")}</h2>
      <span class="text-xs">{$t("All users")}</span>
    </div>
    <div class="flex items-center justify-between">
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
          name=""
          id=""
          placeholder="search..."
        />
      </div>
      <div class="ml-10 space-x-8 lg:ml-40">
        <!-- <button class="bg-orange-0 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button> -->
        <button
          class="cursor-pointer rounded-md bg-orange-0 px-4 py-2 font-semibold tracking-wide text-white"
          >{$t("Create")}
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
                {$t("Liked products")}
              </th>
              <th
                class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
              >
                {$t("Status")}
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
              {#each latestProfiles as user, i}
                <tr>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <div class="mt-4 flex">
                      <div
                        class="place -mx-3 mb-6 flex flex-wrap place-content-center"
                      >
                        <div class="w-full px-3">
                          <label
                            class="relative block overflow-hidden
                            rounded-md border border-transparent
                            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
                            focus-within:ring-white-2"
                            for="first-name"
                          >
                            <input
                              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent
                            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                              type="text"
                              bind:value={user.name}
                              required
                              id="name"
                              autocomplete="given-name"
                            />
                            <span
                              class=" whitespace-no-wrap absolute start-3 top-3 -translate-y-1/2
                                cursor-text text-xs text-gray-900 transition-all peer-placeholder-shown:top-1/2
                                peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                            >
                              {$t("Enter the name")}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div></td
                  >
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p class="whitespace-no-wrap text-gray-900">
                      {#if user.email === "ktofreesapiens@gmail.com" || user.email === "vaper20041337@gmail.com"}
                        {$t("Admin")}
                      {:else}
                        {$t("User")}
                      {/if}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <div class="mt-4 flex">
                      <div
                        class="place -mx-3 mb-6 flex flex-wrap place-content-center"
                      >
                        <div class="w-full px-3">
                          <label
                            class="relative block overflow-hidden
                            rounded-md border border-transparent
                            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
                            focus-within:ring-white-2"
                            for="first-name"
                          >
                            <input
                              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent
                            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                              type="text"
                              bind:value={user.email}
                              required
                              id="email"
                              autocomplete="given-name"
                            />
                            <span
                              class=" whitespace-no-wrap absolute start-3 top-3 -translate-y-1/2
                                cursor-text text-xs text-gray-900 transition-all peer-placeholder-shown:top-1/2
                                peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                            >
                              {$t("Enter email")}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div></td
                  >
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p class="whitespace-no-wrap text-gray-900">
                      {#if user.messages.length == 0}
                        0
                      {:else}
                        {user.messages.length}
                      {/if}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <span
                      class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
                    >
                      <span
                        aria-hidden
                        class="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span class="relative">{user.id}</span>
                    </span>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <div class="flex justify-items-center gap-4">
                      <div class="">
                        <div
                          class="group relative inline-block text-sm font-medium text-black-1
                          hover:cursor-pointer focus:outline-none focus:ring active:text-black-1"
                          on:click={() => handleSubmit(user)}
                          on:keypress={() => handleSubmit(user)}
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                        >
                          <span
                            class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform
                            group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />

                          <span
                            class="relative block border border-current bg-white px-8 py-3"
                          >
                            <img
                              class="mr-1"
                              alt="setting"
                              src="{base}/media/edit.svg"
                            />
                          </span>
                        </div>
                      </div>
                      <div>
                        <div
                          class="group relative inline-block text-sm font-medium text-black-1
                            hover:cursor-pointer focus:outline-none focus:ring active:text-black-1"
                          on:click={() => {
                            handleDelete(user.id);
                            console.log("clicked delete");
                            window.location.href = `${base}/dashboard/#`;
                            location.reload()
                          }}
                          on:keypress={() => {
                            handleDelete(user.id);
                            console.log("clicked delete");
                            window.location.href = `${base}/dashboard/#`;
                            location.reload()
                          }}
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                        >
                          <span
                            class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform
                            group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />

                          <span
                            class="relative block border border-current bg-white px-8 py-3"
                          >
                            <img
                              class="mr-1"
                              alt="setting"
                              src="{base}/media/trash.svg"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              {/each}

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
