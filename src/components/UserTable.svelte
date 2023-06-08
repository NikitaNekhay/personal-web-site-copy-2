<script lang="ts">
      import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';
  import { getUserProfiles, handleDelete } from '../routes/profile/user';
  import { base } from '$app/paths';
  import { authHandlers } from '../store/store';
  import { collection, deleteDoc, doc } from 'firebase/firestore';
  import { db } from '$lib/firebase/firebase';

  let userProfiles = [];
  let l_userProfiles = 0
  let latestProfiles = [];
  let l_latestProfiles = 0
  var nextPage_flag = false
  onMount(async () => {
  
    // Fetch blog posts from the database
    console.log('Fetching blog posts from the database...')
    userProfiles = await getUserProfiles();
    l_userProfiles = userProfiles.length
    //console.log(userProfiles)
    // if(latestProfiles.length==0)
    //   nextPairs(userProfiles[0],0)

   

  });

  function handleEdit(id:string) {
  // Navigate to the edit page of the selected blog post
  window.location.href = `${base}/profile/${id}/edit`;
  }

  let isDeactivate = false

    function ensureDeactivate(){
        console.log(isDeactivate)
        isDeactivate = !isDeactivate
    }


  function nextClick(lastElement){
    try {
      if(userProfiles[userProfiles.indexOf(lastElement)+1]!==undefined){
       // console.log(userProfiles[userProfiles.indexOf(lastElement)+1])
        nextPairs(userProfiles[userProfiles.indexOf(lastElement)+1],userProfiles.indexOf(lastElement)+1)
      }
    } catch (error) {
      console.log("error while nextclicking..",error)
    }
   
  }
  
  function backClick(lastElement){
    try {
      //console.log(latestProfiles[0])
      if(userProfiles[userProfiles.indexOf(lastElement)-1]!==undefined){
  
        //console.log(userProfiles[userProfiles.indexOf(lastElement)-1])
        prevPairs(userProfiles[userProfiles.indexOf(lastElement)-1],userProfiles.indexOf(lastElement)-1)
      }
    } catch (error) {
      console.log("error while backclicking..",error)
    }

  }

  function prevPairs(lastElement, lastElement_index) {
  
    
    if(lastElement_index>=3){
      latestProfiles.length = 0
      var i = 0
      var j =lastElement_index
      for(j;i<4;j--){
        
        latestProfiles.unshift(userProfiles[j]);
        i++
      }
      return 1
    }


}

  function nextPairs(lastElement,lastElement_index){
    let borderNumber = 4
    //console.log("border",borderNumber)
    //console.log(latestProfiles)
    if(latestProfiles.length>=4){
      latestProfiles.length = 0
    }
      if(userProfiles.length>4){
        borderNumber = borderNumber - (lastElement_index%4)
      //  console.log("border",borderNumber)
      } else {
        if(lastElement_index!==0)
          borderNumber = lastElement_index%4
        else
          borderNumber = userProfiles.length
          
      }
      //console.log("border",borderNumber)
      var i = 0
      for(var j = lastElement_index; i<=borderNumber;j++){
        i=0
        if(j%4===0 && j!==lastElement_index){
          break
        } else {
          l_latestProfiles = latestProfiles.push(userProfiles[j])
          i++
        }
      }
      return 1
  }

</script>

<div class=" bg-white-1 p-8 rounded-md  w-full font-anonymous">
    <div class=" flex items-center justify-between pb-6">
      <div>
        <h2 class="text-gray-600 font-semibold">{$t('Table of users')}</h2>
        <span class="text-xs">{$t('All users')}</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex bg-white-2  items-center p-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd" />
          </svg>
          <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search...">
            </div>
          <div class="lg:ml-40 ml-10 space-x-8">
            <!-- <button class="bg-orange-0 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button> -->
            <button class="bg-orange-0 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">{$t('Create')} </button>
          </div>
        </div>
      </div>
      <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200  bg-white-2  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {$t('User name')}  
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-white-2  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {$t('Role')}  
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-white-2  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {$t('Email')}  
                  </th>
                  <!-- <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-white-2  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                   {$t('Created at')} 
                  </th> -->
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-white-2  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {$t('Liked products')}
                  </th>
                  <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-white-2  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {$t('Status')}   
                </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-white-2  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {$t('Actions')}   
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                
                {#if userProfiles.length!= 0 && userProfiles.length != undefined}
                  {#if userProfiles.length}
                    {@const a = nextPairs(userProfiles[0],0)}
                  {/if}

                  {#each latestProfiles as user,i}
              
   
                  <tr>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">

                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {user.name}
                            </p>
                          </div>
                        </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {#if user.email==="ktofreesapiens@gmail.com"}
                        {$t('Admin')}  
                        {:else}
                        {$t('User')}  
                        {/if}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">

                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {user.email}
                            </p>
                          </div>
                        </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {#if user.messages.length==0}
                          0
                        {:else}
                          {user.messages.length}
                        {/if}
                        
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                      <span class="relative">{user.id}</span>
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      
                      <div class="flex justify-items-center gap-4">
                        <div class="">
                          <div
                          class="group relative inline-block text-sm font-medium text-black-1 
                          focus:outline-none focus:ring active:text-black-1 hover:cursor-pointer"
                          on:click={() => handleEdit(user.id)} on:keypress={() => handleEdit(user.id)} 
                          id="menu-button" aria-expanded="true" aria-haspopup="true"
                          >
                            <span
                            class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform 
                            group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            ></span>
      
                            <span class="relative block border border-current bg-white px-8 py-3">
                              <img class="mr-1" alt="setting" src="{base}/media/edit.svg" />
                            </span>
                          </div>  
                        </div>
                        <div>
                          <div
                            class="group relative inline-block text-sm font-medium text-black-1 
                            focus:outline-none focus:ring active:text-black-1 hover:cursor-pointer"
                            on:click={()=>handleDelete(user.id)} on:keypress={()=>handleDelete(user.id)} 
                            id="menu-button" aria-expanded="true" aria-haspopup="true"
                          >
                            <span
                            class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform 
                            group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            ></span>
      
                            <span class="relative block border border-current bg-white px-8 py-3">
                              <img class="mr-1" alt="setting" src="{base}/media/trash.svg" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    
                  </tr>

                  {/each}
                {:else}
                <div class="grid h-screen px-4 bg-white place-content-center">
                    <h1 class="tracking-widest text-black-1 uppercase font-abril text-3xl">
                        {$t('NO USERS | FOUND')}
                    </h1>
                </div>
                {/if}
               
              </tbody>
            </table>
            <div
              class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <span class="text-xs xs:text-sm text-gray-900">
                             {$t('Showing')} {userProfiles.indexOf(latestProfiles[0])+1} {$t('to')} {userProfiles.indexOf(latestProfiles[latestProfiles.length-1])+1} {$t('of')} {l_userProfiles} {$t('users')}
                          </span>
              <div class="inline-flex mt-2 xs:mt-0">
                <button
                                  class="text-sm text-indigo-50 transition duration-150 
                                  hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                                  on:click={backClick(latestProfiles[0])}>
                                  {$t('BACK')}
                              </button>
                &nbsp; &nbsp;
                <button
                                  class="text-sm text-indigo-50 transition duration-150 
                                  hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                                  on:click={nextClick(latestProfiles[latestProfiles.length-1])}>
                                  {$t('NEXT')}
                              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
	</div>

   