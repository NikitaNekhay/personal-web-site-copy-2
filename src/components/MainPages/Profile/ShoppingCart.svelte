<script lang="ts">
  import { onMount } from "svelte";

  import SubmitButton from "../../Shared/SubmitButton.svelte";

  import { authStore } from "../../../store/store";
  import type { User } from "firebase/auth";
  import { t } from "svelte-i18n";
  import { updateUserProfile } from "../../../routes/profile/user";
  import { currentLanguagee } from "../../../store/store_";
  import {
    ContactOptions,
    type AuthStoreType,
    type ProductType,
    type UserCartType,
    DeliveryOptions,
    PaymentOptions,
    Errors,
  } from "../../../shared/types";
  import SquareButton from "../../Shared/SquareButton.svelte";
  import { base } from "$app/paths";
  import CommonPopUp from "../../Shared/CommonPopUp.svelte";

  export let userCity;
  export let userCountry;
  // Assuming you have a list of countries and their codes
  export let countries;

  // } catch (err) {
  //             if(typeof(err)==="string"){
  //                 msg = err;
  //             } else if(err.message !== undefined){
  //                 msg = err.message;
  //             } else {
  //                 msg = Errors.Authentication
  //             }
  //             isChangedError= true

  let isChanged = false;
  let isErrorInput = "";
  let msgT: String = Errors.PurchaseFormAttention;
  let msg: String = Errors.PurchaseFormAttention;
  let smmsgE: String = Errors.PurchaseForm;
  let isError: boolean = true;
  let href = `${base}/profile`;

  let showDropdown = false;
  let submitClicked = false;
  let isLoading = false;

  let productQuantities = new Map<string, number>();
  let cartItems: ProductType[] = [];
  let tempAuthStore: AuthStoreType;
  let cartPrice: number = 0;
  let totalСartPrice: number = 0;
  let deliveryPrice: number = 0;
  let prepaymentPrice: number = 0;

  let tempUserCart: UserCartType = {
    fullName: "",
    phoneNumber: "",
    email: "",
    contactOption: ContactOptions.Telegram,
    contactName: "",
    deliveryOption: DeliveryOptions.SelfDelivery,
    country: userCountry ?? "",
    city: userCity ?? "",
    adress: "",
    paymentOption: PaymentOptions.Cash,
    discount: "",
  };

  onMount(async () => {
    const unsubscribe = authStore.subscribe((authStore) => {
      //console.log("authstore - in cart",authStore)
      tempAuthStore = authStore;

      cartItems = tempAuthStore.data.cart;
      cartPrice = countPrice();
      totalСartPrice = cartPrice + deliveryPrice;
      prepaymentPrice = totalСartPrice * 0.3;
    });

    return unsubscribe;
  });

  tempUserCart = setUserPreferences(tempUserCart);

  function setUserPreferences(userData: UserCartType): UserCartType {
    return userData;
  }

  function selectCountry(country) {
    tempUserCart.country = country.code;
    showDropdown = false;
    // Additional logic to handle the selected country
  }

  // Calculate the quantities of each product

  function countPrice() {
    cartPrice = 0;
    cartItems = tempAuthStore.data.cart;
    cartItems.forEach((item) => {
      //console.log(item.price)
      cartPrice += Number(item.price);
    });
    return cartPrice;
  }

  async function handleDeleteItemFromCart(tempId: number) {
    if (tempAuthStore) {
      const clickedItem: ProductType = cartItems.find((obj) => {
        return obj.id === cartItems[tempId].id;
      });
      ////console.log("handleCart - clicked item is:",clickedItem)

      ////console.log(cartItems.indexOf(clickedItem))

      //if (cartItems.indexOf(clickedItem) !== -1) {
      cartItems.splice(cartItems.indexOf(clickedItem), 1);
      //console.log(cartItems)
      tempAuthStore.data.cart = cartItems;
      //}
      ////console.log("handleClick - pushed value for cart:",cartItems)

      // make map out of user's cart
      cartItems.forEach((item) => {
        productQuantities.set(
          item.title,
          (productQuantities.get(item.title) || 0) + 1,
        );
      });

      await updateUserProfile(
        tempAuthStore.user,
        tempAuthStore.data.name,
        tempAuthStore.data.email,
        tempAuthStore.data.phone,
        tempAuthStore.data.country,
        tempAuthStore.data.description,
        tempAuthStore.data.messages,
        tempAuthStore.data.cart,
      );

      cartPrice = countPrice();
      totalСartPrice = cartPrice + deliveryPrice;
      prepaymentPrice = totalСartPrice * 0.3;
    } else {
      //console.log("cant handle cart because temoauthstore is empty")
    }
  }

  // Function to handle country selection
  function handleCountrySelect(event) {
    tempUserCart.country = event.target.value;
    // Additional logic to handle the selected country
  }

  // Function to get the flag URL
  function getFlagUrl(countryCode: string) {
    return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`;
  }

  function handleCart() {
    try {
      if (handleFormValidation()) {
        submitClicked = !submitClicked;
        ////console.log("handleCart cliekd")
        // make map out of user's cart
        cartItems.forEach((item) => {
          productQuantities.set(
            item.title,
            (productQuantities.get(item.title) || 0) + 1,
          );
        });
        ////console.log("cartmap - in cart - after await",productQuantities)
        downloadCheck();
        console.log(tempUserCart);
      } else {
        throw Errors.PurchaseFormAttention;
      }
  } catch (err) {
              if(typeof(err)==="string"){
                  msg = err;
              } else if(err.message !== undefined){
                  msg = err.message;
              } else {
                  msg = msgT
              }
              isChanged= true
    } finally {
      setTimeout(() => {
        submitClicked = !submitClicked;
        isLoading = false;
      }, 2500);
    }
  }

  function handleFormValidation(): boolean {
    return false;
  }

  function downloadCheck() {
    const checkText = generateCheck();
    const blob = new Blob([checkText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "check.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  function generateCheck() {
    if ($currentLanguagee === "en") {
      if (cartItems.length === 0) {
        return "Your cart is currently empty. Please add some products before proceeding.";
      }

      let checkText =
        "Hello user! This is your check with instructions, please follow them in order to purchase your goods:\n\n";

      cartItems.forEach((item) => {
        const quantity = productQuantities.get(item.title) || 0;
        checkText += `Product: ${item.title}\nQuantity: ${quantity}\nAuthor: ${item.author}\nContact Email: ${item.authorEmail}\n\n`;
        checkText += `Please write an email to ${item.authorEmail} with the subject "Purchase Inquiry for ${item.title}" and include the quantity (${quantity}) in your message. Request further instructions for the purchase.\n\n`;
      });

      // Remove duplicates if any
      const uniqueInstructions = Array.from(
        new Set(checkText.split("\n\n")),
      ).join("\n\n");

      return uniqueInstructions;
    } else {
      if (cartItems.length === 0) {
        return "Ваша корзина временно пуста. Пожалуйста, выберите товары перед тем, как продолжить операцию.";
      }

      let checkText =
        "Приветствую вас! Вот ваш чек, пожалуйста. Покупка произаводится в индивидуальном порядке путем диалога с продавцом. Здесь представлены инструкции для покупки ваших товаров:\n\n";

      cartItems.forEach((item) => {
        const quantity = productQuantities.get(item.title) || 0;
        checkText += `Наименование: ${item.title}\nКоличество: ${quantity}\nАвтор: ${item.author}\nКонтактный email: ${item.authorEmail}\n\n`;
        checkText += `Пожалуйства свяжитесь по email ${item.authorEmail} с целью покупки "${item.title}" также уточните желаемое количество в размере (${quantity}) ед. в вашем обращении. Ведите диалог для дальнейшей покупки. Будьте вежливы и удачи!).\n\n`;
      });

      // Remove duplicates if any
      const uniqueInstructions = Array.from(
        new Set(checkText.split("\n\n")),
      ).join("\n\n");

      return uniqueInstructions;
    }
  }
</script>

{#if isChanged}
  <CommonPopUp
    bind:isChanged
    {isError}
    isPreviev={false}
    message={msg}
    smallMessage={smmsgE}
    href=""
  />
{/if}

<div
  class="w-[100%] relative h-auto
            grid grid-flow-col sm:grid-flow-row md:grid-flow-row
            gap-x-6 sm:gap-x-0 md:gap-x-0
            py-[14%] px-[3%] sm:py-[40%] xl:mb-40pt 2xl:mb-40pt 3xl:mb-40pt"
>
  <section
    class="sticky-section h-auto 3xl:pb-[40%] sm:w-[100%] md:sm:w-[100%] w-[100%]"
  >
    <div class=" left-0">
      <header class="text mb-6 flex justify-center">
        <h1 class="font-abril text-4xl text-blue-0">{$t("Your Cart")}</h1>
      </header>

      <!-- <header class="text-center">
            <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">{$t('Your Cart')} </h1>
          </header> -->

      <div class="sm:w-[100%] md:sm:w-[100%]">
        <!-- List of cart -->
        {#key tempAuthStore}
          {#if cartItems.length > 0}
            <ul class="space-y-6">
              {#each cartItems as item, index}
                <li class="flex items-center justify-between">
                  <div class="flex items-center justify-start gap-x-4">
                    <a href="{base}/posts/{item.id}">
                      <img
                        src={item.images[0]}
                        alt="item img"
                        class="h-16 w-16 rounded object-cover"
                      />
                    </a>

                    <div class="sm:w-28 md:w-32">
                      <div class=" ">
                        <h3
                          class="text-sm text-gray-900 sm:truncate md:truncate"
                        >
                          {item.title}
                        </h3>
                      </div>

                      <!-- Block of item props -->
                      <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dt class="inline">Size:</dt>
                          <dd class="inline">Universal</dd>
                        </div>
                        <div>
                          <dt class="inline">Price:</dt>
                          <dd class="inline">{item.price} BYN</dd>
                        </div>
                        <!-- <div>
                        <dt class="inline">Color:</dt>
                        <dd class="inline">White</dd>
                      </div> -->
                      </dl>
                    </div>
                  </div>

                  <div class="flex gap-2">
                    <SquareButton
                      passedfunction={() => {
                        handleDeleteItemFromCart(index);
                      }}
                      typeSquare="delete"
                    />
                  </div>
                </li>
              {/each}
            </ul>
          {:else}
            {$t("NO ITEMS IN CART | BROWSE THE SHOP!")}
          {/if}

          <!-- Check info -->
          <div class="mt-8 flex justify-end border-t-2 border-navy-2 pt-8">
            <div class="w-[100%] max-w-lg space-y-4">
              <div class="flex justify-end gap-6 text-base font-medium mb-8">
                {$t("Price for goods")} :
                {cartPrice} BYN
              </div>
            </div>
          </div>
        {/key}
      </div>
    </div>
  </section>
  <section class="h-auto 3xl:pb-[40%] sm:w-[100%] md:sm:w-[100%]">
    <form class="font-sans">
      <div class="purchase-container">
        <h2 class="purchase-heading2">{$t("Personal data")}</h2>

        <!-- FULL NAME AND ... -->
        <div class="purchase-item flex mb-6 flex-wrap w-full">
          <div class="w-full px-3">
            <label
              class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2 {isChanged && (isErrorInput === "name" || isErrorInput === "") ? "ring-red-1 ring-1" : ""}"
              for="first-name"
            >
              <input
                class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
        focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                type="text"
                placeholder="name"
                bind:value={tempUserCart.fullName}
                required
                id="name"
                autocomplete="given-name"
              />
              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
              >
                {$t("Name, Surname, Middle name (if exists)")}
              </span>
            </label>
          </div>
        </div>
        <!-- YOUR PHONE -->
        <div class="purchase-item flex mb-6 flex-wrap w-full">
          <div class="w-full px-3">
            <label
              class="relative block overflow-hidden rounded-md
              border border-gray-200 bg-white-1
              px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
              focus-within:ring-white-2"
              for="phone-number"
            >
              <input
                class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
                focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                type="tel"
                bind:value={tempUserCart.phoneNumber}
                placeholder="tel"
                id="phone"
                required
                autocomplete="tel"
              />
              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
                  bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                  peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
              >
                {$t("Phone number")}
              </span>
            </label>
          </div>
        </div>
        <!-- YOUR EMAIL -->
        <div class="purchase-item flex mb-6 flex-wrap w-full">
          <div class="w-full px-3">
            <label
              class="relative block overflow-hidden rounded-md
            border border-gray-200 bg-white-1
            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
            focus-within:ring-white-2"
              for="email"
            >
              <input
                class="flex peer h-8 w-full border-none bg-transparent
              bg-white-1 p-0 placeholder-transparent
              focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                type="email"
                bind:value={tempUserCart.email}
                required
                id="email"
                autocomplete="email"
                placeholder="email@web.net"
              />

              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
              bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
              peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
              >
                {$t("Email")}
              </span>
            </label>
          </div>
        </div>
        <!-- SOCIAL NETWORK -->
        <!-- HOW TO ACCESS YOU RADIO -->
        <div>
          <fieldset class="purchase-item flex flex-col justify-start mb-6 mx-3">
            <legend>
              {$t("Choose contact option")} :
            </legend>

            <div>
              <input
                bind:group={tempUserCart.contactOption}
                class=" focus:ring-green-0 focus:text-green-0 text-green-0"
                type="radio"
                name="contact"
                id="tg"
                value="tg"
              />
              <label for="tg">Telegram</label>
            </div>

            <div>
              <input
                bind:group={tempUserCart.contactOption}
                class=" focus:ring-green-0 focus:text-green-0 text-green-0"
                type="radio"
                name="contact"
                id="ig"
                value="ig"
              />
              <label for="ig">Instagram</label>
            </div>

            <div>
              <input
                bind:group={tempUserCart.contactOption}
                class=" focus:ring-green-0 focus:text-green-0 text-green-0"
                type="radio"
                name="contact"
                id="fb"
                value="fb"
              />
              <label for="fb">Facebook</label>
            </div>

            <div>
              <input
                bind:group={tempUserCart.contactOption}
                class=" focus:ring-green-0 focus:text-green-0 text-green-0"
                type="radio"
                name="contact"
                id="wapp"
                value="wapp"
              />
              <label for="wapp">Whatsapp</label>
            </div>
          </fieldset>
        </div>
        <!-- USERNAME -->
        <div class="purchase-item flex mb-6 flex-wrap w-full">
          <div class="w-full px-3">
            <label
              class="relative block overflow-hidden rounded-md
        border border-gray-200 bg-white-1
        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
        focus-within:ring-white-2"
              for="first-name"
            >
              <input
                class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
        focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Username"
                bind:value={tempUserCart.contactName}
                required
                id="name"
                autocomplete="given-name"
              />
              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
              >
                {$t("Username")}
              </span>
            </label>
          </div>
        </div>
      </div>
      <!-- DELIVERY -->
      <div class="purchase-container">
        <h2 class="purchase-heading2">{$t("Delivery details")}</h2>

        <!-- Country Selector with Flags -->
        <div class="purchase-item relative">
          <!-- Custom Dropdown Trigger -->
          <div class=" mb-6 w-full">
            <div class="w-full px-3">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={showDropdown.toString()}
                class="w-full relative block overflow-hidden rounded-md
                border border-gray-200 bg-white-1
                px-3 py-1.5 shadow-sm focus-within:border-white-2 focus-within:ring-1
                focus-within:ring-white-2"
                on:click={() => (showDropdown = !showDropdown)}
              >
                <img
                  src={tempUserCart.country
                    ? getFlagUrl(tempUserCart.country)
                    : ""}
                  alt={tempUserCart.country}
                  class="inline-block w-5 h-3 ml-0 {tempUserCart.country
                    ? 'opacity-100'
                    : 'opacity-0'}"
                />
                {tempUserCart.country
                  ? countries.find((c) => c.code === tempUserCart.country).name
                  : "Select a country"}

                <svg
                  class="ml-[50%] w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path></svg
                >
              </button>
            </div>
          </div>

          <!-- Custom Dropdown Options -->
          {#if showDropdown}
            <ul
              class="absolute z-10 w-full bg-white border border-gray-300 -mt-2 max-h-60 overflow-y-auto rounded-lg"
              role="listbox"
              aria-labelledby="country"
            >
              {#each countries as country}
                <li
                  role="option"
                  aria-selected={tempUserCart.country === country.code}
                >
                  <button
                    type="button"
                    class="flex items-center p-2 hover:bg-gray-100 cursor-pointer w-full text-left"
                    on:click={() => selectCountry(country)}
                  >
                    <img
                      src={getFlagUrl(country.code)}
                      alt={country.name}
                      class="inline-block mr-2 w-5 h-3"
                    />
                    {country.name}
                  </button>
                </li>
              {/each}
            </ul>
          {/if}
        </div>

        <!-- City Input -->
        <div class="purchase-item flex mb-6 flex-wrap w-full">
          <div class="w-full px-3">
            <label
              for="city"
              class="relative block overflow-hidden rounded-md
          border border-gray-200 bg-white-1
          px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
          focus-within:ring-white-2"
            >
              <input
                type="text"
                id="city"
                bind:value={tempUserCart.city}
                class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                placeholder="Enter your city"
                required
              />
              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
          bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
              >
                {$t("City")}
              </span>
            </label>
          </div>
        </div>

        <!-- RADIO OPTION OF DELIVERY -->
        <fieldset class="purchase-item flex flex-col justify-start mb-6 mx-3">
          <legend>{$t("Choose delivery option")} :</legend>
          <div>
            <input
              bind:group={tempUserCart.deliveryOption}
              class=" focus:ring-green-0 focus:text-green-0 text-green-0"
              type="radio"
              name="delivery"
              id=""
              value="sd"
            />
            <label class="" for="sd">{$t("Self Delivery")}</label>
          </div>

          <div>
            <input
              bind:group={tempUserCart.deliveryOption}
              class=" focus:ring-green-0 focus:text-green-0 text-green-0"
              type="radio"
              name="delivery"
              id="ep"
              value="ep"
            />
            <label for="ep">{$t("Evropochta")}</label>
          </div>

          <div>
            <input
              bind:group={tempUserCart.deliveryOption}
              class=" focus:ring-green-0 focus:text-green-0 text-green-0"
              type="radio"
              name="delivery"
              id="cdek"
              value="cdek"
            />
            <label for="cdek">{$t("CDEK")}</label>
          </div>

          <div>
            <input
              bind:group={tempUserCart.deliveryOption}
              class=" focus:ring-green-0 focus:text-green-0 text-green-0"
              type="radio"
              name="delivery"
              id="ems"
              value="ems"
            />
            <label for="ems">EMS</label>
          </div>
        </fieldset>

        {#if !tempUserCart.deliveryOption}
          <div></div>
        {:else if tempUserCart.deliveryOption === DeliveryOptions.SelfDelivery}
          <!-- SELF-DELIVERY -->
          <div class="purchase-item">
            <p>
              {$t(
                "Place (Minsk, Zavodskoy district) and date for self-delivery are provided by our manager later",
              )}
            </p>
          </div>
        {:else}
          <!-- YOUR ADRESS -->
          <div class="purchase-item flex mb-6 flex-wrap w-full">
            <div class="w-full px-3">
              <label
                class="relative block overflow-hidden rounded-md
                  border border-gray-200 bg-white-1
                  px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
                  focus-within:ring-white-2"
                for="adress"
              >
                <input
                  class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
                  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  type="text"
                  placeholder="Adress"
                  bind:value={tempUserCart.adress}
                  required
                  id="adress"
                />
                <span
                  class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
                    bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                    peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
                >
                  {$t("Adress")}
                </span>
              </label>
              <p class="mt-3 text-xs italic text-gray-600">
                {$t(
                  "Specify your street, house number, appartement number, post code",
                )}
              </p>
              <p class="mt-3 text-xs italic text-gray-600">
                {$t("Specify information about post office e.g its number")}
              </p>
            </div>
          </div>
        {/if}

        <!-- POLICY -->
        <div class="flex gap-1">
          <p>{$t("You can read in details about delivery policy")} -></p>
          <a class="p-link" target="_blank" href="{base}/purchase"
            >{$t("here")}
          </a>
        </div>
      </div>

      <div class="purchase-container">
        <h2 class="purchase-heading2">{$t("Payment details")}</h2>
        <!-- PAYMENT METHOD RADIO -->
        <p class="purchase-item">
          {$t("You need to make a prepayment via cashless method in anyway.")}
        </p>
        <fieldset class="purchase-item flex flex-col justify-start mb-6 mx-3">
          <legend>{$t("Choose payment method")} :</legend>
          <div>
            <input
              bind:group={tempUserCart.paymentOption}
              class=" focus:ring-green-0 focus:text-green-0 text-green-0"
              type="radio"
              name="payment"
              id="c"
              value="c"
            />
            <label for="c">{$t("With cash when picking up a good")}</label>
          </div>

          <div>
            <input
              bind:group={tempUserCart.paymentOption}
              class=" focus:ring-green-0 focus:text-green-0 text-green-0"
              type="radio"
              name="payment"
              id="cl"
              value="cl"
            />
            <label for="cl">{$t("Cashless")}</label>
          </div>
        </fieldset>
        <!-- IF ONLINE THEN BANNER -->
        <!-- BANNER -->
        <!-- DETAIL -->
        <!-- POLICY -->

        <!-- DISCOUNT BANNER -->
        <div class="purchase-item flex mb-6 flex-wrap w-full">
          <div class="w-full px-3">
            <label
              class="relative block overflow-hidden rounded-md
  border border-gray-200 bg-white-1
  px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
  focus-within:ring-white-2"
              for="discount"
            >
              <input
                class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent
  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Discount"
                bind:value={tempUserCart.discount}
                id="discount"
              />
              <span
                class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
    bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
    peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs pointer-events-none"
              >
                {$t("Discount")}
              </span>
            </label>
          </div>
        </div>

        <div class=" flex gap-1">
          <p>{$t("You can read in details about purchase policy")} -></p>
          <a class="p-link" target="_blank" href="{base}/purchase"
            >{$t("here")}
          </a>
        </div>
      </div>

      <!-- PRICES -->
      <div
        class=" border-t-2 pt-8 border-navy-2 grid w-full justify-end grid-flow-row text-base font-medium my-8 gap-3"
      >
        <div>
          <p>
            {$t("Prepayment")} :
            {prepaymentPrice} BYN
          </p>
        </div>
        <div>
          <p>
            {$t("Total")} :
            {totalСartPrice} BYN
          </p>
        </div>
      </div>

      <!-- Button -->

      <div class="grid w-full justify-center text-center">
        <SubmitButton
          bind:submitClicked
          bind:isLoading
          passedfunction={handleCart}
          text={"Purchase"}
        />
      </div>
    </form>
  </section>
</div>

<style>
  .purchase-container {
    @apply mb-12 shadow-xl p-6 bg-white-0;
  }

  .purchase-item {
    @apply mb-6;
  }

  .purchase-heading3 {
    @apply text-xl font-anonymous;
  }

  .purchase-heading2 {
    @apply text-3xl font-anonymous mb-4;
  }

  /* Add this inside your <style> tag */
  .purchase-container {
    @apply mb-12 shadow-xl p-6 bg-white-0;
  }

  .purchase-item {
    @apply mb-6;
  }

  .purchase-heading3 {
    @apply text-xl font-anonymous;
  }

  .purchase-heading2 {
    @apply text-3xl font-anonymous mb-4;
  }

  /* Custom sticky behavior */
  @media (min-width: 1024px) {
    /* lg screens and above */
    .sticky-section {
      position: sticky;
      top: 20vh; /* Adjust this value based on your navbar's height */
      bottom: 0;
      padding-top: 68;
      z-index: 10;
      max-height: calc(100vh - 35vh);
      overflow-y: auto; /* In case the content overflows */
    }
  }
</style>
