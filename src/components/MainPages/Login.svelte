<script lang="ts">
    import {  authHandlers, authStore } from "../../store/store";
    import { addMessages, locale, t } from "svelte-i18n";
    import ru from "../../services/ru.json";
    import en from "../../services/en.json";
    import { currentLanguagee } from "../../store/store_";
    import LoadingButton from "../Shared/LoadingButton.svelte";
    import { base } from "$app/paths";
    import { onDestroy } from "svelte";
    import { page } from "$app/stores";
    import { applyAction } from "$app/forms";
    import { Errors, Language } from "../../shared/types";
    import { error } from "@sveltejs/kit";
    import CommonPopUp from "../Shared/CommonPopUp.svelte";
    import SubmitButton from "../Shared/SubmitButton.svelte";

    let submitClicked = false;
    let isLoading = true
    
    let register = false;
    let authenticating = false;
    
    let isChanged:boolean = false;
    let msg:String ="";
    let smmsg:String = "Something went wrong while creating your account."
    
    let email = "";
    let password = "";
    let rpassword = "";

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

    async function handleAuthenticate() {
        try {
        submitClicked = !submitClicked;
        isLoading = true;
        if (authenticating) {
            isLoading = false;
            return;
        }

        if(rpassword!==password && register){
            throw Errors.RepeatPass
        }

        if((email.length ===0 || password.length ===0 || rpassword.length ===0) && register){
            throw Errors.EmptyInput
        }

        authenticating = true;
        isLoading = false;

        try {
            if (!register) {
                await authHandlers.login(email, password);
            } else {
                await authHandlers.signup(email, password);
            }
    
        } catch (err) {
            throw err;
        }
    } catch (err) {
            if(typeof(err)==="string"){
                msg = err;
            } else if(err.message !== undefined){
                msg = err.message;
            } else {
                msg = Errors.Authentication
            }
            isChanged = true

            isLoading = false;
            authenticating = false;

        } finally {
            setTimeout(() => {
                // Calculate and set the new scroll position based on the previous percentage
                submitClicked = false
            }, 2500);
        }

    }


    function handleRegister() {
        register = !register;
    }
</script>
{#if isChanged}
    <CommonPopUp bind:isChanged isPreviev={false} isError={true} message={msg} smallMessage={smmsg}  />
{/if}
<section class="h-auto w-screen 3xl:pb-[40%] ">
    <div class="flex place-content-center px-[20%] py-[14%]   sm:px-6 sm:py-[40%] lg:px-8 xl:mb-40pt 2xl:mb-40pt 3xl:mb-40pt" />
        <div class="  " >

            <header class="mb-6 justify-center text-center ">
                <h1 class="font-abril text-4xl text-blue-0">
                    {register ? $t("REGISTER") : $t("LOGIN")}
                </h1>
            </header>

            <div class="flex sm:px-[10%] place-content-center">
                <form class="w-full max-w-lg flex flex-col justify-center items-center">
                    <div class="-mx-3 mb-6 flex flex-wrap w-full">
                        <div class="w-full px-3">
                            <label
                                class="relative block overflow-hidden rounded-md
                            border border-gray-200 bg-white-1
                            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
                            focus-within:ring-white-2"
                                for="email"
                            >
                                <input
                                    class="peer h-8 w-full border-none bg-transparent
                            bg-white-1 p-0 placeholder-transparent
                            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="email"
                                    autocomplete="email"
                                    bind:value={email}
                                />
                                <span
                                    class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
                            bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                            peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    {$t("Email")}
                                </span>
                            </label>
                        </div>
                    </div>

                    <div class="-mx-3 mb-3 flex flex-wrap w-full">
                        <div class="w-full px-3">
                            <label
                                class="relative block overflow-hidden rounded-md
                            border border-gray-200 bg-white-1
                            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
                            focus-within:ring-white-2"
                                for="password"
                            >
                                <input
                                    class="peer h-8 w-full border-none bg-transparent
                            bg-white-1 p-0 placeholder-transparent
                            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    bind:value={password}
                                    id="password"
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    autocomplete="current-password"
                                    required
                                />
                                <span
                                    class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
                            bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                            peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    {$t("Password")}
                                </span>

                            </label>
                            <p class="mt-3 text-xs italic text-gray-600">
                                {$t("Password must consist at least from 6 symbols")}
                              </p>
                        </div>

                    </div>

                    {#if register}
                        <div class="-mx-3 mb-3 flex flex-wrap w-full">
                            <div class="w-full px-3">
                                <label
                                    class="relative block overflow-hidden rounded-md
                            border border-gray-200 bg-white-1
                            px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1
                            focus-within:ring-white-2"
                                    for="password"
                                >
                                    <input
                                        class="peer h-8 w-full border-none bg-transparent
                            bg-white-1 p-0 placeholder-transparent
                            focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                        bind:value={rpassword}
                                        id="rpassword"
                                        placeholder="   Repeat password"
                                        name="rpassword"
                                        type="password"
                                        required
                                    />
                                    <span
                                        class=" absolute start-3 top-3 -translate-y-1/2 cursor-text
                            bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2
                            peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                    >
                                        {$t("Repeat Password")}
                                    </span>
                                </label>
                            </div>
                        </div>
                    {/if}

                    
                    <SubmitButton bind:submitClicked bind:isLoading passedfunction={handleAuthenticate} text={"Submit"}/>

                </form>
            </div>
            <div class="flex h-2/6">
                <div class="options">
                    {#if register}
                        <div>
                            <p>{$t("Already have an account?")}</p>
                            <p
                                class=" via-red-00 bg-gradient-to-r from-pink-100 to-yellow-100 bg-clip-text font-anonymous text-base font-extrabold text-transparent transition hover:text-red-0 hover:opacity-25"
                                on:click={handleRegister}
                                on:keydown={() => {}}
                            >
                                {$t("Login")}
                            </p>
                        </div>
                    {:else}
                        <div>
                            <p>{$t("Don't have an account?")}</p>
                            <p
                                class=" via-red-00 bg-gradient-to-r from-pink-100 to-yellow-100 bg-clip-text font-anonymous text-base font-extrabold text-transparent transition hover:text-red-0 hover:opacity-25"
                                on:click={handleRegister}
                                on:keydown={() => {}}
                            >
                                {$t("Register")}
                            </p>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    <div class="flex max-h-screen w-2/6" />
</section>

<style>

    h1 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    form,
    .options {
        width: 400px;
        max-width: 100%;
        margin: 0 auto;
    }

    .errore {
        font-size: 0.9ram;
        text-align: center;
        @apply text-red-2;
    }

    .options {
        padding: 14px 0;
        overflow: hidden;
        font-size: 0.9rem;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .options div {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
    }

    .options div p:last-of-type {
        cursor: pointer;
        @apply text-orange-0;
    }
</style>
