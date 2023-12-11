<script>
    // @ts-nocheck
    import { base } from "$app/paths";

    import { authHandlers, authStore,isAdmin } from "../../store/store";
    import Menu from "./Menu.svelte";

    import { addMessages, locale, t } from "svelte-i18n";
    import ru from "../../services/ru.json";
    import en from "../../services/en.json";
    import { currentLanguagee } from "../../store/store_";
    import { setContext, subscribe } from "svelte/internal";
    import { onDestroy, onMount } from "svelte";
    import { Language } from "../../shared/types";
    import AlignRight from "../../../static/media/align-right.svg";
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

    let isUser = false

    onMount(()=>{
    const unsubscribe = authStore.subscribe((authStore) => {
        //console.log(authStore)
        if(authStore.user){
            isUser = true
        } else {
            isUser = false
        }
        
    });
   
    return unsubscribe;
        
    })
</script>
<nav class="flex flex-row gap-80 fixed max-h-screen z-50 font-anonymous  ">
    <!--The form itself  -->
    <div class=" mx-4 my-4 flex justify-items-end text-2xl">
        <a
            class=" transition duration-200 hover:text-yellow-0 "
            target="_self"
            href="{base}/"
        >
            <h1 class="flex justify-center">
                NIKITA <br>
                NIAKHAI
            </h1>
        </a> 
    </div>
    <div class="end-0">
        
        <div class=" flex flex-col place-items-center border-l-4 border-navy-1 bg-white-1 shadow-white-2 drop-shadow-2xl ">
   

            <!-- Logo(Left side) -->

            <img class="mt-2" alt="navbar" src="{base}/media/align-right.svg" />


            <!-- Links(Center) -->
                    <div
                        class="flex flex-col gap-y-4 items-center justify-between my-6 drop-shadow border-y-4 border-navy-2 sm:mx-8 md:mx-12 lg:mx-20"
                    >

                        <!-- Login/Profile(Right side) -->
                        <div class="mt-3">
                            <div class="">
                                {#if !isUser}
                                    <a
                                        on:click={authHandlers.login}
                                        class="grid-row-auto
                                    col-span-full transition duration-200
                                    hover:text-yellow-0"
                                        target="_self"
                                        href="{base}/login"
                                    >
                                        {$t("Login")}
                                    </a>
                                {:else}
                                    <Menu />
                                {/if}
                            </div>
                        </div>
                        <div class="flex border-t-2 border-navy-2  text-black sm:mx-8
                        md:mx-12 lg:mx-20">
                            <a
                            class="mt-4 border-navy-2  text-blacktransition duration-200 
                            hover:text-yellow-0 sm:mx-8
                            md:mx-12 lg:mx-20"
                            target="_self"
                            href="{base}/shop"
                            >
                                {$t("Shop")}
                            </a>
                        </div>
                        <div class="flex border-t-2 border-navy-2  text-black sm:mx-8
                        md:mx-12 lg:mx-20">
                            <a
                            class="mt-4 transition duration-200 
                            hover:text-yellow-0"
                            target="_self"
                            href="{base}/works"
                            >
                                {$t("Works")}
                            </a>
                        </div>  
                        <div class="flex border-t-2 border-navy-2  text-black sm:mx-8
                        md:mx-12 lg:mx-20">
                            <a
                            class="mt-4 border-navy-2  text-black transition duration-200 
                            hover:text-yellow-0 sm:mx-8
                            md:mx-12 lg:mx-20"
                            target="_self"
                            href="{base}/about"
                            >
                                {$t("About")}
                            </a>
                        </div> 
                        
                        <div class="  mb-3 flex border-t-2 border-navy-2  text-black 
                        sm:mx-8 md:mx-12 lg:mx-20">
                            <a
                            class="mt-4 transition duration-200 
                            hover:text-yellow-0"
                            target="_self"
                            href="{base}/contact"
                            >
                                {$t("Contact")}
                            </a>
                        </div>


                 </div>


        </div>
        </div>
       

</nav>

    
