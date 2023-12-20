<script lang="ts">
    import { base } from "$app/paths";
    import { handleCart } from "../../../routes/posts/post";
    import { Errors, type PostType } from "../../../shared/types";
    import { authStore } from "../../../store/store";
    import CartAdded from "../../Shared/CartAdded.svelte";
import CommonPopUp from "../../Shared/CommonPopUp.svelte";
    import SubmitButton from "../../Shared/SubmitButton.svelte";


    export let post:PostType;
    let isChanged:boolean = false;
    let isChangedCart:boolean = false;
    let msg:String ="";
    let smmsg:String = "Something went wrong while fetching the data."
    let href:String = `${base}/shop`;
    let isError:boolean = true;

    if(post === undefined) {
        isChanged = true;
        msg = Errors.FetchPost;
    } else {
        console.log(post)
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
        <div class="w-[50%] h-auto sm:h-[70%] sm:">
            {#if post.images}
            {#each post.images as imag}
              <img src={imag} alt={post.title} class="w-100 h-100" />
            {/each}
          {:else}
            <div>
              <p>NO images</p>
            </div>
          {/if}
        </div>
        <!-- RIGHT SIDE FOR ABOUT -->
        <div class="flex flex-col items-center
            sm:flex-row
            ">
            <!-- TITLE + SMALL DESCRIPTION -->
            <div>
                <header>
                    <h1 class="">{post.title}</h1>
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

                </div>
                <button                         
                    class=" "
                    on:click={() => handleCartClicked()}
                    on:keypress={() => handleCartClicked()}> ADD TO CART </button>
                <!-- <SubmitButton bind:submitClicked bind:isLoading passedfunction={handleCart} text={""}/> -->
            </div>
        </div>
    </div>
 </section>


{/if}
