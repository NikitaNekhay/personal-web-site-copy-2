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
        console.log(slides)
        
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

function handleSwipe(): void {
    const touchDifference = touchstartX - touchendX;
    console.log('Swipe detected', touchDifference);

    if (Math.abs(touchDifference) < 10) {
        console.log('Swipe too small');
        return;
    }

    if (touchDifference > 0) {
        console.log('Swipe left');
        localCurrentIndex = Math.min(slides.length - 1, localCurrentIndex + 1);
    } else {
        console.log('Swipe right');
        localCurrentIndex = Math.max(0, localCurrentIndex - 1);
    }

    console.log('New index', localCurrentIndex);
    currentIndex.set(localCurrentIndex);
}

  function onPointerDown(e: PointerEvent): void {
    touchstartX = e.screenX;
    console.log('Pointer down', touchstartX);
}

function onPointerUp(e: PointerEvent): void {
    touchendX = e.screenX;
    console.log('Pointer up', touchendX);
    handleSwipe();
}
</script>

      <!-- <div class="slider-line" style="transform: translateX({offset}px);">
        {#if post.images}
          {#each post.images as imag}
            <img src={imag} alt={post.title} class="w-100 h-100" />
          {/each}
        {:else}
          <div>
            <p>NO images</p>
          </div>
        {/if}
      </div> -->


    <!-- {post.description}
    <p>{$t("Author")} : {post.author}</p>
    <p>{$t("Author Email")} : {post.authorEmail}</p>
    <p>{$t("Price")} : {post.price}</p>
    <p>{$t("Date")} : {post.date}:{post.date}:{post.date}</p> -->

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

 <section class="w-screen h-auto mt-40 sm:mt-20">
    <div class="flex 
            sm:flex-col sm:justify-center 
            md:flex-col md:justify-center 
            ">
        <!-- LEFT SIDE FOR IMAGE -->
        <div class="w-[50%] h-auto sm:h-[70%] cursor-g">
            
            <!-- {#if post.images}
            {#each post.images as imag}
              <img src={imag} alt={post.title} class="w-100 h-100" />
            {/each}
          {:else}
            <div>
              <p>NO images</p>
            </div>
          {/if} -->


            <div class="w-full mx-auto shadow-lg bg-white px-10 pt-16 pb-10 text-gray-600" style="max-width: 350px">
              <div class="overflow-hidden relative mb-10">
                <div class="overflow-hidden relative cursor-grab"
                on:pointerdown={(e) => touchstartX = e.screenX}
                on:pointerup={(e) => { touchendX = e.screenX; handleSwipe(); }}>
             {#each slides as item, index}
               {#if $currentIndex === index} <!-- Display the current image -->
                 <div class="overflow-hidden text-center select-none transition duration-300 transform ease">
                   <img src={item.img} alt="" class="w-full">
                 </div>
               {/if}
             {/each}
           </div>
              </div>
              <!-- Navigation Dots -->
              <div class="flex justify-center">
                {#each slides as _, index}
                  <span class="w-2 h-2 rounded-full mx-1" class:bg-indigo-500={$currentIndex === index } class:bg-gray-200={$currentIndex !== index}></span>
                {/each}
              </div>
            </div>
          </div>

        <!-- RIGHT SIDE FOR ABOUT -->
        <div class="flex flex-col items-center
            sm:flex-row
            ">
            <!-- TITLE + SMALL DESCRIPTION -->
            <div>
                <header>
                    <h1 class="font-abril text-4xl text-blue-0">{$t(post.title)}</h1>
                </header>
            </div>
            <!-- COLOR AVAILABLE -->
            <div>

            </div>
            <!-- SIZE'S INFO -->
            <div>
                <!-- SIZE GUIDE -->
                <div>

                </div>
                <!-- LIST OF SIZES -->
                <div>

                </div>
            </div>
            <!-- PURCHASE BUTTONS -->
            <div class=" ">
                <!-- PRICE -->
                <div>
                    <p>{$t("Price")} : {post.price} BYN</p>
                </div>
                <button                         
                    class=" "
                    on:click={() => handleCartClicked()}
                    on:keypress={() => handleCartClicked()}> ADD TO CART </button>
                <!-- <SubmitButton bind:submitClicked bind:isLoading passedfunction={handleCart} text={""}/> -->
            </div>
            <!-- DESCRIPTION -->
            <div>
                {post.description}
            </div>
        </div>
    </div>
 </section>


{/if}
