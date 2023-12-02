<script>
    import { Language, authHandlers, authStore } from "../../store/store";

    import { addMessages, locale, t } from "svelte-i18n";
    import ru from "../../services/ru.json";
    import en from "../../services/en.json";
    import { currentLanguagee } from "../../store/store_";
    import LoadingButton from "../Shared/LoadingButton.svelte";
    import { base } from "$app/paths";
    import { onDestroy } from "svelte";
    import { page } from "$app/stores";
    import { applyAction } from "$app/forms";

    let sumbitClicked = false;
    let isLoading = true
    console.log("state of dynamic isloading",isLoading)

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

    let email = "";
    let password = "";
    let rpassword = "";
    let errore = false;
    let register = false;
    let authenticating = false;

    async function handleAuthenticate() {
        sumbitClicked = true;
        isLoading = true;
        if (authenticating) {
            isLoading = false;
            return;
        }
        if (!email || !password || (register && !rpassword)) {
            errore = true;
            isLoading = false;
            setTimeout(() => {
                // Calculate and set the new scroll position based on the previous percentage
                isLoading = true;    
                errore = false;
                sumbitClicked = false;
            }, 2500);
            return;
        }

        authenticating = true;
        isLoading = false;

        try {
            //console.log("before",register)
            // await authHandlers.login(email,password)
            
            if (!register) {
                //console.log("in !",register)
                await authHandlers.login(email, password);
            } else {
                //console.log("in else",register)
                await authHandlers.signup(email, password);
            }
            
        } catch (err) {

            console.error("auth error", err);
            isLoading = false;
            errore = true;
            authenticating = false;
            
            setTimeout(() => {
                // Calculate and set the new scroll position based on the previous percentage
                sumbitClicked = false
                errore = false;
            }, 2500);
        }
    }

    function handleRegister() {
        register = !register;
    }
</script>

<div class="containerAuth">
    <div class="flex max-h-screen w-2/6" />
    <div class="mb-6 table-column h-fit w-2/6">
        <div class=" mb-6 h-2/6 justify-center text-center">
            <h1 class="font-abril text-4xl text-blue-0">
                {register ? $t("REGISTER") : $t("LOGIN")}
            </h1>
            {#if errore}
                <div class=" my-6 flex justify-center">
                    <h1 class=" errore font-abril text-4xl">
                        {$t("The info is incorrect!")}
                    </h1>
                </div>
            {/if}
        </div>
        <div class="flex h-2/6">
            <form class="w-full max-w-lg">
                <div class="-mx-3 mb-6 flex flex-wrap">
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
                                autocomplete="email"
                                placeholder="email@mail-service.com"
                                required
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

                <div class="-mx-3 mb-3 flex flex-wrap">
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
                    </div>
                </div>

                <!-- <div>
                    <label for="password" class="block text-sm font-medium 
                    leading-6 text-gray-900">
                        {$t('Password')} 
                    </label>
                    <div class="mt-2">
                      <input bind:value={password} id="password" 
                      placeholder="Password" name="password" 
                      type="password" autocomplete="current-password" 
                      required class="block w-full rounded-md border-0 py-1.5 
                      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                      focus:ring-black-1 sm:text-sm sm:leading-6">
                    </div>
                  </div> -->

                {#if register}
                    <div class="-mx-3 mb-3 flex flex-wrap">
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
                                    type="rpassword"
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

                {#if sumbitClicked && !isLoading}
                <button
                class="relative mx-[98px] flex w-1/2
                items-center justify-center overflow-hidden
                rounded-md border border-orange-0
                px-8 py-3 focus:outline-none "
                type="button"
                >
                <span
                  class="absolute inset-x-0 bottom-0
                h-full bg-orange-0 transition-all
                "
                />
                
                <span
                  class="relative text-sm font-medium
                text-white transition-colors"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="mr-1 inline h-4 w-4 animate-spin text-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                </button>
                {:else}
                    <button
                        class="group relative mx-[98px] flex
                w-1/2 items-center justify-center overflow-hidden
                 rounded-md border border-orange-0
                px-8 py-3 focus:outline-none focus:ring"
                        on:click={handleAuthenticate}
                        type="button"
                    >
                        <span
                            class="absolute inset-x-0 bottom-0 h-[2px]
                  bg-orange-0 transition-all group-hover:h-full
                  group-active:bg-orange-0"
                        />

                        <span
                            class="relative text-sm font-medium
                  text-orange-0 transition-colors group-hover:text-white"
                        >
                            {$t("Submit")}
                        </span>
                    </button>
                {/if}
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
</div>

<style>
    .containerAuth {
        display: flex;
        flex: 1;
        padding-top: 15%;
        justify-items: center;
        @apply max-h-screen;
    }

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
