<script >
    import { authHandlers, currentLanguage } from "../store/store";
    import { base } from '$app/paths'
    import { addMessages, locale, t } from 'svelte-i18n';
    import ru from '../services/ru.json';
    import en from '../services/en.json'
    import { onMount } from "svelte";

          // Загружаем переводы для русского языка
          addMessages('en', en);
          // Устанавливаем язык по умолчанию
          locale.set('en')
    let email = "";
    let password ="";
    let rpassword = "";
    let errore = false
    let register = false
    let authenticating = false
    
    async function handleAuthenticate(){
        if(authenticating){
            return
        }
        if(!email || !password || (register && !rpassword)){
            errore= true;
            return;
        }

        authenticating = true

        try{
            console.log("before",register)
            // await authHandlers.login(email,password)
            if(!register) {
                console.log("in !",register)
                await authHandlers.login(email,password)
            } else {
                console.log("in else",register)
                await authHandlers.signup(email,password)
            }
        } catch (err) {
            console.log("auth error", err)
            errore = true
            authenticating = false
        }
        

    }

    function handleRegister() {
        register = !register;

    }

</script>

<div class="containerAuth">
    <div class="flex max-h-screen w-2/6">
    </div> 
    <div class="h-fit w-2/6 table-column mb-6">
        <div class=" h-2/6 justify-center text-center mb-6">
            <h1 class="text-blue-0 text-4xl font-abril">{register ? $t('REGISTER') : $t('LOGIN')}</h1>
            {#if errore}
            <div class=" flex justify-center my-6">
                <h1 class=" errore text-4xl font-abril">{$t('The info is incorrect!')}</h1>
              </div>
            {/if}
        </div>
        <div class="flex h-2/6">
            
            <form class="w-full max-w-lg ">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block relative overflow-hidden bg-white-1 
                        rounded-md border border-gray-200
                        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
                        focus-within:ring-white-2" for="email">
                          <input class="peer bg-white-1 h-8 w-full border-none 
                          bg-transparent p-0 placeholder-transparent 
                          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
                          id="email" name="email" 
                            type="email" autocomplete="email" 
                            placeholder="email@mail-service.com" required 
                          bind:value={email}>
                          <span
                          class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
                          text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
                          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                          >
                            {$t('Author Email')} 
                          </span>
                        </label>
                    </div>
                </div>
            
                <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full px-3">
                        <label class="block relative overflow-hidden bg-white-1 
                        rounded-md border border-gray-200
                        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
                        focus-within:ring-white-2" for="password">
                          <input class="peer bg-white-1 h-8 w-full border-none 
                          bg-transparent p-0 placeholder-transparent 
                          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
                          bind:value={password} id="password" 
                            placeholder="Password" name="password" 
                            type="password" autocomplete="current-password" 
                            required
                          >
                          <span
                          class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
                          text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
                          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                          >
                          {$t('Password')} 
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

                <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full px-3">
                        <label class="block relative overflow-hidden bg-white-1 
                        rounded-md border border-gray-200
                        px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 
                        focus-within:ring-white-2" for="password">
                          <input class="peer bg-white-1 h-8 w-full border-none 
                          bg-transparent p-0 placeholder-transparent 
                          focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
                          bind:value={rpassword} id="rpassword" 
                            placeholder="   Repeat password" name="rpassword" 
                            type="rpassword" autocomplete="password" required 
                          >
                          <span
                          class=" cursor-text absolute start-3 top-3 -translate-y-1/2 
                          text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 
                          peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                          >
                          {$t('Repeat Password')} 
                          </span>
                        </label>
                    </div>
                </div>
                {/if}
                

                <button
                class="flex items-center mx-[98px] w-1/2 
                rounded-md justify-center group relative 
                 overflow-hidden border border-orange-0
                px-8 py-3 focus:outline-none focus:ring"
                on:click={handleAuthenticate} type="button"
                >
                <span
                  class="absolute inset-x-0 bottom-0 h-[2px] 
                  bg-orange-0 transition-all group-hover:h-full 
                  group-active:bg-orange-0"
                ></span>
          
                <span
                  class="relative text-sm font-medium 
                  text-orange-0 transition-colors group-hover:text-white"
                >
                {$t('Submit')} 
                </span>
              </button>
                
            </form>
           
        </div>
        <div class="flex h-2/6">
            <div class="options">
                {#if register}
                    <div> 
                        <p>{$t('Already have an account?')} </p> 
                        <p class=" font-anonymous text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-red-00 to-yellow-100 transition hover:opacity-25 hover:text-red-0" on:click={handleRegister} on:keydown={() => {}}>{$t('Login')}</p>
                    </div> 
                {:else}
                    <div> 
                        <p>{$t("Don't have an account?")} </p> 
                        <p class=" font-anonymous text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-red-00 to-yellow-100 transition hover:opacity-25 hover:text-red-0" on:click={handleRegister} on:keydown={() => {}}>{$t('Register')} </p>
                    </div> 
                {/if}
            </div>
        </div>
    </div>
    <div class="flex max-h-screen w-2/6">
    </div>
</div>

<style>

    .containerAuth{
        display:flex;
        flex: 1;
        padding-top:15%;
        justify-items: center;
        @apply max-h-screen;
    }   

     h1{
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    form,
    .options{
        width: 400px;
        max-width: 100%;
        margin: 0 auto;
    }

    .errore{
        font-size: 0.9ram;
        text-align: center;
        @apply text-red-2;
    }

    .options{
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

    .spinner{
        animation: spin 1s linear infinite;
    }

    @keyframes spinner {
        from{
            transform: rotate(0deg);
        } to {
            transform: rotate(360deg);
        }
    }

</style>