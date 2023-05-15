<script>
// @ts-nocheck

    import { base } from '$app/paths'
    import {getContext, onMount} from 'svelte'
    import {auth, db} from '../lib/firebase/firebase'
    import { getDoc, doc, setDoc } from 'firebase/firestore';
    import { authHandlers, authStore } from '../store/store';
    import Menu from './Menu.svelte'
    import { readable } from 'svelte/store';
    const nonAuthRoutes = [`${base}/`,`${base}/about/`,`${base}/contact/`,`${base}/diary/`,`${base}/login/`]
    //const AuthRoutes = [`${base}/dashboard/`,`${base}/profile/`]

    
    export {loginState}
    export {readyExit} 
    let loginState = false
    let readyExit = false
    
    // import {profile} from "./Edituserprofile.svelte"
    let userName = "Mister"

    try {
        onMount(() => {
        console.log('Mounting')
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const currentPath = window.location.pathname
            
            console.log("we are hier: ",currentPath)
            console.log("is appropriate path for (no user): ",nonAuthRoutes.includes(currentPath))
            if(user){
                console.log("there is a user: ",user)
                if(user.email)
                    userName = user.email.slice(0,user.email?.search('@'))
            } else {
                console.log("there is no user: ",user)
            }

            // console.log("there is name: ",profile.name)
            
            if(user === null && !nonAuthRoutes.includes(currentPath)){
                window.location.href = `${base}/`
                loginState = false
                readyExit = false
                return
            }

            if(user !== null && currentPath === `${base}/login/`) {
                window.location.href = `${base}/profile`
                loginState = true
                readyExit = false
                return
            }

            // logout logic
            if(user && currentPath === `${base}/profile/`) {
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
                } else {
                    console.log("Fetching User");
                    const userData = docSnap.data()
                    
                    dataToSetToStore = userData
                    // console.log(dataToSetToStore)
                    authStore.update((curr) => {
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
        console.log("error while mounting")
    }
    
</script>

<nav class="flex w-screen font-anonymous">
    <!--The form itself  -->
    <div class="fixed top-0 z-30 w-full py-">
        <div class='flex items-center justify-between mx-auto w-11/12 bg-white-1 shadow-white-2 drop-shadow-2xl border-x-4 border-navy-1'>
            <div class='flex items-center justify-between mx-2 w-full gap-16 '>
                <!-- Logo(Left side) -->
                <div class="text-2xl ">
                    <h1><p  class="flex justify-center">NIKITA</p><p>NIAKHAI</p></h1>
                </div>
                <!-- Links(Center) -->
                <div class="flex items-center justify-between drop-shadow mx-20 ">
                    <div class="border-r-2 border-navy-2">
                        <a  class="text-black no-underline hover:underline underline-offset-4"   target="_self" href='{base}/about' >About</a>
                        <a  class="text-black no-underline mx-20 hover:underline underline-offset-4"   target="_self" href='{base}/contact' >Contact</a>
                    </div>
                    <div class="border-l-2 border-navy-2">
                        <a  class="text-black no-underline mx-20 hover:underline underline-offset-4"   target="_self" href='{base}/diary' >Diary</a>
                        <a  class="text-black no-underline hover:underline underline-offset-4"   target="_self" href='{base}/' >Works</a>
                    </div>
                    
                </div>   
            
                <!-- Login/Profile(Right side) -->
                <div>
                  
                    <!-- Login/Dashboard -->

                   

                    <div class="grid-column-auto grid-row-auto ">
                        {#if loginState == false}
                            <a on:click={authHandlers.login} class="col-span-full grid-row-auto transition duration-100 hover:text-yellow-0" target="_self" href='{base}/login'>
                                Login
                            </a>
                        {:else}
                            <Menu />
                        {/if}
                        <!-- {#if loginState == false}
                        <a on:click={authHandlers.login} class="col-span-full grid-row-auto transition duration-100 hover:text-yellow-0" target="_self" href='{base}/login'>
                            Login
                        </a>
                        {:else if readyExit == true}    
                        <a on:click={authHandlers.logout} class="col-span-full grid-row-auto" target="_self"  href='{base}/'>
                              
                            {userName} Logout
                        </a>
                        {:else}
                        <a class="col-span-full grid-row-auto" target="_self"  href='{base}/profile'>
                            {userName}
                        </a>
                        {/if} -->
                    </div>    
                </div>
            </div>
        </div>
    </div>
</nav>