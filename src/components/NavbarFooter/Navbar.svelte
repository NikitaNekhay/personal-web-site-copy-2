<script>
    // @ts-nocheck

    import { base } from "$app/paths";

    import { Language, authHandlers, authStore,isAdmin } from "../../store/store";
    import Menu from "./Menu.svelte";

    import { addMessages, locale, t } from "svelte-i18n";
    import ru from "../../services/ru.json";
    import en from "../../services/en.json";
    import { currentLanguagee } from "../../store/store_";
    import { setContext, subscribe } from "svelte/internal";
    import { onDestroy, onMount } from "svelte";


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




//   onMount(()=>{
//     const unsubscribe_authstore = authStore.subscribe((authStore) => {
//         console.log(authStore)
//     });
//     console.log("user at about:",$authStore)
//         console.log("isAdmin at about:",$isAdmin)
//     return unsubscribe;
        
//     })


  //  console.log("is there any user at navbar",isUser)


</script>

<nav class="flex w-screen font-anonymous">
    <!--The form itself  -->
    <div class="fixed top-0 z-30 w-full">
        <div
            class="mx-auto flex w-11/12 items-center justify-between border-x-4 border-navy-1 bg-white-1 shadow-white-2 drop-shadow-2xl"
        >
            <div
                class="mx-2 flex w-full items-center justify-between sm:gap-0 md:gap-8 lg:gap-16"
            >
                <!-- Logo(Left side) -->
                <div class="text-2xl">
                    <a
                        class="transition duration-200 hover:text-yellow-0"
                        target="_self"
                        href="{base}/"
                    >
                        <h1>
                            <p class="flex justify-center">NIKITA</p>
                            <p>NIAKHAI</p>
                        </h1>
                    </a>
                </div>
                <!-- Links(Center) -->
                <div
                    class="flex items-center justify-between drop-shadow sm:mx-8 md:mx-12 lg:mx-20"
                >
                    <div class="border-r-2 border-navy-2">
                        <a
                            class="text-black no-underline
                        underline-offset-4 hover:underline"
                            target="_self"
                            href="{base}/about"
                            >{$t("About")}
                        </a>
                        <a
                            class="text-black no-underline underline-offset-4 hover:underline sm:mx-8
                        md:mx-12 lg:mx-20"
                            target="_self"
                            href="{base}/contact"
                            >{$t("Contact")}
                        </a>
                    </div>
                    <div class="border-l-2 border-navy-2">
                        <a
                            class="text-black no-underline underline-offset-4 hover:underline sm:mx-8
                        md:mx-12 lg:mx-20"
                            target="_self"
                            href="{base}/shop"
                            >{$t("Shop")}
                        </a>
                        <a
                            class="text-black no-underline
                        underline-offset-4 hover:underline"
                            target="_self"
                            href="{base}/works"
                            >{$t("Works")}
                        </a>
                    </div>
                </div>

                <!-- Login/Profile(Right side) -->
                <div>
                    <div class="grid-column-auto grid-row-auto">
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
            </div>
        </div>
    </div>
</nav>
