<script lang="ts">
    import Navbar from "../components/NavbarFooter/Navbar.svelte";
    import EmptyPage from "../components/Shared/EmptyPage.svelte";
    import "../app.css";
    import Footer from "../components/NavbarFooter/Footer.svelte";
    import { page } from "$app/stores";



    import { onMount, setContext, subscribe } from "svelte/internal";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "$lib/firebase/firebase";
import { base } from "$app/paths";
    import { authStore } from "../store/store";



let isAdmin:Boolean = false;
let passComponent:Boolean = false;
let loginState:Boolean = false;
let readyExit:Boolean = false;

    const nonAuthRoutes = [
        `${base}/`,
        `${base}/about/`,
        `${base}/contact/`,
        `${base}/login/`,
        `${base}/shop/`,
        `${base}/works/`,
    ];
    const AdminRoutes = [
        `${base}/dashboard/`,
        `${base}/stat/`,
        `${base}/create/`,
        `${base}/posts/`,
    ];

   try {
        onMount(() => {
            //console.log("mounting: ")
            const unsubscribe = auth.onAuthStateChanged(async (user) => {
                const currentPath = window.location.pathname;

                {
                    if (user) {
                        console.log("there is a user: ",user)
                        
                       $: isAdmin =
                            user.email === "ktofreesapiens@gmail.com" || "vaper20041337@gmail.com"
                                ? true
                                : false;
                    } else {
                        //console.log("there is no user: ",user)
                       $: isAdmin = false;
                    }
    
                    if (user === null && !nonAuthRoutes.includes(currentPath)) {
                        window.location.href = `${base}/`;
                        $:loginState = false;
                       $: readyExit = false;
                        return;
                    }
    
                    if (user !== null && currentPath === `${base}/login/`) {
                        window.location.href = `${base}/profile/`;
                        $:loginState = true;
                       $: readyExit = false;
                        // setTimeout(() => {
                        //     location.reload();
                        // }, 500);
                        return;
                    }
    
                    // logout logic???????????
                    if (user && currentPath === `${base}/profile/}`) {
                      $:  readyExit = true;
                       $: loginState = true;
                        return;
                    }
    
                    if (!user) {
                       $: loginState = false;
                       $: readyExit = false;
                        return;
                    } else {
                       $: loginState = true;
                    }
    
                }

                let dataToSetToStore = {
                    name: "template",
                    email: user ? user.email : "",
                    phone: "",
                    country: "",
                    description: "",
                    messages: [],
                };

                const docRef = doc(db, "user", user.uid);
                const docSnap = await getDoc(docRef);
                //console.log("what is docSnap",docSnap)
                if (!docSnap.exists()) {
                    //initialize users document
                    //console.log('Creating user')
                    
                    const userRef = doc(db, "user", user.uid); // what we have in db; if first created user - nothing
                    //console.log("what is userRef",userRef)
                    dataToSetToStore = {
                        name: userRef.name ||"template",
                        email:userRef.email || dataToSetToStore.email,
                        phone: userRef.phone ||"",
                        country: userRef.phone ||"",
                        description: userRef.description ||"",
                        messages: userRef.messages || [],
                    };
                    await setDoc(userRef, dataToSetToStore, {
                        merge: true,
                    });
                    authStore.set({
                        user: user,
                        data: dataToSetToStore,
                        loading: false,
                    })


                } else {
                    //console.log("Fetching User");
                    // when already logged in
                    const userData = docSnap.data(); // this is saved data of user from db 
                    //console.log("what is userData",userData) 
                    dataToSetToStore = {
                        name: userData.name ||"template",
                        phone: userData.phone ||"",
                        email:userData.email || dataToSetToStore.email,
                        country: userData.phone ||"",
                        description: userData.description ||"",
                        messages: userData.messages || [],
                    };
                    //console.log("what is userData in dataToSetToStore",dataToSetToStore) 
                    authStore.set({
                        user: user,
                        data: dataToSetToStore,
                        loading: false,
                    })

                }
               
                
            });
            const interval = setInterval(() => {
                //console.log('hi')
              $:  passComponent = true;
            }, 1000);
            return subscribe
            
        });
    } catch (error) {
        console.error("error while mounting", error);
    }

</script>


<Navbar {isAdmin}{passComponent}{loginState}{readyExit} />
{#if $page.error}
  <EmptyPage />
{:else}
  <slot />
{/if}
<Footer />