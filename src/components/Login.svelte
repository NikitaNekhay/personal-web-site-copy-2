<script >
    import { authHandlers } from "../store/store";
    import { base } from '$app/paths'
    import { addMessages, locale, t } from 'svelte-i18n';
    import ru from '../services/ru.json';

    // Загружаем переводы для русского языка
    addMessages('ru', ru);
    // Устанавливаем язык по умолчанию
    locale.set('ru')

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
    <div class="h-fit w-2/6 table-column">
        <div class=" h-2/6 justify-center text-center">
            <h1>{register ? $t('REGISTER') : $t('LOGIN')}</h1>
            {#if errore}

            <div class="containterErrore ">
                <p class="errore">{$t('The info is incorrect!')}</p>
            </div>
            {/if}
        </div>
        <div class="flex h-2/6">
            
            <form>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">{$t('Email address')}</label>
                    <div class="mt-2">
                      <input bind:value={email} id="email" name="email" 
                      type="email" autocomplete="email" 
                      placeholder="email@mail-service.com" required 
                      class="block w-full rounded-md border-0 py-1.5 
                      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                      focus:ring-black-1 sm:text-sm sm:leading-6">
                    </div>
                  </div>
            
                  <div>
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
                  </div>

                {#if register}
                    <div>
                        <label for="password" class="block text-sm font-medium 
                        leading-6 text-gray-900">
                            {$t('Repeat Password')} 
                        </label>
                        <div class="mt-2">
                            <input bind:value={rpassword} id="rpassword" 
                            placeholder="   Repeat password" name="rpassword" 
                            type="rpassword" autocomplete="password" required 
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                            focus:ring-2 focus:ring-inset focus:ring-black-1 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                {/if}
                
                <div>
                    <button on:click={handleAuthenticate} type="button" class="flex w-full justify-center rounded-md bg-navy-1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  transition duration-100 hover:bg-red-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {#if authenticating}
                            <img alt="spinner" src="{base}/media/envelop.svg" class="spinner" />
                        {:else}
                            {$t('Submit')} 
                        {/if}
                    </button>
                  </div>
                
            </form>
           
        </div>
        <div class="flex h-2/6">
            <div class="options">
                {#if register}
                    <div> 
                        <p>{$t('Already have an account?')} </p> 
                        <p on:click={handleRegister} on:keydown={() => {}}>{$t('Login')}</p>
                    </div> 
                {:else}
                    <div> 
                        <p>{$t("Don't have an account?")} </p> 
                        <p on:click={handleRegister} on:keydown={() => {}}>{$t('Register')} </p>
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