<script lang="ts">
    import { onMount } from "svelte";

        import LoadingButton from "../../Shared/LoadingButton.svelte";
        import SubmitButton from "../../Shared/SubmitButton.svelte";

    import {  authStore } from "../../../store/store";
    import type { User } from "firebase/auth";
    import { addMessages, locale, t } from "svelte-i18n";
    import { handleDelete, updateUserProfile } from "../../../routes/profile/user";
    import NoPosts from "../../Shared/NoPosts.svelte";
    import { currentLanguagee } from "../../../store/store_";
    import { base } from "$app/paths";
    import type { AuthStoreType, ProductType } from "../../../shared/types";

    let submitClicked  = false;
    let isLoading = false;
    let productQuantities = new Map<string, number>();
    let cartItems: ProductType[] = [];
    let tempAuthStore:AuthStoreType;
    let cartPrice:number = 0

        

    onMount(async()=>{
        let templateUser:User;

        const unsubscribe = authStore.subscribe((authStore) => {
            console.log("authstore - in cart",authStore)
            tempAuthStore = authStore;
            cartPrice = countPrice();
            // cartPrice = authStore.data.cart
            // cartItems.forEach(item=> {
            //   console.log(item.price)
            //   cartPrice += Number(item.price);
            // })
        });
        //

        //console.log("cartitems - in cart - after await",$authStore.data.cart)
        
        return unsubscribe;
    })
        // Calculate the quantities of each product
        
    function countPrice(){
      cartPrice = 0;
      cartItems = tempAuthStore.data.cart
            cartItems.forEach(item=> {
              console.log(item.price)
              cartPrice += Number(item.price);
            })
      return cartPrice
    }

      async function handleDeleteItemFromCart(tempId:number){
        if(tempAuthStore){
          
          const clickedItem:ProductType = cartItems.find((obj) => {
            return obj.id === cartItems[tempId].id;
          });
          //console.log("handleCart - clicked item is:",clickedItem)
        
          //console.log(cartItems.indexOf(clickedItem))
          
          //if (cartItems.indexOf(clickedItem) !== -1) {
            cartItems.splice(cartItems.indexOf(clickedItem),1);
            console.log(cartItems)
            tempAuthStore.cart = cartItems;
          //}
          //console.log("handleClick - pushed value for cart:",cartItems)

          // make map out of user's cart
          cartItems.forEach(item => {
          productQuantities.set(item.title, (productQuantities.get(item.title) || 0) + 1);
          });

          await updateUserProfile(
            tempAuthStore.user,
            tempAuthStore.data.name,
            tempAuthStore.data.email,
            tempAuthStore.data.phone,
            tempAuthStore.data.country,
            tempAuthStore.data.description,
            tempAuthStore.data.messages,
            tempAuthStore.cart )

          cartPrice = countPrice();
          } else {
          console.log("cant handle cart because temoauthstore is empty")
          }
      }

        function handleCart (){
            submitClicked  = !submitClicked ;
            //console.log("handleCart cliekd")
            // make map out of user's cart
            cartItems.forEach(item => {
            productQuantities.set(item.title, (productQuantities.get(item.title) || 0) + 1);
            });
            //console.log("cartmap - in cart - after await",productQuantities)
            downloadCheck();
            setTimeout(()=>{
              submitClicked  = !submitClicked ;
              isLoading = false;
            },2500)
            
        };


        function downloadCheck() {
            const checkText = generateCheck();
            const blob = new Blob([checkText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'check.txt';
            a.click();
            URL.revokeObjectURL(url);
        }

        function generateCheck() {

          if($currentLanguagee === 'en'){
            if (cartItems.length === 0) {
                
                 return "Your cart is currently empty. Please add some products before proceeding.";
            }

            let checkText = "Hello user! This is your check with instructions, please follow them in order to purchase your goods:\n\n";
            
            cartItems.forEach(item => {
                const quantity = productQuantities.get(item.title) || 0;
                checkText += `Product: ${item.title}\nQuantity: ${quantity}\nAuthor: ${item.author}\nContact Email: ${item.authorEmail}\n\n`;
                checkText += `Please write an email to ${item.authorEmail} with the subject "Purchase Inquiry for ${item.title}" and include the quantity (${quantity}) in your message. Request further instructions for the purchase.\n\n`;
            });

            // Remove duplicates if any
            const uniqueInstructions = Array.from(new Set(checkText.split('\n\n'))).join('\n\n');

            return uniqueInstructions;
          } else {
            if (cartItems.length === 0) {
                
                return "Ваша корзина временно пуста. Пожалуйста, выберите товары перед тем, как продолжить операцию.";
           }

           let checkText = "Приветствую вас! Вот ваш чек, пожалуйста. Покупка произаводится в индивидуальном порядке путем диалога с продавцом. Здесь представлены инструкции для покупки ваших товаров:\n\n";
           
           cartItems.forEach(item => {
               const quantity = productQuantities.get(item.title) || 0;
               checkText += `Наименование: ${item.title}\nКоличество: ${quantity}\nАвтор: ${item.author}\nКонтактный email: ${item.authorEmail}\n\n`;
               checkText += `Пожалуйства свяжитесь по email ${item.authorEmail} с целью покупки "${item.title}" также уточните желаемое количество в размере (${quantity}) ед. в вашем обращении. Ведите диалог для дальнейшей покупки. Будьте вежливы и удачи!).\n\n`;
           });

           // Remove duplicates if any
           const uniqueInstructions = Array.from(new Set(checkText.split('\n\n'))).join('\n\n');

           return uniqueInstructions;
          }
          
        }


        
</script>


<section class=" h-auto w-screen 3xl:pb-[40%] ">
    <div class="px-[20%] py-[14%]   sm:px-6 sm:py-[40%] lg:px-8 xl:mb-40pt 2xl:mb-40pt 3xl:mb-40pt">
      <div class="mx-auto max-w-3xl ">

        <header class="text mb-6 flex justify-center">
          <h1 class="font-abril text-4xl text-blue-0">{$t('Your Cart')}</h1>
        </header>

        <!-- <header class="text-center">
          <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">{$t('Your Cart')} </h1>
        </header> -->
  
        <div class="mt-8 ">
          <!-- List of cart -->
          {#key tempAuthStore}
          {#if cartItems.length >0}
          <ul class="space-y-6">
            {#each cartItems as item,index}
              <li class="flex items-center gap-4">
                <img
                  src={item.images[0]}
                  alt="item img"
                  class="h-16 w-16 rounded object-cover"
                />
    
                <div class="sm:w-28 md:w-32">
                  <div class=" ">
                    <h3 class="text-sm text-gray-900 sm:truncate md:truncate">{item.title}</h3>
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
    
                <div class="flex flex-1 items-center justify-end gap-2 ">
                  <div>
                    <div
                      class="group relative inline-block text-sm font-medium text-black-1
                      hover:cursor-pointer focus:outline-none focus:ring active:text-black-1 "
                      on:click={() => handleDeleteItemFromCart(index) }
                      on:keypress={() => handleDeleteItemFromCart(index)}
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
                        class="relative block border border-current bg-white px-8 py-3 sm:px-6 sm:py-2 transition-transform duration-500 active:bg-gray-400"
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
              </li>
            {/each}
            
          </ul>
          {:else}
          {$t("NO ITEMS IN CART | BROWSE THE SHOP!")}
          {/if}

          
          
  


          <!-- Check info -->
          <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
            <div class="w-screen max-w-lg space-y-4">
              <dl class="space-y-0.5 text-sm text-gray-700">
                <!-- <div class="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>£250</dd>
                </div>
  
                <div class="flex justify-between">
                  <dt>VAT</dt>
                  <dd>£25</dd>
                </div>
  
                <div class="flex justify-between">
                  <dt>Discount</dt>
                  <dd>-£20</dd>
                </div> -->
  
                <div class="flex justify-end gap-6 text-base font-medium mb-8">
                  <dt>{$t('Total')} :</dt>
                  <dd>{cartPrice} BYN</dd>
                </div>
              </dl>
  
              <!-- DISCOUNT BANNER -->
              <!-- <div class="flex justify-end">
                <span
                  class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="-ms-1 me-1.5 h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
  
                  <p class="whitespace-nowrap text-xs">0 {$t('Discounts Applied')} </p>
                </span>
              </div> -->
             
            </div>
          </div>
          {/key}
          <!-- Button -->
          <div class="flex justify-center text-center">
            <SubmitButton bind:submitClicked bind:isLoading passedfunction={handleCart} text={"Purchase"}/>
            <!-- {#if submitClicked }
              <LoadingButton />
            {:else}
              <SubmitButton passedfunction={handleCart}/> 
            {/if}
          </div> -->
        </div>
      </div>
    </div>
  </section>