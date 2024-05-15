<script lang="ts">
  import {  t } from "svelte-i18n";

  import { base } from "$app/paths";
  import { authStore } from "../../store/store";

  import { fade, fly } from "svelte/transition";
    import { cart } from "../../store/cart_store_";

  export let isChangedCart: boolean;
  function changeState() {
    ////console.log(isChangedCart);

    isChangedCart = !isChangedCart;
  }
</script>

<div
  in:fly={{ y: -200, duration: 700 }}
  out:fade
  role="alert"
  class="fixed z-10 top-[12%] rounded-xl border border-gray-100 bg-white p-4 shadow-xl mt-6 mb-16
    left-1/4 right-1/4 sm:left-10 sm:right-10 md:left-10 md:right-10"
>
  <div class="flex items-start gap-4">
    <img class=" place-self-center" src="{base}/media/cart-check.svg" alt="" />

    <div class="flex-1">
      <strong class="block font-medium text-gray-900">
        {$t("Item in the cart")}
      </strong>

      <p class="mt-1 text-sm text-gray-700">
        {$t("You have added item to your cart!")}
        <br />
        {$t("Currently you have")}
        {$authStore.user ? $authStore.data.cart.length : $cart.cart.length}
        {$t("item(s) in the cart")}.
      </p>

      <div class="mt-4 flex gap-2">
        <button
          on:click={() => {
            window.location.href = `${base}/profile/shoppingcart`;
          }}
          class="hover:animate-pulse inline-flex items-center gap-2 rounded-lg bg-yellow-0 px-4 py-2 text-white-0 hover:bg-orange-0 transition-colors duration-200"
        >
          <span class="text-sm"> {$t("Make an order / checkout")} </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </button>
      </div>
    </div>

    <button
      class="text-gray-500 transition hover:text-gray-600"
      on:click={() => {
        changeState();
      }}
    >
      <span class="sr-only">{$t("Dismiss popup")}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</div>
