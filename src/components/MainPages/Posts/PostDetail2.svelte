<script lang="ts" src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer>
    import { base } from "$app/paths";
    import { t } from "svelte-i18n";
    import { handleCart } from "../../../routes/posts/post";
    import { Errors, type PostType, type Slide } from "../../../shared/types";
    import { authStore } from "../../../store/store";
    import CartAdded from "../../Shared/CartAdded.svelte";
import CommonPopUp from "../../Shared/CommonPopUp.svelte";
    import SubmitButton from "../../Shared/SubmitButton.svelte";
    import { writable } from 'svelte/store';
    import SquareButton from "../../Shared/SquareButton.svelte";

    export let post:PostType;
    let isChanged:boolean = false;
    let isChangedCart:boolean = false;
    let msg:String ="";
    let smmsg:String = "Something went wrong while fetching the data."
    let href:String = `${base}/shop`;
    let isError:boolean = true;
    const slides: Slide[] =[];
    if(post === undefined) {
        isChanged = true;
        msg = Errors.FetchPost;
    } else {
        post.images.forEach((image)=>{
            
            slides.push({"img":image})
        })
        preloadImages();
    }

    async function handleCartClicked(){
    try {
        console.log($authStore)
    await handleCart(post,$authStore);

    isChangedCart = !isChangedCart;
    } catch (err) {
      console.log("error in gallery")
    if(typeof(err)==="string"){
        msg = err;
    } else if(err.message !== undefined){
        msg = err.message;
    } else {
        msg = Errors.AddToCart
    }
    isChanged = true
    throw msg

    } 
  }

  let localCurrentIndex = 0; // Local variable to track the index
const currentIndex = writable(0);

let touchstartX = 0;
let touchendX = 0;

  // Preload images
  function preloadImages() {
    for (const slide of slides) {

    }
  }

  function handleSwipe(direction: 'left' | 'right'): void {
    if (direction === 'left') {
      localCurrentIndex = Math.max(0, localCurrentIndex - 1);
    } else {
      localCurrentIndex = Math.min(slides.length - 1, localCurrentIndex + 1);
    }

    currentIndex.set(localCurrentIndex);
  }

</script>


    <!-- <a
      href="mailto:{post.authorEmail}"
      class="transition duration-200 hover:text-blue-0"
      >{$t("SEND EMAIL TO AUTHOR")}
    </a> -->



    <!-- {#if $authStore.user}
    <Comment />
    {/if}
    {#key $triggerComments.value}
      <CommentList />
    {/key} -->

{#if isChanged}
<CommonPopUp bind:isChanged href={href} isError={isError} isPreviev={false} message={msg} smallMessage={smmsg}  />
{:else}
{#if isChangedCart}
      <CartAdded bind:isChangedCart />
{/if}

 <section class="w-screen h-auto]">
    <div class="
            mt-28 mx-12 sm:mt-20 md:mt-20 sm:mx-0 md:mx-0
            flex 
            sm:flex-col sm:justify-center sm:items-center sm:gap-y-4
            md:flex-col md:justify-center md:items-center md:gap-y-4
            
            ">
        <!-- LEFT SIDE FOR IMAGE -->
        <div class="w-[60%] sm:w-[80%] md:w-[80%] h-auto">
            <div class="w-full mx-auto shadow-lg max-w-md relative">
                {#if slides.length > 0}
                        <div class="overflow-hidden text-center select-none transition duration-300 transform ease relative">
                            <!-- Left clickable area for swiping left -->
                            <div 
                                class="absolute left-0 top-0 bottom-0 w-5/12 " 
                                on:click={() => handleSwipe('left')}>
                            </div>
        
                            <!-- Image -->
                            <img 
                                src={slides[$currentIndex].img} 
                                alt="" 
                                class="w-full mx-auto overflow-hidden bg-cover bg-center cursor-grab"
                                on:pointerdown={(e) => touchstartX = e.screenX}
                                on:pointerup={(e) => { touchendX = e.screenX; handleSwipe('right'); }}>
                            
                            <!-- Right clickable area for swiping right -->
                            <div 
                                class="absolute right-0 top-0 bottom-0 w-5/12 cursor-pointer" 
                                on:click={() => handleSwipe('right')}>
                            </div>
                        </div>
                    {/if}
            </div>
              <!-- Navigation Dots -->
              <div class="flex justify-center mt-4">
                {#each slides as _, index}
                <span 
                    class="w-4 h-1 mx-1"
                    class:bg-yellow-0={$currentIndex === index }
                    class:bg-red-0={$currentIndex !== index}
                    class:w-[8px]={$currentIndex !== index}>
                </span>
            {/each}
              </div>
            </div>
          

        <!-- RIGHT SIDE FOR ABOUT -->
        <div class=" m-12 flex flex-col items-center place-content-center
        text-black-1 uppercase font-anonymous text-2xl
             gap-y-12 w-[80%]
            ">
            <!-- TITLE + SMALL DESCRIPTION -->
            <div class="w-[100%]">
                <header>
                    <h1 class="font-abril text-center hyphens-auto text-6xl text-black-0 " lang="de">{$t(post.title)}</h1>
                </header>
            </div>
            <div class="flex flex-col items-center place-content-center 
                        
                        gap-y-6 sm:gap-y-6 md:gap-y-6 sm:mx-4 md:mx-6">
                <!-- COLOR AVAILABLE -->
                <div>
                    Colors:
                </div>
                <!-- SIZE'S INFO -->
                <div class=" flex flex-col gap-y-4 text-center">
                    <!-- SIZE GUIDE -->
                    <div>
                        SIZE GUIDE
                    </div>
                    <!-- LIST OF SIZES -->
                    <div>
                        LIST OF SIZES:
                    </div>
                </div>

                <!-- PURCHASE BUTTONS -->
                <div class="flex flex-row gap-x-4">
                    <!-- PRICE -->
                    <div class="flex self-center">
                        <p>{$t("Price")} : {post.price} BYN</p>
                    </div>
                    <div class="">
                        <SquareButton passedfunction={handleCartClicked} typeSquare="cart" />
                    </div>
                    
                    <!-- <SubmitButton bind:submitClicked bind:isLoading passedfunction={handleCart} text={""}/> -->
                </div>

                <!-- DESCRIPTION -->
                <div>
                    DESCRIPTION: {post.description}
                </div>
                <!-- PAYMENT METHODS AND KLARNA -->
                <div>
                    PAYMENT METHODS:
                </div>
            </div>
            

        </div>
    </div>
 </section>


{/if}
