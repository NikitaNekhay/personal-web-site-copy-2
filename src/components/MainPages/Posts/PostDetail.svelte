<script
    lang="ts"
    src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
    defer
>
    import { base } from "$app/paths";
    import { t } from "svelte-i18n";
    import { handleCart } from "../../../routes/posts/post";
    import {
        Errors,
        type ProductType,
        type Slide,
    } from "../../../shared/types";
    import { authStore } from "../../../store/store";
    import CartAdded from "../../Shared/CartAdded.svelte";
    import CommonPopUp from "../../Shared/CommonPopUp.svelte";
    import SubmitButton from "../../Shared/SubmitButton.svelte";
    import { writable } from "svelte/store";
    import SquareButton from "../../Shared/SquareButton.svelte";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";


    export let post: ProductType;
    let isChanged: boolean = false;
    let isChangedCart: boolean = false;
    let msg: String = "";
    let smmsg: String = "Something went wrong while fetching the data.";
    let href: String = `${base}/shop`;
    let isError: boolean = true;
    export let slides: Slide[];

    if (post === undefined) {
        isChanged = true;
        msg = Errors.FetchPost;
    }

    async function handleCartClicked() {
        try {
            console.log($authStore);
            await handleCart(post, $authStore);
            
            // HANDLE DOUBLE CLICK
            if (isChangedCart) {
                isChangedCart = false;
                setTimeout(() => {
                    isChangedCart = true;
                }, 700);
            } else {
                isChangedCart = !isChangedCart;
            }

        } catch (err) {
            console.log("error in PostDetail");
            if (typeof err === "string") {
                msg = err;
            } else if (err.message !== undefined) {
                msg = err.message;
            } else {
                msg = Errors.AddToCart;
            }
            isChanged = true;
            throw msg;
        }
    }

    let localCurrentIndex = 0; // Local variable to track the index
    const currentIndex = writable(0);

    let touchstartX = 0;
    let touchendX = 0;
    let isRightSwipe: boolean = true;

    function handleSwipe(direction: "left" | "right"): void {
        if (direction === "left") {
            localCurrentIndex = Math.max(0, localCurrentIndex - 1);
            isRightSwipe = false;
        } else {
            localCurrentIndex = Math.min(
                slides.length - 1,
                localCurrentIndex + 1,
            );
            isRightSwipe = true;
        }

        currentIndex.set(localCurrentIndex);
    }
</script>

