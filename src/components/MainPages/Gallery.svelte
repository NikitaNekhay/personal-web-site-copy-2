<script lang="ts">
  // import states
  import { onMount } from "svelte";
  import { getBlogPosts } from "../../routes/posts/post";
  import { base } from "$app/paths";
  import { authStore, blogPost } from "../../store/store";
  import { addMessages, locale, t } from "svelte-i18n";
  import { currentLanguagee } from "../../store/store_";
  import ru from "../../services/ru.json";
  import en from "../../services/en.json";
  import NoPosts from "../Shared/NoPosts.svelte";
  import LoadingSpinner from "../Shared/LoadingSpinner.svelte";
    import { Language, type PostType } from "../../shared/types";
    import { updateUserProfile } from "../../routes/profile/user";

  if ($currentLanguagee !== undefined) {
    const currentValue = $currentLanguagee;
    // Switch the language value
    if (currentValue === Language.English) {
      addMessages(Language.English, en);
      locale.set(Language.English);
    } else {
      addMessages(Language.Russian, ru);
      locale.set(Language.Russian);
    }
  } else {
    addMessages(Language.English, en);
    locale.set(Language.English);
  }

  // use Firestore's onSnapshot method to listen for changes
  // in the blogs collection and update the page in
  // real-time whenever a new blog is added, edited, or deleted.

  let isLoading = true;
  let isEmpty = false;
  let passComponent = false;
  let blogPosts:PostType[];
  let tempAuthStore;

  onMount(async () => {
    isLoading = true;
    isEmpty = false;
    passComponent = false;

    const unsubscribe = authStore.subscribe((authStore)=>{
      // get user info for cart
      tempAuthStore = authStore;
    })

    // Fetch blog posts from the database
    //console.log('Fetching blog posts from the database...')
    blogPosts = await getBlogPosts();
    if (blogPosts.length === 0) {
      isEmpty = true;
    }
    isLoading = false;
    //console.log(blogPosts)
    if(!passComponent){
          const interval = setInterval(() => {
     // console.log("gall");
      passComponent = true;
    },1000);
    return () => clearInterval(interval);
    }

    
    
  });

  function handleClick(id: string) {
    // Navigate to the detailed page of the selected blog post
    console.log("handle click for ",id);
    $blogPost.id = id;
    //console.log($blogPost.id);
    window.location.href = `${base}/posts/${id}`;
  }

  async function  handleCart(tempId: string){
    if(tempAuthStore){

      const clickedItem:PostType = blogPosts.find((obj) => {
        return obj.id === tempId;
      });
      //console.log("handleCart - clicked item is:",clickedItem)
      //console.log("tempp autho",tempAuthStore.data.cart)
      const tempArr:PostType[] = tempAuthStore.data.cart ?? [];

      console.log("temparr is",tempArr)
      tempArr.push(clickedItem);
      tempAuthStore.cart = tempArr;
      console.log("handleClick - pushed value for cart:",tempArr)
      await updateUserProfile(
        tempAuthStore.user,
        tempAuthStore.data.name,
        tempAuthStore.data.email,
        tempAuthStore.data.phone,
        tempAuthStore.data.country,
        tempAuthStore.data.description,
        tempAuthStore.data.messages,
        tempAuthStore.cart )
      
    } else {
      console.log("cant handle cart because temoauthstore is empty")
    }

  }

</script>

<div class="bg-white">
  <div class=" lg: sm:px-6 sm:py-12 lg:px-8">
    {#if isLoading}
      <LoadingSpinner />
    {:else if isEmpty}
      <NoPosts />
    {:else}
      <div
        class="grid grid-cols-3 gap-x-48 gap-y-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
      {#key blogPosts}
        {#each blogPosts as post}
          <div class="mt-44 flex">
            <div>
              <div
                on:click={() => handleClick(post.id)}
                on:keypress={() => handleClick(post.id)}
                class="min-h-80 overflow-hidden
                  bg-gray-200 hover:cursor-pointer
                  hover:opacity-80"
                aria-expanded="true"
                aria-haspopup="true"
                role="button"
                tabindex="0"
              >
                <img
                  src={post.images[0]}
                  alt="Blog Post"
                  class="object-center"
                />
              </div>
              <div class="mt-2 flex justify-between">
                <div class=" flex-row">
                  <div>
                    <h3 class=" text-sm text-gray-700">
                      <p class="">
                        {post.author}
                      </p>
                    </h3>
                  </div>
                  <div>
                    <h3 class=" text-lg font-bold text-gray-900 sm:text-xl">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div
                  class="mx-6 flex max-w-sm sm:place-items-start md:place-items-start"
                >
                  <h2 class="  text-gray-700">
                    {post.description.substring(
                      0,
                      post.description.indexOf(`.`)
                    )}
                  </h2>
                </div>

                <div
                  class="grid-rows grid max-h-fit max-w-fit items-center justify-items-end"
                >
                  <div>
                    <p
                      class="font-anonymous text-3xl font-medium text-gray-900"
                    >
                      {post.price}BYN
                    </p>
                  </div>
                  <div>
                    <!-- <button 
                      class="hover:text-yellow-0"
                      on:click={() => handleCart(post.id)}
                      on:keypress
                    >
                    {$t('add to bucket')}  
                    </button> -->
                    <div >
                      <div
                        class=" group relative inline-block text-sm font-medium text-black-1
                    hover:cursor-pointer focus:outline-none focus:ring active:text-black-1"
                        on:click={() => handleCart(post.id)}
                        on:keypress={() => handleCart(post.id)}
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        role="button"
                        tabindex="0"
                      >
                        <span
                          class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform
                      group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
  
                        <span
                          class="relative block border border-current bg-white px-8 py-3 duration-500 active:bg-gray-400"
                        >
                          <img
                            class="mr-1"
                            alt="setting"
                            src="{base}/media/shopping-cart.svg"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
        {/key}
      </div>
    {/if}
  </div>
</div>

