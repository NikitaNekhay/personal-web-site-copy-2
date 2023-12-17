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
    import { Errors, Language, type PostType } from "../../shared/types";
    import { updateUserProfile } from "../../routes/profile/user";
    import CartAdded from "../Shared/CartAdded.svelte";
    import { error } from "@sveltejs/kit";
    import { applyAction } from "$app/forms";
    import CommonPopUp from "../Shared/CommonPopUp.svelte";

  let isLoading:boolean = true;
  let isEmpty:boolean = false;
  let passComponent = false;
  let blogPosts:PostType[];
  let tempAuthStore:AuthStoreType;
  let isChangedCart:boolean = false;

  let isChanged:boolean = false;
  let msg:String ="";
  let smmsg:String = "Something went wrong while scrolling the shop."

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


  onMount(async () => {
    try {
      isLoading = true;
      isEmpty = false;
      passComponent = false;

      
      const unsubscribe = authStore.subscribe((authStore)=>{
        // get user info for cart
        tempAuthStore = authStore;
        console.log(tempAuthStore)
      })

      // Fetch blog posts from the database
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

    } catch (error) {
      
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
    try {
      if(tempAuthStore.user !== null && !(tempAuthStore.loading)){

        const clickedItem:PostType = blogPosts.find((obj) => {
          return obj.id === tempId;
        });
        //console.log("handleCart - clicked item is:",clickedItem)
        //console.log("tempp autho",tempAuthStore.data.cart)
        const tempArr:PostType[] = tempAuthStore.data.cart ?? [];

        
        tempArr.push(clickedItem);
        
        tempAuthStore.data.cart = tempArr;
        console.log("tempAuthStore is",tempAuthStore)
        //console.log("handleClick - pushed value for cart:",tempArr)
        await updateUserProfile(
          tempAuthStore.user,
          tempAuthStore.data.name,
          tempAuthStore.data.email,
          tempAuthStore.data.phone,
          tempAuthStore.data.country,
          tempAuthStore.data.description,
          tempAuthStore.data.messages,
          tempAuthStore.data.cart )
          isChangedCart = !isChangedCart;
        } else {
          throw Errors.NoUserToAddToCart;
        }
    } catch (err) {
      
      if(typeof(err)==="string"){
          msg = err;
      } else if(err.message !== undefined){
          msg = err.message;
      } else {
          msg = Errors.AddToCart
      }
      isChanged = true
    }


  }

</script>

<section class="bg-white">
  <div class="px-8 py-28  
  sm:py-28 md:py-28 xl:py-28 2xl:py-32 3xl:py-32
  sm:px-4 md:px-6 lg:px-11 xl:px-14 2xl:px-20"> 
    {#if isLoading}
      <LoadingSpinner />
    {:else if isEmpty}
      <NoPosts />
    {:else}
      {#if isChangedCart}
        <CartAdded bind:isChangedCart />
      {/if}
      {#if isChanged}
        <CommonPopUp bind:isChanged isError={true} isPreviev={false} message={msg} smallMessage={smmsg}  />
      {/if}
        <div
        class="grid grid-cols-3 
        sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
        gap-x-24  sm:gap-x-24 xl:gap-x-16 2xl:gap-x-20
        gap-y-6 xl:gap-y-20
        "
      >

      {#key blogPosts}
        {#each blogPosts as post}
          <div class="flex">
            <div>
              <div
                on:click={() => handleClick(post.id)}
                on:keypress={() => handleClick(post.id)}
                class="min-h-80 overflow-hidden
                object-cover
                  bg-gray-200 hover:cursor-pointer
                  hover:opacity-80 w-[100%]
                  transition duration-200 hover:scale-105
                  "
                aria-expanded="true"
                aria-haspopup="true"
                role="button"
                tabindex="0"
              >
                <img
                  src={post.images[0]}
                  alt="Blog Post"
                  class="object-center "
                  
                />
              </div>
              <div class="mt-2 flex sm:flex-col md:flex-col justify-between">
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
                  class=" sm:mx-6 md:mx-8 lg:mx-12 flex sm:flex-row sm:place-items-start md:place-items-start"
                >
                  <h2 class="  text-gray-700">
                    {post.description.substring(
                      0,
                      post.description.indexOf(`.`)
                    )}
                  </h2>
                </div>

                <div
                  class="grid-rows sm:grid-cols-2 sm:gap-x-[120px] md:gap-x-[120px] grid max-h-fit max-w-fit items-center justify-items-end sm:justify-items-start md:justify-items-start"
                >
                  <div class=" sm:grid-cols-1 sm:col-span-1 md:grid-cols-1 md:col-span-1">
                    <p
                      class="font-anonymous text-3xl font-medium text-gray-900"
                    >
                      {post.price}BYN
                    </p>
                  </div>
                  <div class="sm:grid-cols-1 sm:col-span-1 md:grid-cols-1 md:col-span-1">
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
</section>