{#if isChanged}
    <CommonPopUp
        bind:isChanged
        {href}
        {isError}
        isPreviev={false}
        message={msg}
        smallMessage={smmsg}
    />
{:else if isChangedCart}
    <CartAdded bind:isChangedCart />
{/if}

<section class="w-screen h-auto">
    <div
        class="
            mt-28 mx-12 sm:mt-20 md:mt-20 sm:mx-0 md:mx-0
            flex
            sm:flex-col sm:justify-center sm:items-center sm:gap-y-4
            md:flex-col md:justify-center md:items-center md:gap-y-4
            
            "
    >
        <!-- LEFT SIDE FOR IMAGE -->
        <div
            class="w-[80%] h-[80%] sm:w-[90%] md:w-[80%]
                    place-self-center"
        >
            <div
                class=" grid grid-flow-col sm:grid-flow-row relative max-w-md sm:max-w-sm sm:w-[100%]  mx-auto shadow-lg"
            >
                {#each slides as slide, index}
                    {#if index === $currentIndex}
                        <div
                            class="mx-auto shadow-lg sm:w-[100%] max-w-md h-max w-max relative"
                            in:fly={{
                                x: isRightSwipe ? 500 : -500,
                                duration: 2000,
                            }}
                        >
                            <!-- Left clickable area for swiping left -->
                            <div
                                role="button"
                                tabindex="0"
                                class="absolute left-0 top-0 bottom-0 w-3/12 group"
                                on:click={() => handleSwipe("left")}
                                on:keyup={() => handleSwipe("left")}
                            >
                                <div
                                    class="absolute justify-center top-[50%] right-[50%] transition-all duration-200 group-hover:scale-150 animate-pulse"
                                >
                                    <img
                                        class=""
                                        src="{base}/media/chevrons-left.svg"
                                        alt="right icon"
                                    />
                                </div>
                            </div>

                            <!-- Image -->

                            <img
                                src={slide.img}
                                alt="imgs"
                                class=" w-full sm:w-[90%] h-full object-cover"
                                on:pointerdown={(e) =>
                                    (touchstartX = e.screenX)}
                                on:pointerup={(e) => {
                                    touchendX = e.screenX;
                                    handleSwipe("right");
                                }}
                            />

                            <!-- Right clickable area for swiping right -->
                            <div
                                role="button"
                                tabindex="0"
                                class="absolute right-0 top-0 bottom-0 w-3/12 cursor-pointer group"
                                on:click={() => handleSwipe("right")}
                                on:keyup={() => handleSwipe("right")}
                            >
                                <div
                                    class="absolute justify-center top-[50%] left-[50%] group-hover:scale-150 transition-all duration-200 animate-pulse"
                                >
                                    <img
                                        src="{base}/media/chevrons-right.svg"
                                        alt="right icon"
                                    />
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
            <!-- Navigation Dots -->
            <div class="flex justify-center mt-4 relative">
                {#each slides as _, index}
                    <span
                        class="w-4 h-1 mx-1"
                        class:bg-yellow-0={$currentIndex === index}
                        class:bg-red-0={$currentIndex !== index}
                        class:w-[8px]={$currentIndex !== index}
                    >
                    </span>
                {/each}
            </div>
        </div>

        <!-- RIGHT SIDE FOR ABOUT -->
        <div
            class=" m-12 flex flex-col items-center place-content-center
        text-black-1 uppercase font-anonymous text-2xl md:m-6 sm:m-6
             gap-y-12 w-[80%]
            "
        >
            <!-- TITLE + SMALL DESCRIPTION -->
            <div class="w-[100%]">
                <header>
                    <h1
                        class="font-abril text-center hyphens-auto text-6xl text-black-0"
                        lang="de"
                    >
                        {$t(post.title)}
                    </h1>
                </header>
            </div>
            <div
                class="flex flex-col items-center place-content-center
                        
                        gap-y-6 sm:gap-y-6 md:gap-y-6 sm:mx-4 md:mx-6"
            >
                <!-- COLOR AVAILABLE -->
                <div class="text-center">
                    <p>Colors:</p>
                    <div class="flex flex-row gap-3 place-content-center">
                        {#each post.description["colors"] as colorItem}
                            <div>{colorItem}</div>
                        {/each}
                    </div>
                </div>
                <!-- SIZE'S INFO -->
                <div class=" flex flex-col gap-y-4 text-center">
                    <!-- SIZE GUIDE -->
                    <div>SIZE GUIDE</div>
                    <!-- LIST OF SIZES -->
                    <div>
                        <p>LIST OF SIZES:</p>
                        <div class="flex flex-row gap-3 place-content-center">
                            {#each post.description["sizes"] as sizeItem}
                                <p>{sizeItem}</p>
                            {/each}
                        </div>
                    </div>
                </div>

                <!-- PURCHASE BUTTONS -->
                <div class="flex flex-row gap-x-4">
                    <!-- PRICE -->
                    <div class="flex self-center">
                        <p>{$t("Price")} : {post.price} BYN</p>
                    </div>
                    <div class="">
                        <SquareButton
                            passedfunction={handleCartClicked}
                            typeSquare="cart"
                        />
                    </div>

                    <!-- <SubmitButton bind:submitClicked bind:isLoading passedfunction={handleCart} text={""}/> -->
                </div>

                <!-- DESCRIPTION -->
                <div>
                    DESCRIPTION: {post.description["bigDescription"]}
                </div>
                <!-- MATERIALS -->
                <div>
                    MATERIALS: {post.description["materialsDescription"]}
                </div>
                <!-- MODEL -->
                <div>
                    MODEL: {post.description["modelDescription"]}
                </div>
                <!-- PAYMENT METHODS AND KLARNA -->
                <div>PAYMENT METHODS:</div>
            </div>
        </div>
    </div>
</section>
