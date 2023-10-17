<!-- <script lang="ts">
    import Navbar from "../components/NavbarFooter/Navbar.svelte";
    import EmptyPage from "../components/Shared/EmptyPage.svelte";
    import "../app.css";
    import Footer from "../components/NavbarFooter/Footer.svelte";
    import { page } from "$app/stores";



    import { onMount, setContext, subscribe } from "svelte/internal";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "$lib/firebase/firebase";
import { base } from "$app/paths";
    import { authStore, isAdmin } from "../store/store";



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
                isAdmin.set({value:false})
                {
                    if (user) {
                        console.log("there is a user: ",user)
                        if(user.email === "ktofreesapiens@gmail.com" || user.email === "vaper20041337@gmail.com"){
                            isAdmin.set({value:true}) 
                            $isAdmin.value = true;
                            console.log("admin");
                            
                        }
                            
                        else{
                            isAdmin.set({value:false})
                            $isAdmin.value = false;
                        }
                            
                        console.log(" $isAdmin.value ", $isAdmin.value)
                    } else {
                        //console.log("there is no user: ",user)
                        isAdmin.set({value:false})
                        $isAdmin.value = false;
                    }
    
                    if (user === null && !nonAuthRoutes.includes(currentPath)) {
                        window.location.href = `${base}/`;
                        $:loginState = false;
                       $: readyExit = false;
                        return;
                    }

                    if (AdminRoutes.includes(currentPath) && $isAdmin.value===false) {
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
                    email: (user ? user.email : ""),
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
                        name: userRef.name ?? "template",
                        email:userRef.email ?? "",
                        phone: userRef.phone ??"",
                        country: userRef.phone ??"",
                        description: userRef.description ??"",
                        messages: userRef.messages ??[],
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

</script> -->
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
    import { authStore, isAdmin } from "../store/store";

    let passComponent: boolean = false;
    let loginState: boolean = false;
    let readyExit: boolean = false;

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

    const checkUserStatus = (user) => {
        isAdmin.set({ value: false });

        if (user) {
            console.log("there is a user: ", user);
            if (user.email === "ktofreesapiens@gmail.com" || user.email === "vaper20041337@gmail.com") {
                isAdmin.set({ value: true });
            } else {
                isAdmin.set({ value: false });
            }
            console.log("$isAdmin.value ", $isAdmin.value);
        } else {
            isAdmin.set({ value: false });
        }
    };

    const handleRedirect = (user, currentPath) => {
        if (user === null && !nonAuthRoutes.includes(currentPath)) {
            window.location.href = `${base}/`;
            loginState = false;
            readyExit = false;
        }

        if (AdminRoutes.includes(currentPath) && !$isAdmin.value) {
            window.location.href = `${base}/`;
            loginState = false;
            readyExit = false;
        }

        if (user !== null && currentPath === `${base}/login/`) {
            window.location.href = `${base}/profile/`;
            loginState = true;
            readyExit = false;
        }

        if (user && currentPath === `${base}/profile/}`) {
            readyExit = true;
            loginState = true;
        }

        if (!user) {
            loginState = false;
            readyExit = false;
        } else {
            loginState = true;
        }
    };

    try {
        onMount(() => {
            const unsubscribe = auth.onAuthStateChanged(async (user) => {
                const currentPath = window.location.pathname;
                checkUserStatus(user);

                if (user === null && !nonAuthRoutes.includes(currentPath)) {
                    window.location.href = `${base}/`;
                    loginState = false;
                    readyExit = false;
                    return;
                }

                if (AdminRoutes.includes(currentPath) && !$isAdmin.value) {
                    window.location.href = `${base}/`;
                    loginState = false;
                    readyExit = false;
                    return;
                }

                if (user !== null && currentPath === `${base}/login/`) {
                    window.location.href = `${base}/profile/`;
                    loginState = true;
                    readyExit = false;
                    return;
                }

                if (user && currentPath === `${base}/profile/}`) {
                    readyExit = true;
                    loginState = true;
                    return;
                }

                if (!user) {
                    loginState = false;
                    readyExit = false;
                    return;
                } else {
                    loginState = true;
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

                if (!docSnap.exists()) {
                    const userRef = doc(db, "user", user.uid);
                    dataToSetToStore = {
                        name: userRef.name ?? "template",
                        email: userRef.email ?? "",
                        phone: userRef.phone ?? "",
                        country: userRef.phone ?? "",
                        description: userRef.description ?? "",
                        messages: userRef.messages ?? [],
                    };
                    await setDoc(userRef, dataToSetToStore, {
                        merge: true,
                    });
                    authStore.set({
                        user: user,
                        data: dataToSetToStore,
                        loading: false,
                    });
                } else {
                    const userData = docSnap.data();
                    dataToSetToStore = {
                        name: userData.name || "template",
                        phone: userData.phone || "",
                        email: userData.email || dataToSetToStore.email,
                        country: userData.phone || "",
                        description: userData.description || "",
                        messages: userData.messages || [],
                    };
                    authStore.set({
                        user: user,
                        data: dataToSetToStore,
                        loading: false,
                    });
                }
            });

            const interval = setInterval(() => {
                passComponent = true;
            }, 1000);

            return subscribe;
        });
    } catch (error) {
        console.error("error while mounting", error);
    }
</script>



<Navbar {passComponent}{loginState}{readyExit} />
{#if $page.error}
  <EmptyPage />
{:else}
  <slot />
{/if}
<Footer />