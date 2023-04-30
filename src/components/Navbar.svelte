<script>
    import { base } from '$app/paths'
    import {onMount} from 'svelte'
    import {auth, db} from '../lib/firebase/firebase'
    import { getDoc, doc, setDoc } from 'firebase/firestore';
    import { authHandlers, authStore } from '../store/store';

    const nonAuthRoutes = ['/',"/about/",'/contact/','/diary/','/login/']

    let loginState = false
    let readyExit = false
    export {loginState}
    export {readyExit} 


    onMount(() => {
        console.log('Mounting')
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            const currentPath = window.location.pathname

            console.log(currentPath)

            if(!user && !nonAuthRoutes.includes(currentPath)){
                window.location.href = `${base}/`
                loginState = false
                return
            }

            if(user && currentPath === `${base}/login/`) {
                window.location.href = `${base}/dashboard`
                loginState = true
                return
            }

            // logout logic
            if(user && currentPath === `${base}/dashboard/`) {
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
                //console.log(userData)
            }
            
            authStore.update((curr) => {
                return{
                    ...curr,
                    user:user,
                    data:dataToSetToStore,
                    loading: false,
                }
                    
            })

        })
        return unsubscribe
    })
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
                    <!-- Logo -->
                    <div class="grid-column-auto grid-row-auto">
                        <h1 class="text-base inline-block pl-10 pt-25 pb-20 text-left">123</h1>
                    </div>
                    <!-- Login/Dashboard -->
                    <div class="grid-column-auto grid-row-auto ">
                        {#if loginState == false}
                        <a on:click={authHandlers.login} class="col-span-full grid-row-auto transition duration-100 hover:text-yellow-0" target="_self" href='{base}/login'>Login</a>
                        {:else if readyExit == true}
                        <a on:click={authHandlers.logout} class="col-span-full grid-row-auto" target="_self"  href='{base}/'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>                          
                            Logout
                        </a>
                        {:else}
                        <a class="col-span-full grid-row-auto" target="_self"  href='{base}/dashboard'>Dashboard</a>
                        {/if}
                    </div>    
                </div>
            </div>
        </div>
    </div>
</nav>