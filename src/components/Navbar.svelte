<script>
// @ts-nocheck

    import { base } from '$app/paths'
    import { onMount} from 'svelte'
    import {auth, db} from '../lib/firebase/firebase'
    import { getDoc, doc, setDoc } from 'firebase/firestore';
    import { Language, authHandlers, authStore } from '../store/store';
    import Menu from './Menu.svelte'

    import { addMessages, locale, t } from 'svelte-i18n';
    import ru from '../services/ru.json';
  import en from '../services/en.json';
  import { currentLanguagee } from "../store/store_";

  if($currentLanguagee!==undefined){
        const currentValue = $currentLanguagee;
        // Switch the language value
        if(currentValue === Language.English){
           
            addMessages(Language.English, en)
            locale.set(Language.English)
        } else {
          addMessages(Language.Russian, ru)
            locale.set(Language.Russian)
           
        }
    } else {
        addMessages(Language.English, en)
        locale.set(Language.English)
    }



     

    let isAdmin = false
    export let loginState = false
    export let readyExit = false

    const nonAuthRoutes = [`${base}/`,`${base}/about/`,`${base}/contact/`,`${base}/login/`,`${base}/shop/`]
    const AdminRoutes = [`${base}/dashboard`,`${base}/stat/`,`${base}/create/`,]

    try {
        onMount(() => {

    
            console.log('Mounting')

            const unsubscribe = auth.onAuthStateChanged(async (user) => {
                const currentPath = window.location.pathname
                
                console.log("we are hier: ",currentPath)
                console.log("is appropriate path for (no user): ",nonAuthRoutes.includes(currentPath))
                if(user){
                    console.log("there is a user: ",user)
                    isAdmin = user.email === "ktofreesapiens@gmail.com" ? true : false
                            
                    // if(user.email){
                    //     userName = user.email.slice(0,user.email?.search('@'))
                    // }
                                            
                } else {
                    console.log("there is no user: ",user)
                    isAdmin = false
                }

                // console.log("there is name: ",profile.name)
                
                if(user === null && !nonAuthRoutes.includes(currentPath)){
                    window.location.href = `${base}/`
                    loginState = false
                    readyExit = false
                    return
                }

                // if(!isAdmin && !AdminRoutes.includes(currentPath)){
                //     window.location.href = `${base}/`
                //     loginState = true
                //     readyExit = false
                //     return
                // }

                if(user !== null && currentPath === `${base}/login/`) {
                    window.location.href = `${base}/profile/`;
                    loginState = true
                    readyExit = false
                    setTimeout(() => {
                        location.reload();
                    }, 500);
                    return
                }

                // logout logic???????????
                if(user && currentPath === `${base}/profile/}`) {
                    readyExit = true
                    loginState = true
                    return
                }

                if(!user) {
                    loginState = false
                    readyExit = false
                    return
                } else {
                    loginState = true
                }

                let dataToSetToStore= {
                        email:user.email,
                        
                        messages: []
                        
                    };

                if(user){
                    const docRef = doc(db, 'user', user.uid)
                    
                    const docSnap = await getDoc(docRef)
                    if(!docSnap.exists()) {
                        //initialize users document
                        console.log('Creating user')
                        const userRef = doc(db,'user',user.uid)
                        dataToSetToStore = {
                            email:user.email, 
                            messages: []
                        }
                        await setDoc(
                            userRef,
                            dataToSetToStore,
                            {merge: true}
                        )
                        if(user.email === "ktofreesapiens@gmail.com")
                            isAdmin = true
                    } else {
                        console.log("Fetching User");
                        const userData = docSnap.data()
                        
                        dataToSetToStore = userData
                        if(dataToSetToStore.email === "ktofreesapiens@gmail.com")
                            isAdmin = true
                        
                        authStore.set((curr) => { // was update
                        return{
                            ...curr,
                            user:user,
                            data:{
                                ...curr.data,
                                email: dataToSetToStore.email
                            },
                            loading: false,
                        }
                            
                    })
                    
                    }
                }
                
            })
        return unsubscribe
        })
    } catch (error) {
        console.log("error while mounting", error)
    }
    
    
</script>

<nav class="flex w-screen font-anonymous">
    <!--The form itself  -->
    <div class="fixed top-0 z-30 w-full">
        <div class='flex items-center justify-between mx-auto w-11/12 bg-white-1 shadow-white-2 drop-shadow-2xl border-x-4 border-navy-1'>
            <div class='flex items-center justify-between mx-2 w-full lg:gap-16 sm:gap-0 md:gap-8'>
                <!-- Logo(Left side) -->
                <div class="text-2xl ">
                    <a class="hover:text-yellow-0" 
                    target="_self" href='{base}/'>
                        <h1>
                            <p class="flex justify-center">
                                NIKITA
                            </p>
                            <p>
                                NIAKHAI
                            </p>
                        </h1>
                    </a>
                </div>
                <!-- Links(Center) -->
                <div class="flex items-center justify-between drop-shadow lg:mx-20 sm:mx-8 md:mx-12">
                    <div class="border-r-2 border-navy-2">
                        <a  class="text-black no-underline 
                        hover:underline underline-offset-4"   target="_self" 
                        href='{base}/about' >{$t('About')} </a>
                        <a  class="text-black no-underline lg:mx-20 sm:mx-8 md:mx-12 
                        hover:underline underline-offset-4"   target="_self" 
                        href='{base}/contact' >{$t('Contact')} </a>
                    </div>
                    <div class="border-l-2 border-navy-2">
                        <a  class="text-black no-underline lg:mx-20 sm:mx-8 md:mx-12
                        hover:underline underline-offset-4"   
                        target="_self" href='{base}/posts' >{$t('Shop')} </a>
                        <a  class="text-black no-underline 
                        hover:underline underline-offset-4"   
                        target="_self" href='{base}/works' >{$t('Works')} </a>
                    </div>
                    
                </div>   
            
                <!-- Login/Profile(Right side) -->
                <div>  
                    <div class="grid-column-auto grid-row-auto ">
                        {#if loginState == false}
                            <a on:click={authHandlers.login} class="col-span-full 
                            grid-row-auto transition duration-100 
                            hover:text-yellow-0" target="_self" href='{base}/login'>
                                {$t('Login')} 
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